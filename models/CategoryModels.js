import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Category = db.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoryDescription: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Category;
