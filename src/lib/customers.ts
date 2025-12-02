import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getCustomers() {
  try {
    const result = await sql`SELECT * FROM Customers`;
    return result;
  } catch (error) {
    console.error("Error fetching stats:", error);
    process.exit(1);
  }
}
