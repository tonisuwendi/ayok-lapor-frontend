import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import RegisterPage from '../pages/Auth/Register';
import LoginPage from '../pages/Auth/Login';

const RoutesConfig = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Layout>
    )
};

export default RoutesConfig;
