import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getDashboardStats() {
  try {
    const result = await sql`
      SELECT 
        (SELECT COUNT(*) FROM Customers) as customer_count,
        (SELECT COUNT(*) FROM Tickets) as ticket_count
    `;

    const customerCount = Number(result[0].customer_count);
    const ticketCount = Number(result[0].ticket_count);
    const averageRaw = customerCount > 0 ? ticketCount / customerCount : 0;

    return {
      customerCount,
      ticketCount,
      averageTicketsPerCustomer: averageRaw.toFixed(2),
    };
  } catch (error) {
    console.error("Error fetching stats:", error);
    return { customerCount: 0, ticketCount: 0, averageTicketsPerCustomer: "0" };
  }
}
