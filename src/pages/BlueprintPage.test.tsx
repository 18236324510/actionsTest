import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('BlueprintPage', () => {
  it('shows trade blueprint with recruit, conflict, build and gear, without multi-plan switch', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('link', { name: /跑商/ }))

    expect(
      screen.getByRole('heading', { name: '跑商玩法蓝图' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '推荐招募' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '冲突注意' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '加点与装备' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/马尔尼德/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/耶雷姆斯/).length).toBeGreaterThan(0)
    expect(
      screen.getByText(/本玩法推荐名单内部没有互相讨厌的组合/),
    ).toBeInTheDocument()
    expect(screen.queryByText(/切换方案|多套推荐|另一套/)).toBeNull()
    expect(
      screen.getByText(/本页只提供一套稳妥推荐，不做多方案对比/),
    ).toBeInTheDocument()
  })

  it('shows a different title for combat playstyle', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    await user.click(screen.getByRole('link', { name: /打仗/ }))
    expect(
      screen.getByRole('heading', { name: '打仗玩法蓝图' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/阿莱恩/).length).toBeGreaterThan(0)
  })
})
