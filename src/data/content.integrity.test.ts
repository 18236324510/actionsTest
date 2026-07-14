import { describe, expect, it } from 'vitest'
import { blueprints } from './blueprints'
import { companions } from './companions'
import { getBlueprintConflicts } from '../lib/content'
import { PLAYSTYLE_ORDER } from './types'

describe('content integrity', () => {
  const companionIds = new Set(companions.map((c) => c.id))

  it('loads all four playstyle blueprints with 4–6 companions each', () => {
    expect(blueprints).toHaveLength(4)
    for (const id of PLAYSTYLE_ORDER) {
      const bp = blueprints.find((b) => b.id === id)
      expect(bp).toBeDefined()
      expect(bp!.companionIds.length).toBeGreaterThanOrEqual(4)
      expect(bp!.companionIds.length).toBeLessThanOrEqual(6)
    }
  })

  it('has exactly one blueprint per playstyle', () => {
    const ids = blueprints.map((b) => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('references only existing companions in blueprints and advice', () => {
    for (const bp of blueprints) {
      for (const id of bp.companionIds) {
        expect(companionIds.has(id)).toBe(true)
      }
      expect(bp.advice).toHaveLength(bp.companionIds.length)
      for (const advice of bp.advice) {
        expect(bp.companionIds).toContain(advice.companionId)
        expect(advice.build.attributes.length).toBeGreaterThan(0)
        expect(advice.build.skills.length).toBeGreaterThan(0)
        expect(advice.gear.length).toBeGreaterThan(0)
        for (const item of advice.gear) {
          expect(item.name.length).toBeGreaterThan(0)
          expect(item.reason.length).toBeGreaterThan(0)
        }
      }
    }
  })

  it('keeps likes/dislikes references valid and non-self', () => {
    for (const c of companions) {
      expect(c.source).toBe('native')
      for (const id of [...c.likes, ...c.dislikes]) {
        expect(companionIds.has(id)).toBe(true)
        expect(id).not.toBe(c.id)
      }
    }
  })

  it('flags zero internal conflict pairs as a data smell for trade blueprint demo', () => {
    const trade = blueprints.find((b) => b.id === 'trade')!
    const conflicts = getBlueprintConflicts(trade)
    // 稳妥跑商队应避免互怼；若未来改名单导致冲突，测试仍允许存在但需可解析
    expect(Array.isArray(conflicts)).toBe(true)
    expect(conflicts.length).toBe(0)
  })

  it('ensures combat / leadership / hybrid also have no internal dislikes', () => {
    for (const id of PLAYSTYLE_ORDER) {
      const bp = blueprints.find((b) => b.id === id)!
      expect(getBlueprintConflicts(bp)).toEqual([])
    }
  })
})
