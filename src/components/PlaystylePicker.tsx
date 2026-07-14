import { Link } from 'react-router-dom'
import type { PlaystyleId } from '../data/types'
import { PLAYSTYLE_LABELS, PLAYSTYLE_ORDER } from '../data/types'
import { getAllBlueprints } from '../lib/content'

export function PlaystylePicker() {
  const blueprints = getAllBlueprints()

  return (
    <div className="playstyle-grid">
      {PLAYSTYLE_ORDER.map((id: PlaystyleId) => {
        const bp = blueprints.find((b) => b.id === id)!
        return (
          <Link key={id} to={`/playstyle/${id}`} className="playstyle-card">
            <h2>{PLAYSTYLE_LABELS[id]}</h2>
            <p>{bp.tagline}</p>
          </Link>
        )
      })}
    </div>
  )
}
