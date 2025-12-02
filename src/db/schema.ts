import { pgTable, serial, varchar, boolean, timestamp, integer, text } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name", { length: 100 }).notNull(),
    lastName: varchar("last_name", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    phone: varchar("phone", { length: 20 }).notNull(),
    address1: varchar("address_1", { length: 255 }).notNull(),
    address2: varchar("address_2", { length: 255 }),
    city: varchar("city", { length: 100 }).notNull(),
    state: varchar("state", { length: 2 }).notNull(),
    zip: varchar("zip", { length: 10 }).notNull(),
    active: boolean("active").default(true).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
                .$onUpdate(() => new Date()),
});

export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title", { length: 50 }).notNull(),
    description: text("description").notNull(),
    completed: boolean("completed").default(false).notNull(),
    tech: varchar("tech", { length: 100 }).default("Unassigned").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
                .$onUpdate(() => new Date()),
});

// Define relations
// Customers have many Tickets
export const customersRelations = relations(customers,
    ({ many }) => ({
        tickets: many(tickets),
    })
);

// Tickets belong to one Customer
export const ticketsRelations = relations(tickets,
    ({ one }) => ({
        customer: one(customers, {
            fields: [tickets.customerId],
            references: [customers.id],
        }),
    })
);
