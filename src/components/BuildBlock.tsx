import type { BuildAdvice } from '../data/types'

interface Props {
  build: BuildAdvice
}

export function BuildBlock({ build }: Props) {
  return (
    <div className="build-block">
      <p>
        <strong>属性：</strong>
        {build.attributes}
      </p>
      <p>
        <strong>技能：</strong>
        {build.skills}
      </p>
      {build.notes ? <p className="muted">{build.notes}</p> : null}
    </div>
  )
}
