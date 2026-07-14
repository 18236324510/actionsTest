import { blueprints } from '../data/blueprints'
import { companions } from '../data/companions'
import type {
  Companion,
  CompanionPlaystyleAdvice,
  PlaystyleBlueprint,
  PlaystyleId,
} from '../data/types'
import { PLAYSTYLE_ORDER } from '../data/types'

export function getAllCompanions(): Companion[] {
  return companions
}

export function getCompanion(id: string): Companion | undefined {
  return companions.find((c) => c.id === id)
}

export function getBlueprint(id: PlaystyleId): PlaystyleBlueprint | undefined {
  return blueprints.find((b) => b.id === id)
}

export function getAllBlueprints(): PlaystyleBlueprint[] {
  return PLAYSTYLE_ORDER.map((id) => getBlueprint(id)!).filter(Boolean)
}

export function getAdviceForCompanion(
  blueprint: PlaystyleBlueprint,
  companionId: string,
): CompanionPlaystyleAdvice | undefined {
  return blueprint.advice.find((a) => a.companionId === companionId)
}

export interface ConflictPair {
  a: Companion
  b: Companion
}

/** 解析某蓝图推荐名单内部的互相讨厌组合。 */
export function getBlueprintConflicts(
  blueprint: PlaystyleBlueprint,
): ConflictPair[] {
  const roster = new Set(blueprint.companionIds)
  const pairs: ConflictPair[] = []
  const seen = new Set<string>()

  for (const id of blueprint.companionIds) {
    const companion = getCompanion(id)
    if (!companion) continue
    for (const otherId of companion.dislikes) {
      if (!roster.has(otherId)) continue
      const key = [id, otherId].sort().join(':')
      if (seen.has(key)) continue
      seen.add(key)
      const other = getCompanion(otherId)
      if (!other) continue
      pairs.push({ a: companion, b: other })
    }
  }

  return pairs
}

export function getPlaystylesFeaturing(companionId: string): PlaystyleId[] {
  return blueprints
    .filter((b) => b.companionIds.includes(companionId))
    .map((b) => b.id)
}

export function resolveCompanionRefs(ids: string[]): Companion[] {
  return ids.map((id) => {
    const c = getCompanion(id)
    if (!c) throw new Error(`未知同伴 id: ${id}`)
    return c
  })
}
