import { Outlet } from 'react-router-dom';
import Gnb from '@/components/common/gnb/Gnb';
import Lnb from '@/components/common/lnb/Lnb';

export default function Layout() {
  return (
    <div className="board page">
      <Lnb />
      <Gnb />
      <Outlet />
    </div>
  );
}
