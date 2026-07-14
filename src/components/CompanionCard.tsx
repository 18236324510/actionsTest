import { Link } from 'react-router-dom'
import type { Companion } from '../data/types'

interface Props {
  companion: Companion
  subtitle?: string
}

export function CompanionCard({ companion, subtitle }: Props) {
  return (
    <Link to={`/companion/${companion.id}`} className="companion-card">
      <h3>{companion.name}</h3>
      <p className="muted">{subtitle ?? companion.summary}</p>
      <p className="meta">招募：{companion.cost}</p>
    </Link>
  )
}
