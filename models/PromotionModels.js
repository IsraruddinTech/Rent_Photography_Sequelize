import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Equipment from "./EquipmentModels.js";

const Promotion = db.define("Promotion", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  promotionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  promotionDescription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  discount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Equipment,
      key: "id",
    },
  },
});

export default Promotion;
