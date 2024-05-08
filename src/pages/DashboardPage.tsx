import Gnb from '@/components/common/gnb/Gnb';
import Lnb from '@/components/common/lnb/Lnb';
import Dashboard from '@/components/dashboard/Dashboard';

export default function DashboardPage() {
  return (
    <div className="board page">
      <Lnb />
      <Gnb />
      <Dashboard />
    </div>
  );
}
