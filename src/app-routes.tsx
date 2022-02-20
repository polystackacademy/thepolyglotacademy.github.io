import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import DashboardPage from './pages/dashboard';
import Website from './pages/website';

function AppRoutes(): any {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Website />}></Route>
                <Route path="/dashboard" element={<DashboardPage />}></Route>
                <Route path="/login" element={<LoginPage previousRoute='/' />} ></Route>
                <Route path="/register" element={<RegisterPage />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;