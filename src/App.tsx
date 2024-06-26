import '@/styles/global.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountPage from '@/pages/AccountPage';
import DashboardEditPage from '@/pages/DashboardEditPage';
import DashboardPage from '@/pages/DashboardPage';
import LandingPage from '@/pages/LandingPage';
import Layout from '@/pages/Layout';
import SignInPage from '@/pages/SignInPage';
import SignUpPage from '@/pages/SignUpPage';
import ModalProvider from '@/components/common/modal/ModalProvider';

export const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route element={<Layout />}>
              <Route path="account/:userId" element={<AccountPage />} />
              <Route path="dashboard/:userId">
                <Route index element={<DashboardPage />} />
                <Route path="edit" element={<DashboardEditPage />} />
              </Route>
            </Route>
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </ModalProvider>
    </QueryClientProvider>
  );
}
