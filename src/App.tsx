import { NavLink, Route, Routes } from 'react-router-dom'
import { BlueprintPage } from './pages/BlueprintPage'
import { CompanionListPage } from './pages/CompanionListPage'
import { CompanionPage } from './pages/CompanionPage'
import { HomePage } from './pages/HomePage'
import './styles/global.css'

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          战团同伴指南
        </NavLink>
        <nav>
          <NavLink to="/">玩法蓝图</NavLink>
          <NavLink to="/companions">同伴图鉴</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playstyle/:playstyleId" element={<BlueprintPage />} />
        <Route path="/companions" element={<CompanionListPage />} />
        <Route path="/companion/:companionId" element={<CompanionPage />} />
      </Routes>
    </div>
  )
}
