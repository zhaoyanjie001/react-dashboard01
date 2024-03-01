import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import List from './pages/List'
import Dashboard from './pages/Dashboard'
import Login from './components/login/Login'
import MainLayout from './layout/MainLayout'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}>
                    {/* <Route path="/home" element={<MainLayout />}/> */}
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Blank />} />
                    <Route path="products" element={<Blank />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                    <Route path="list" element={<List />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
