import Gnb from '@/components/common/gnb/Gnb';
import Lnb from '@/components/common/lnb/Lnb';
import BoardSection from '@/components/dashboard/board-section/BoardSection';

export default function DashboardPage() {
  return (
    <div className="board page">
      <Lnb />
      <Gnb />
      <BoardSection />
    </div>
  );
}
