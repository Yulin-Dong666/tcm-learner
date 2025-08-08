import Link from 'next/link'

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <div className="py-10 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">走进中医的世界，从零开始了解身体的智慧</h1>
          <p className="mt-3 text-slate-600">
            零基础 / 爱好者 / 初学者从业者都能学：诊脉、针灸、经络穴位、面诊与舌诊。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="btn" href="/zh/pulse">如何诊脉</Link>
            <Link className="btn-outline" href="/zh/acupuncture">针灸入门</Link>
            <Link className="btn-outline" href="/zh/meridians">穴位与经络</Link>
            <Link className="btn-outline" href="/zh/inspection">面诊与舌诊</Link>
          </div>
          <p className="mt-4 text-xs text-slate-500">本站仅供学习交流，不替代医疗诊断或治疗。</p>
          <div className="mt-6 flex gap-2">
            <Link className="btn-outline" href="/zh">中文</Link>
            <Link className="btn-outline" href="/en">English</Link>
          </div>
        </div>
        <div className="card p-5">
          <h3>站内搜索（示例）</h3>
          <p className="text-sm text-slate-600 mt-2">上线后接 Algolia / 本地索引。</p>
        </div>
      </div>
    </main>
  )
}
