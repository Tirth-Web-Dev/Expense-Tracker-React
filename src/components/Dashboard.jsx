import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Summary from "./Summary";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";
const Dashboard = () => {
  return (
  <div className="relative min-h-screen bg-linear-to-b from-zinc-950 via-zinc-950 to-zinc-900
 text-zinc-100 overflow-hidden">

  {/* Background Glow Effects */}
  <div className="absolute -top-40 -left-40 w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-600/10 blur-[120px] rounded-full" />

  <div className="relative max-w-7xl mx-auto px-2 lg:px-16 py-12 space-y-14">

    {/* HEADER */}
    <div className="space-y-2 ml-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        Expense Dashboard
      </h1>
      <p className="text-zinc-400 text-sm">
        Track, manage and analyze your spending
      </p>
    </div>

    {/* SUMMARY */}
    <section>
      <Summary />
    </section>

    {/* CHART + FORM */}
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-3 lg:p-8 shadow-xl shadow-black/30">
        <ExpenseChart />
      </div>

      <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-3 lg:p-8 shadow-xl shadow-black/30">
        <ExpenseForm />
      </div>

    </section>

    {/* EXPENSE LIST */}
    <section className="space-y-6">

      <div className="flex items-center justify-end">
        <ExpenseFilter />
      </div>

      <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-3 lg:p-8 shadow-xl shadow-black/30">
        <ExpenseList />
      </div>

    </section>

  </div>
</div>


  );
};

export default Dashboard;
