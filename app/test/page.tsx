import Link from 'next/link'

export default function TestPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Test Page Works!</h1>
      <p>If you see this, Next.js routing is working.</p>
      <Link href="/">Go to Home</Link>
    </div>
  )
}
