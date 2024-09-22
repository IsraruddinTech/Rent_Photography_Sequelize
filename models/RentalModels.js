import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Customer from "./CustomerModels.js";
import Equipment from "./EquipmentModels.js";

const Rental = db.define("Rental", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: "id",
    },
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Equipment,
      key: "id",
    },
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  rentalStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Rental;
