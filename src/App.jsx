import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import List from './pages/List'
import Dashboard from './pages/Dashboard'
import Login from './components/login/Login'
import MainLayout from './layout/MainLayout'
import Charper0101 from './components/charper01/Charper0101'
import Charper0201 from './components/charper0201/Charper0201'
import Charper0202 from './components/charper0201/Charper0202'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<List />}/>
                <Route path="/charper01" element={<Charper0101 />}/>
                <Route path="/charper0201" element={<Charper0201 />}/>
                <Route path="/charper0202" element={<Charper0202 />}/>
                {/* <Route path="/" element={<Login />}>
                    <Route index element={<Dashboard />} />
                    <Route path="orders" element={<Blank />} />
                    <Route path="products" element={<Blank />} />
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="stats" element={<Blank />} />
                    <Route path="list" element={<List />} />
                </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App
