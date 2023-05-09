import { Routes, Route } from 'react-router-dom'
import { Home }  from '../pages'

export function AppRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}