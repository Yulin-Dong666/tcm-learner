import Link from 'next/link'

export default function EN() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">Home (English)</h1>
      <ul className="mt-4 list-disc pl-6">
        <li><Link href="/en/pulse">Pulse Basics: Cun‑Guan‑Chi & Common Pulses</Link></li>
        <li><Link href="/en/meridians">Meridians & Points</Link></li>
        <li><Link href="/en/inspection">Face & Tongue</Link></li>
        <li><Link href="/en/resources">Resources</Link></li>
      </ul>
    </main>
  )
}
