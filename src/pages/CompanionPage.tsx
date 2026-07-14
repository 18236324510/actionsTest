import { Link, useParams } from 'react-router-dom'
import { BuildBlock } from '../components/BuildBlock'
import { GearBlock } from '../components/GearBlock'
import { PLAYSTYLE_LABELS } from '../data/types'
import {
  getAdviceForCompanion,
  getAllBlueprints,
  getCompanion,
  getPlaystylesFeaturing,
} from '../lib/content'

export function CompanionPage() {
  const { companionId } = useParams()
  const companion = companionId ? getCompanion(companionId) : undefined

  if (!companion) {
    return (
      <main className="page">
        <h1>未找到该同伴</h1>
        <p>没有 id 为「{companionId}」的同伴数据。</p>
        <Link to="/companions">返回同伴列表</Link>
      </main>
    )
  }

  const playstyles = getPlaystylesFeaturing(companion.id)
  const likeNames = companion.likes
    .map((id) => getCompanion(id)?.name ?? id)
    .join('、')
  const dislikeNames = companion.dislikes
    .map((id) => getCompanion(id)?.name ?? id)
    .join('、')

  const relatedAdvice = getAllBlueprints()
    .filter((bp) => bp.companionIds.includes(companion.id))
    .map((bp) => ({
      blueprint: bp,
      advice: getAdviceForCompanion(bp, companion.id)!,
    }))

  return (
    <main className="page">
      <nav className="crumbs">
        <Link to="/">首页</Link> / <Link to="/companions">同伴</Link> /{' '}
        {companion.name}
      </nav>
      <header className="section-head">
        <h1>{companion.name}</h1>
        <p>{companion.summary}</p>
        <p className="meta">
          招募费用：{companion.cost} · 特长：{companion.strengths}
        </p>
      </header>

      <section className="panel">
        <h2>适合玩法</h2>
        {playstyles.length === 0 ? (
          <p>当前蓝图未收录此同伴。</p>
        ) : (
          <ul>
            {playstyles.map((id) => (
              <li key={id}>
                <Link to={`/playstyle/${id}`}>{PLAYSTYLE_LABELS[id]}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="panel">
        <h2>冲突关系</h2>
        <p>
          <strong>合得来：</strong>
          {likeNames || '无'}
        </p>
        <p>
          <strong>合不来：</strong>
          {dislikeNames || '无'}
        </p>
        <p className="muted">合不来的人长期同队会互相抱怨，新手建议避开。</p>
      </section>

      {relatedAdvice.map(({ blueprint, advice }) => (
        <section key={blueprint.id} className="panel">
          <h2>
            在「{PLAYSTYLE_LABELS[blueprint.id]}」玩法下的建议
          </h2>
          <h3>加点</h3>
          <BuildBlock build={advice.build} />
          <h3>推荐配装</h3>
          <GearBlock gear={advice.gear} />
        </section>
      ))}
    </main>
  )
}
