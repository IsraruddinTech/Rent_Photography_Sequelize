import db from "../utils/connection.js"; // Koneksi ke database
import Customer from "../models/CustomerModels.js";
import Category from "../models/CategoryModels.js";
import Equipment from "../models/EquipmentModels.js";
import Maintenance from "../models/MaintenanceModels.js";
import Order from "../models/OrderModels.js";
import Payment from "../models/PaymentModels.js";
import Promotion from "../models/PromotionModels.js";
import Rental from "../models/RentalModels.js";
import Review from "../models/ReviewModels.js";
import Supplier from "../models/SupplierModels.js";

// Definisikan relasi antar model

// Relasi antara Customer dan Rental
Customer.hasMany(Rental, { foreignKey: "customerId" });
Rental.belongsTo(Customer, { foreignKey: "customerId" });

// Relasi antara Equipment dan Rental
Equipment.hasMany(Rental, { foreignKey: "equipmentId" });
Rental.belongsTo(Equipment, { foreignKey: "equipmentId" });

// Relasi antara Rental dan Payment
Rental.hasMany(Payment, { foreignKey: "rentalId" });
Payment.belongsTo(Rental, { foreignKey: "rentalId" });

// Relasi antara Customer dan Review
Customer.hasMany(Review, { foreignKey: "customerId" });
Review.belongsTo(Customer, { foreignKey: "customerId" });

// Relasi antara Equipment dan Review
Equipment.hasMany(Review, { foreignKey: "equipmentId" });
Review.belongsTo(Equipment, { foreignKey: "equipmentId" });

// Relasi antara Equipment dan Maintenance
Equipment.hasMany(Maintenance, { foreignKey: "equipmentId" });
Maintenance.belongsTo(Equipment, { foreignKey: "equipmentId" });

// Relasi antara Equipment dan Order
Equipment.hasMany(Order, { foreignKey: "equipmentId" });
Order.belongsTo(Equipment, { foreignKey: "equipmentId" });

// Relasi antara Category dan Equipment
Category.hasMany(Equipment, { foreignKey: "categoryId" });
Equipment.belongsTo(Category, { foreignKey: "categoryId" });

// Relasi antara Supplier dan Order
Supplier.hasMany(Order, { foreignKey: "supplierId" });
Order.belongsTo(Supplier, { foreignKey: "supplierId" });

// Relasi antara Equipment dan Promotion
Equipment.hasMany(Promotion, { foreignKey: "equipmentId" });
Promotion.belongsTo(Equipment, { foreignKey: "equipmentId" });

// Sinkronisasi semua model dengan relasi
const syncDatabase = async () => {
  try {
    //     // Sinkronisasi setiap model satu per satu
    await Customer.sync();
    await Category.sync();
    await Equipment.sync();
    await Maintenance.sync();
    // await Order.sync();
    // await Payment.sync();
    await Promotion.sync();
    await Rental.sync();
    await Review.sync();
    await Supplier.sync();

    await db.sync({ force: true });

    await db.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

// // Memanggil sinkronisasi database
syncDatabase();
