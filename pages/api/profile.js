import UserProfile from "@/models/UserProfile";
import dbConnect from "../../config/dbConnect";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();
    const {
      firstname,
      lastname,
      email,
      phone,
      dob,
      gender,
      bloodgrp,
      marital,
      occupation,
      profileImg,
      address,
      housename,
      zipcode,
      countrystate,
      interests,
    } = req.body;

    const userProfileResult = await UserProfile.create({
      firstname,
      lastname,
      email,
      phone,
      dob,
      gender,
      bloodgrp,
      marital,
      occupation,
      profileImg,
      address,
      housename,
      zipcode,
      countrystate,
      interests,
    });
    res.status(201).json({ userProfileResult });
  }
}
