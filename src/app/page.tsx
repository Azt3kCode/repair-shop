import DashboardStats from "../components/dashboard";
import Title from "../components/title";

export default function Home() {
  return (
    <main className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <Title>Dashboard</Title>
        <p className="text-slate-400 mt-2">
          Visión general del rendimiento del taller. Revisa métricas clave y
          actividad reciente de un vistazo.
        </p>
      </div>

      <DashboardStats />
    </main>
  );
}
