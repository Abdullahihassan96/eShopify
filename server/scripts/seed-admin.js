require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const seedAdmin = async () => {
  const adminUserName = process.env.ADMIN_USERNAME || "admin";
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error(
      "Missing ADMIN_EMAIL or ADMIN_PASSWORD in .env. Please set both before seeding.",
    );
  }

  await mongoose.connect(process.env.DATABASE_URL);

  const existingAdmin = await User.findOne({ email: adminEmail });
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  if (existingAdmin) {
    existingAdmin.userName = adminUserName;
    existingAdmin.password = hashedPassword;
    existingAdmin.role = "admin";
    await existingAdmin.save();
    console.log("Admin user updated successfully.");
  } else {
    const adminUser = new User({
      userName: adminUserName,
      email: adminEmail,
      password: hashedPassword,
      role: "admin",
    });
    await adminUser.save();
    console.log("Admin user created successfully.");
  }

  await mongoose.disconnect();
};

seedAdmin()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.message || error);
    process.exit(1);
  });
