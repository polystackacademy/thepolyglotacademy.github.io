import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/login.page';
import RegisterPage from './pages/auth/register.page';
import Website from './pages/website';

function AppRoutes(): any {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Website />}></Route>
                <Route path="/login" element={<LoginPage previousRoute='/' />} ></Route>
                <Route path="/register" element={<RegisterPage />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;