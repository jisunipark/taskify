import '@/styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountPage from '@/pages/AccountPage';
import DashboardEditPage from '@/pages/DashboardEditPage';
import DashboardPage from '@/pages/DashboardPage';
import LandingPage from '@/pages/LandingPage';
import Layout from '@/pages/Layout';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="account" element={<AccountPage />} />
          <Route path="dashboard">
            <Route index element={<DashboardPage />} />
            <Route path="edit" element={<DashboardEditPage />} />
          </Route>
        </Route>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
