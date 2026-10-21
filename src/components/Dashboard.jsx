import Sidebar from "./Sidebar";
import Header from "./Header";
import StatCards from "./StatCards";
import Schedule from "./Schedule";
import LeadTable from "./LeadTable";
import SalesOverview from "./SalesOverview";

export default function Dashboard() {
  return (
    <div className="app-zoom flex min-w-[1100px] items-start gap-[18px] p-[18px]">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col gap-[16px]">
        <Header />
        <StatCards />
        <SalesOverview />
        <div className="grid grid-cols-[minmax(0,1fr)_300px] items-start gap-[16px]">
          <LeadTable />
          <Schedule />
        </div>
      </main>
    </div>
  );
}

