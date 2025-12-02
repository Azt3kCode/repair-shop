import Title from "@/src/components/title";
import { getTickets } from "@/src/lib/tickets";

async function TicketsPage() {
  const ticketsList = await getTickets();

  return (
    <main className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <Title>Tickets Management</Title>
        <p className="text-slate-400 mt-2">
          Gestiona y revisa el estado de las reparaciones recientes.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* Header de la tabla */}
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-purple-200">
                  ID
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Customer ID
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Title
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Description
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Status
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Tech
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Created At
                </th>
              </tr>
            </thead>

            {/* Tabla */}
            <tbody className="divide-y divide-white/5">
              {ticketsList.map((ticket: any) => (
                <tr
                  key={ticket.id}
                  className="group transition-colors duration-200 hover:bg-white/2"
                >
                  {/* ID */}
                  <td className="py-4 px-6 text-sm font-medium text-white">
                    #{ticket.id}
                  </td>

                  <td className="py-4 px-6 text-sm text-slate-400">
                    {ticket.customer_id}
                  </td>

                  {/* Título */}
                  <td className="py-4 px-6 text-sm font-medium text-slate-200">
                    {ticket.title}
                  </td>

                  {/* Descripción */}
                  <td
                    className="py-4 px-6 text-sm text-slate-500 max-w-xs truncate"
                    title={ticket.description}
                  >
                    {ticket.description}
                  </td>

                  {/* STATUS */}
                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                        ticket.status
                          ? "bg-green-500/10 text-green-400 border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                          : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                      }`}
                    >
                      {/* Indicador de punto brillante */}
                      <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                          ticket.status ? "bg-green-400" : "bg-yellow-400"
                        }`}
                      ></span>
                      {ticket.status ? "Completado" : "Pendiente"}
                    </span>
                  </td>

                  <td className="py-4 px-6 text-sm text-slate-400">
                    {ticket.tech}
                  </td>

                  {/* Fecha formateada */}
                  <td className="py-4 px-6 text-sm text-slate-500">
                    {new Date(ticket.created_at).toLocaleDateString("es-MX", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default TicketsPage;
