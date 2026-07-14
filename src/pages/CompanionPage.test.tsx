import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('CompanionPage', () => {
  it('opens companion detail from trade blueprint with consistent advice', async () => {
    const user = userEvent.setup()
    render(
      <MemoryRouter initialEntries={['/playstyle/trade']}>
        <App />
      </MemoryRouter>,
    )

    const links = screen.getAllByRole('link', { name: '马尔尼德' })
    await user.click(links[0])

    expect(
      screen.getByRole('heading', { name: '马尔尼德', level: 1 }),
    ).toBeInTheDocument()
    expect(screen.getByText(/合不来：/)).toBeInTheDocument()
    expect(screen.getByText(/阿莱恩、巴赫什图尔/)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /在「跑商」玩法下的建议/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/贸易拉满/)).toBeInTheDocument()
    expect(screen.getByText(/轻甲 \+ 马匹/)).toBeInTheDocument()
  })

  it('shows not-found for unknown companion id', () => {
    render(
      <MemoryRouter initialEntries={['/companion/not-a-real-hero']}>
        <App />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { name: '未找到该同伴' }),
    ).toBeInTheDocument()
  })
})
