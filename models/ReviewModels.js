import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Customer from "./CustomerModels.js";
import Equipment from "./EquipmentModels.js";

const Review = db.define("Review", {
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
  rating: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  reviewDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Review;
