import { getDashboardStats } from "../lib/dashboard";

export default async function DashboardStats() {
  const stats = await getDashboardStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-600/20 blur-3xl transition-all group-hover:bg-purple-600/30"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Total Customers
            </h3>
            <p className="mt-2 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-purple-300">
              {stats.customerCount}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-pink-500/50 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.3)]">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-600/20 blur-3xl transition-all group-hover:bg-pink-600/30"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Total Tickets
            </h3>
            <p className="mt-2 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-pink-300">
              {stats.ticketCount}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
              <path d="m9 16 2 2 4-4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-600/20 blur-3xl transition-all group-hover:bg-indigo-600/30"></div>

        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-400 text-sm font-medium tracking-wide uppercase">
              Avg Tickets / Customer
            </h3>
            <p className="mt-2 text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-200 via-pink-200 to-white">
              {stats.averageTicketsPerCustomer}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3v18h18" />
              <path d="m19 9-5 5-4-4-3 3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
