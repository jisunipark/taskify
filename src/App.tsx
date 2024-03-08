import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AccountPage from './pages/AccountPage';
import DashboardEditPage from './pages/DashboardEditPage';
import DashboardPage from './pages/DashboardPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="dashboard">
          <Route index element={<DashboardPage />} />
          <Route path="edit" element={<DashboardEditPage />} />
        </Route>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
