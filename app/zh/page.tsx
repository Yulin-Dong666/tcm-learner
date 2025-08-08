import Link from 'next/link'

export default function ZH() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="text-2xl font-bold">首页（中文）</h1>
      <ul className="mt-4 list-disc pl-6">
        <li><Link href="/zh/pulse">诊脉基础：寸关尺与常见脉象</Link></li>
        <li><Link href="/zh/meridians">穴位与经络</Link></li>
        <li><Link href="/zh/inspection">面诊与舌诊</Link></li>
        <li><Link href="/zh/resources">资源中心</Link></li>
      </ul>
    </main>
  )
}
