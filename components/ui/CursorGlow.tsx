'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: { x: number; y: number }
  life: number
}

interface Ripple {
  id: number
  x: number
  y: number
}

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isInHeroSection, setIsInHeroSection] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [cursorScale, setCursorScale] = useState(1)

  // Check if cursor is in Hero section
  useEffect(() => {
    const checkSection = () => {
      const heroSection = document.querySelector('section')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        const isInHero = rect.top <= window.innerHeight && rect.bottom >= 0
        setIsInHeroSection(isInHero)
      }
    }

    checkSection()
    window.addEventListener('scroll', checkSection)
    window.addEventListener('resize', checkSection)

    return () => {
      window.removeEventListener('scroll', checkSection)
      window.removeEventListener('resize', checkSection)
    }
  }, [])

  // Detect hovering over interactive elements (only in Hero section)
  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if (!isInHeroSection) return
      
      const target = e.target as HTMLElement
      const isInteractive = target.tagName === 'A' || 
                           target.tagName === 'BUTTON' || 
                           target.closest('a') !== null || 
                           target.closest('button') !== null ||
                           target.style.cursor === 'pointer'
      setIsHovering(isInteractive)
      setCursorScale(isInteractive ? 1.5 : 1)
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [isInHeroSection])

  // Handle mouse movement and particle generation (only in Hero section)
  useEffect(() => {
    let particleId = 0
    let lastParticleTime = 0

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      if (!isInHeroSection) return

      // Generate particles at intervals
      const now = Date.now()
      if (now - lastParticleTime > 50) {
        lastParticleTime = now
        
        const colors = ['#3b82f6', '#8b5cf6', '#06b6d4']
        const newParticle: Particle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          velocity: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          },
          life: 1
        }

        setParticles(prev => [...prev.slice(-20), newParticle])
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isInHeroSection])

  // Handle click ripple effect (only in Hero section)
  useEffect(() => {
    let rippleId = 0

    const handleClick = (e: MouseEvent) => {
      if (!isInHeroSection) return

      const newRipple: Ripple = {
        id: rippleId++,
        x: e.clientX,
        y: e.clientY
      }

      setRipples(prev => [...prev, newRipple])

      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 800)
    }

    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [isInHeroSection])

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocity.x,
            y: p.y + p.velocity.y,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [])

  // Don't render custom cursor elements if not in Hero section
  if (!isInHeroSection) {
    return (
      <>
        {/* Main glow - follows cursor */}
        <motion.div
          className="pointer-events-none fixed z-50 mix-blend-screen"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
            opacity: isVisible ? 0.7 : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            mass: 0.3
          }}
          style={{
            width: '400px',
            height: '400px',
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-primary/40 via-accent/20 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Secondary trailing glow */}
        <motion.div
          className="pointer-events-none fixed z-50 mix-blend-screen"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
            opacity: isVisible ? 0.5 : 0,
          }}
          transition={{
            type: "spring",
            damping: 35,
            stiffness: 200,
            mass: 0.6
          }}
          style={{
            width: '600px',
            height: '600px',
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-secondary/25 via-primary/10 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </>
    )
  }

  return (
    <>
      {/* Custom cursor dot - only in Hero */}
      <motion.div
        className="pointer-events-none fixed z-[100]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: cursorScale,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.1
        }}
        style={{
          width: '12px',
          height: '12px',
        }}
      >
        <div className="w-full h-full bg-accent rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
      </motion.div>

      {/* Custom cursor ring - only in Hero */}
      <motion.div
        className="pointer-events-none fixed z-[99] border-2 rounded-full"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: cursorScale,
          opacity: isVisible ? 0.6 : 0,
          borderColor: isHovering ? '#8b5cf6' : '#3b82f6'
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.3
        }}
        style={{
          width: '40px',
          height: '40px',
        }}
      />

      {/* Particles - only in Hero */}
      <AnimatePresence>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="pointer-events-none fixed z-[98] rounded-full"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: particle.life,
              scale: 0.5
            }}
            exit={{ opacity: 0 }}
            style={{
              left: particle.x - particle.size / 2,
              top: particle.y - particle.size / 2,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
          />
        ))}
      </AnimatePresence>

      {/* Click ripples - only in Hero */}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.div
            key={ripple.id}
            className="pointer-events-none fixed z-[97] border-2 border-accent rounded-full"
            initial={{ 
              x: ripple.x - 20,
              y: ripple.y - 20,
              width: 40,
              height: 40,
              opacity: 0.8,
              scale: 0
            }}
            animate={{ 
              scale: 3,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Main glow - follows cursor */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          opacity: isVisible ? (isHovering ? 1 : 0.7) : 0,
          scale: isHovering ? 1.2 : 1
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.3
        }}
        style={{
          width: '400px',
          height: '400px',
        }}
      >
        <div 
          className="w-full h-full rounded-full blur-3xl"
          style={{
            background: isHovering 
              ? 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(6,182,212,0.2) 40%, transparent 70%)'
          }}
        />
      </motion.div>

      {/* Secondary trailing glow */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 200,
          mass: 0.6
        }}
        style={{
          width: '600px',
          height: '600px',
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-secondary/25 via-primary/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      {/* Ambient glow - slowest */}
      <motion.div
        className="pointer-events-none fixed z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 350,
          y: mousePosition.y - 350,
          opacity: isVisible ? 0.3 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 120,
          mass: 1
        }}
        style={{
          width: '700px',
          height: '700px',
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-accent/15 via-secondary/8 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </>
  )
}
