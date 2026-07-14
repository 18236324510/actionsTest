import type { ConflictPair } from '../lib/content'

interface Props {
  conflicts: ConflictPair[]
}

export function ConflictNotes({ conflicts }: Props) {
  if (conflicts.length === 0) {
    return (
      <section className="panel" aria-labelledby="conflict-heading">
        <h2 id="conflict-heading">冲突注意</h2>
        <p>本玩法推荐名单内部没有互相讨厌的组合，可以放心一起招。</p>
      </section>
    )
  }

  return (
    <section className="panel" aria-labelledby="conflict-heading">
      <h2 id="conflict-heading">冲突注意</h2>
      <p>以下同伴互相不合，尽量不要放在同一队：</p>
      <ul>
        {conflicts.map(({ a, b }) => (
          <li key={`${a.id}-${b.id}`}>
            <strong>
              {a.name} 与 {b.name}
            </strong>
            ：会互相抱怨，长期同队容易闹走。
          </li>
        ))}
      </ul>
    </section>
  )
}
