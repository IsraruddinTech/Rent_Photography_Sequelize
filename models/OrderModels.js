import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Equipment from "./EquipmentModels.js";
import Supplier from "./SupplierModels.js";

const Order = db.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Equipment",
    },
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  supplierId: {
    type: DataTypes.INTEGER,
    references: {
      model: "Suppliers",
      key: "id",
    },
    allowNull: false,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  orderStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Order;
