import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DATABASE_PATH || ":memory:",
  logging: false,
});

sequelize.sync().then(() => {
  console.log("Database & tables created!");
});
