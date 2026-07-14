import { Link } from 'react-router-dom'
import { PlaystylePicker } from '../components/PlaystylePicker'

export function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">骑马与砍杀：战团 · 稳妥路线</p>
        <h1>同伴玩法蓝图</h1>
        <p className="lede">
          选一个玩法，直接拿到招谁、谁别一起、怎么加点、买什么装备。推荐属意见型，适合新手少瞎试。
        </p>
      </header>
      <PlaystylePicker />
      <p className="footer-link">
        <Link to="/companions">浏览全部同伴</Link>
      </p>
    </main>
  )
}
