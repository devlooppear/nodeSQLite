import { DataTypes } from "sequelize";
import { sequelize } from "../database";

export const Coffee = sequelize.define("coffee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    intensity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });