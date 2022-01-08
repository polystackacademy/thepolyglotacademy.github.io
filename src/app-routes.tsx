import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainApp from './pages/main-app';

function AppRoutes(): any {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainApp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;