import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Equipment = db.define("Equipment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rentalPrice: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stockAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Equipment;
