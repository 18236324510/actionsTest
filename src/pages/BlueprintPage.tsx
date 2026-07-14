import { Link, useParams } from 'react-router-dom'
import { BuildBlock } from '../components/BuildBlock'
import { CompanionCard } from '../components/CompanionCard'
import { ConflictNotes } from '../components/ConflictNotes'
import { GearBlock } from '../components/GearBlock'
import type { PlaystyleId } from '../data/types'
import { PLAYSTYLE_LABELS } from '../data/types'
import {
  getAdviceForCompanion,
  getBlueprint,
  getBlueprintConflicts,
  getCompanion,
} from '../lib/content'

const VALID: PlaystyleId[] = ['combat', 'leadership', 'trade', 'hybrid']

export function BlueprintPage() {
  const { playstyleId } = useParams()
  const id = playstyleId as PlaystyleId | undefined

  if (!id || !VALID.includes(id)) {
    return (
      <main className="page">
        <h1>未找到该玩法</h1>
        <Link to="/">返回首页</Link>
      </main>
    )
  }

  const blueprint = getBlueprint(id)!
  const conflicts = getBlueprintConflicts(blueprint)

  return (
    <main className="page">
      <nav className="crumbs">
        <Link to="/">首页</Link> / {PLAYSTYLE_LABELS[id]}
      </nav>
      <header className="section-head">
        <h1>{blueprint.title}玩法蓝图</h1>
        <p>{blueprint.tagline}</p>
        <p className="muted">本页只提供一套稳妥推荐，不做多方案对比。</p>
      </header>

      <section className="panel" aria-labelledby="recruit-heading">
        <h2 id="recruit-heading">推荐招募</h2>
        <div className="card-grid">
          {blueprint.companionIds.map((cid) => {
            const companion = getCompanion(cid)!
            return <CompanionCard key={cid} companion={companion} />
          })}
        </div>
      </section>

      <ConflictNotes conflicts={conflicts} />

      <section className="panel" aria-labelledby="build-gear-heading">
        <h2 id="build-gear-heading">加点与装备</h2>
        {blueprint.companionIds.map((cid) => {
          const companion = getCompanion(cid)!
          const advice = getAdviceForCompanion(blueprint, cid)!
          return (
            <article key={cid} className="advice-block">
              <h3>
                <Link to={`/companion/${cid}`}>{companion.name}</Link>
              </h3>
              <h4>加点</h4>
              <BuildBlock build={advice.build} />
              <h4>推荐配装</h4>
              <GearBlock gear={advice.gear} />
            </article>
          )
        })}
      </section>
    </main>
  )
}
