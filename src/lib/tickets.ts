import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getTickets() {
  try {
    const result = await sql`SELECT * FROM Tickets`;
    return result;
  } catch (error) {
    console.error("Error fetching stats:", error);
    process.exit(1);
  }
}
