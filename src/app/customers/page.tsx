import Title from "@/src/components/title";
import { getCustomers } from "@/src/lib/customers";

async function CustomersPage() {
  const customersList = await getCustomers();

  return (
    <main className="container mx-auto px-6 py-10">
      {/* Título y Subtítulo */}
      <div className="mb-8">
        <Title>Customers Management</Title>
        <p className="text-slate-400 mt-2">
          Gestiona la base de datos de clientes y su estado actual.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            {/* HEADERS */}
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-purple-200">
                  ID
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Full Name
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Phone
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Full Address
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  City
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Zip
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Active
                </th>
                <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Created At
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-white/5">
              {customersList.map((customer: any) => (
                <tr
                  key={customer.id}
                  className="group transition-colors duration-200 hover:bg-white/2"
                >
                  {/* ID */}
                  <td className="py-4 px-6 text-sm font-medium text-white">
                    #{customer.id}
                  </td>

                  {/* FULL NAME */}
                  <td className="py-4 px-6 text-sm font-medium text-slate-200">
                    {customer.first_name} {customer.last_name}
                  </td>

                  {/* EMAIL */}
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {customer.email}
                  </td>

                  {/* PHONE */}
                  <td className="py-4 px-6 text-sm text-slate-400 whitespace-nowrap">
                    {customer.phone}
                  </td>

                  {/* FULL ADDRESS */}
                  <td
                    className="py-4 px-6 text-sm text-slate-500 max-w-xs truncate"
                    title={`${customer.address_1} ${customer.address_2 || ""}`}
                  >
                    {customer.address_1}
                    {customer.address_2 ? `, ${customer.address_2}` : ""}
                  </td>

                  {/* CITY */}
                  <td className="py-4 px-6 text-sm text-slate-400">
                    {customer.city}
                    {customer.state ? `, ${customer.state}` : ""}
                  </td>

                  {/* ZIP */}
                  <td className="py-4 px-6 text-sm text-slate-500">
                    {customer.zip}
                  </td>

                  {/* ACTIVE STATUS BADGE */}
                  <td className="py-4 px-6 text-sm">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                        customer.active
                          ? "bg-green-500/10 text-green-400 border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.2)]"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >
                      {/* Punto indicador */}
                      <span
                        className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                          customer.active ? "bg-green-400" : "bg-red-400"
                        }`}
                      ></span>
                      {customer.active ? "Activo" : "Inactivo"}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="py-4 px-6 text-sm text-slate-500 whitespace-nowrap">
                    {new Date(customer.created_at).toLocaleDateString("es-MX", {
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

export default CustomersPage;
