import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  dob: String,
  gender: String,
  bloodgrp: String,
  marital: String,
  occupation: String,
  profileImg: String,
  address: String,
  housename: String,
  zipcode: String,
  countrystate: String,
  interests: String,
});

const UserProfile =
  mongoose.models.Userprofile ||
  mongoose.model("Userprofile", userProfileSchema);
export default UserProfile;
