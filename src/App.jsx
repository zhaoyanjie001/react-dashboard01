import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blank from "./pages/Blank";

import Dashboard from "./pages/Dashboard";
import Login from "./components/login/Login";
import MainLayout from "./layout/MainLayout";
import Charper0101 from "./components/charper01/Charper0101";
import Charper0201 from "./components/charper0201/Charper0201";
import Charper0202 from "./components/charper0201/Charper0202";
import Charper0203 from "./components/charper0201/Charper0203";
import Charper0204 from "./components/charper0201/Charper0204";
import Charper0205 from "./components/charper0201/Charper0205";
import Charper0206 from "./components/charper0201/Charper0206";
import Charper0207 from "./components/charper0201/Charper0207";
import Charper0208 from "./components/charper0201/Charper0208";
import Charper0209 from "./components/charper0201/Charper0209";
import Charper0210 from "./components/charper0201/Charper0210";
import Charper0211 from "./components/charper0201/Charper0211";
import Charper0212 from "./components/charper0201/Charper0212";
import Stats from "./components/stats/Stats";
import BookList from "./components/list/BookList";
import UserSettings from "./components/settings/UserSettings";

import Logout from "./components/logout/Logout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Blank />} />
          <Route path="customers" element={<Blank />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="stats" element={<Stats />} />
          <Route path="list" element={<BookList />} />
          <Route path="logout" element={<Logout />} />
          {/* <Route path="/" element={<List />} />
          <Route path="/charper01" element={<Charper0101 />} />
          <Route path="/charper0201" element={<Charper0201 />} />
          <Route path="/charper0202" element={<Charper0202 />} />
          <Route path="/charper0203" element={<Charper0203 />} />
          <Route path="/charper0204" element={<Charper0204 />} />
          <Route path="/charper0205" element={<Charper0205 />} />
          <Route path="/charper0206" element={<Charper0206 />} />
          <Route path="/charper0207" element={<Charper0207 />} />
          <Route path="/charper0208" element={<Charper0208 />} />
          <Route path="/charper0209" element={<Charper0209 />} />
          <Route path="/charper0210" element={<Charper0210 />} />
          <Route path="/charper0211" element={<Charper0211 />} />
          <Route path="/charper0212" element={<Charper0212 />} /> */}
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
