import { Link } from 'react-router-dom'
import { CompanionCard } from '../components/CompanionCard'
import { getAllCompanions } from '../lib/content'

export function CompanionListPage() {
  const list = getAllCompanions()

  return (
    <main className="page">
      <nav className="crumbs">
        <Link to="/">首页</Link> / 全部同伴
      </nav>
      <header className="section-head">
        <h1>全部同伴</h1>
        <p>二级查询入口。更建议从首页按玩法拿整套方案。</p>
      </header>
      <div className="card-grid">
        {list.map((c) => (
          <CompanionCard key={c.id} companion={c} />
        ))}
      </div>
    </main>
  )
}
