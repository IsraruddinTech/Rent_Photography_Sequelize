import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Rental from "./RentalModels.js";

const Payment = db.define("Payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  rentalId: {
    type: DataTypes.INTEGER,
    references: {
      model: Rental,
      key: "id",
    },
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Payment;
