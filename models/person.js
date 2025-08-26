const mongoose = require("mongoose");

// Define schema
const personSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },
    age: {
      type: Number,
      min: 0, // prevents negative ages
    },
    work: {
      type: String,
      enum: ["chef", "waiter", "manager"],
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/, // ensures 10-digit mobile number
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // stores emails in lowercase
    },
    address: {
      type: String,
      trim: true,
    },
    salary: {
      type: Number,
      required: true,
      min: 0, // prevents negative salaries
    },
  },
  { timestamps: true }
); // adds createdAt & updatedAt automatically

// Create model
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
