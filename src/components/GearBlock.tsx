import type { GearItem } from '../data/types'

interface Props {
  gear: GearItem[]
}

export function GearBlock({ gear }: Props) {
  return (
    <ul className="gear-list">
      {gear.map((item) => (
        <li key={item.name}>
          <strong>{item.name}</strong>
          {item.priceHint ? (
            <span className="badge">价位 {item.priceHint}</span>
          ) : null}
          <p className="muted">{item.reason}</p>
        </li>
      ))}
    </ul>
  )
}
