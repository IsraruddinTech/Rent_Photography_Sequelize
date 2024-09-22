import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Equipment from "./EquipmentModels.js";

const Maintenance = db.define("Maintenance", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  equipmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Equipment,
      key: "id",
    },
  },
  maintenanceStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maintenanceType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  maintenanceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Maintenance;
