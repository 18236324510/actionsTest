export type ContentSource = 'native'

export type PlaystyleId = 'combat' | 'leadership' | 'trade' | 'hybrid'

export interface GearItem {
  name: string
  reason: string
  priceHint?: string
}

export interface BuildAdvice {
  attributes: string
  skills: string
  notes?: string
}

export interface Companion {
  id: string
  name: string
  summary: string
  likes: string[]
  dislikes: string[]
  source: ContentSource
  cost: string
  strengths: string
}

export interface CompanionPlaystyleAdvice {
  companionId: string
  build: BuildAdvice
  gear: GearItem[]
}

export interface PlaystyleBlueprint {
  id: PlaystyleId
  title: string
  tagline: string
  companionIds: string[]
  advice: CompanionPlaystyleAdvice[]
  source: ContentSource
}

export const PLAYSTYLE_ORDER: PlaystyleId[] = [
  'combat',
  'leadership',
  'trade',
  'hybrid',
]

export const PLAYSTYLE_LABELS: Record<PlaystyleId, string> = {
  combat: '打仗',
  leadership: '带队',
  trade: '跑商',
  hybrid: '混搭',
}
