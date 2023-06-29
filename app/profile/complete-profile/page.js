"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

const CompleteProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodgrp, setBloodgrp] = useState("");
  const [marital, setMarital] = useState("");
  const [occupation, setOccupation] = useState("");
  const [profileImg, setProfileImg] = useState([]);
  const [address, setAddress] = useState("");
  const [housename, setHousename] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [countrystate, setCountrystate] = useState("");
  const [interests, setInterests] = useState("");

  if (status == "authenticated") {
    email = session.user.email;
  }

  const handleImage = (e) => {
    setProfileImg(e.target.files[0]);
  };
  // const inputData = {
  //   firstname,
  //   lastname,
  //   email,
  //   phone,
  //   dob,
  //   gender,
  //   bloodgrp,
  //   marital,
  //   occupation,
  //   profileImg,
  //   address,
  //   housename,
  //   zipcode,
  //   countrystate,
  //   interests,
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", profileImg);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("bloodgrp", bloodgrp);
    formData.append("marital", marital);
    formData.append("occupation", occupation);
    formData.append("address", address);
    formData.append("housename", housename);
    formData.append("zipcode", zipcode);
    formData.append("state", countrystate);
    formData.append("interests", interests);

    // let url = "/api/profile";
    const url='http://localhost:5000/pro'

    try {
      const { data } = await axios.post('http://localhost:5000/pro', formData);

      console.log(data);
      if (data) {
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      console.log("This error is in front end");
      
    }
  };

  return (
    <div>
      <div className="mt-24 mb-14 grid place-items-center">
        <div className="w-full md:w-11/12 lg:w-8/12 sm:mx-auto rounded mx-8">
          <div className="p-10">
            <h2 className="text-2xl font-bold text-gray-700 mb-8">
              Your Profile
            </h2>
            <div className="leading-loose">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <p className="text-gray-500 font-medium text-lg">
                  Personal Details
                </p>

                {/* First name */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="firstname"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="firstname"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
                {/* Last name */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="last"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Last Name
                  </label>
                  <input
                    id="last"
                    type="text"
                    name="lastname"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                {/* Email */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="email"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </div>
                {/* Mobile number */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="phone"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* DOB */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="date"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Date of Birth
                  </label>
                  <input
                    id="date"
                    type="date"
                    name="dob"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>
                {/* Gender dropdown*/}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="gender"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-base"
                    // value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    defaultValue
                  >
                    <option value="null">Select gender</option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Male"
                    >
                      Male
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Female"
                    >
                      Female
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Other"
                    >
                      Other
                    </option>
                  </select>
                </div>
                {/* Blood group dropdown*/}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="bloodgrp"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Blood Group
                  </label>
                  <select
                    id="bloodgrp"
                    name="bloodgrp"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-base"
                    // value={bloodgrp}
                    onChange={(e) => setBloodgrp(e.target.value)}
                    defaultValue
                  >
                    <option value="null">Select blood group</option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="A+"
                    >
                      A+
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="A-"
                    >
                      A-
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="B+"
                    >
                      B+
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="B-"
                    >
                      B-
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="O+"
                    >
                      O+
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="O-"
                    >
                      O-
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="AB+"
                    >
                      AB+
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="AB-"
                    >
                      AB-
                    </option>
                  </select>
                </div>
                {/* Marital status  dropdown*/}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="marital"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Marital Status
                  </label>
                  <select
                    id="marital"
                    name="marital"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-base"
                    // value={marital}
                    onChange={(e) => setMarital(e.target.value)}
                    defaultValue
                  >
                    <option value="null">Select marital status</option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Married"
                    >
                      Married
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Single"
                    >
                      Single
                    </option>
                  </select>
                </div>
                {/* Occupation */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="occupation"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Occupation
                  </label>
                  <input
                    id="occupation"
                    type="text"
                    name="occupation"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                  />
                </div>
                {/* Profile Image */}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="image"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Profile Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="file"
                    accept="image/*"
                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 
                    bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 
                    ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid 
                    file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition 
                    file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200
                     focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-gary-500
                      dark:text-neutral-200 dark:file:bg-gray-300 dark:file:text-gray-600 dark:focus:border-primary"
                    onChange={handleImage}
                  />
                </div>

                {/* Address Section*/}

                <p className="text-gray-500 font-medium text-lg mt-8">
                  Address & Details
                </p>
                {/* Address */}
                <div className="relative h-10 mb-5 mt-2 mx-1">
                  <label
                    htmlFor="address"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                {/* Housename */}
                <div className="relative h-10 mb-5 inline-block mt-5 w-1/2 pr-2 pl-1">
                  <label
                    htmlFor="housename"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    House Name
                  </label>
                  <input
                    id="housename"
                    type="text"
                    name="housename"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={housename}
                    onChange={(e) => setHousename(e.target.value)}
                  />
                </div>
                {/* Zip code */}
                <div className="relative h-10 mb-5 inline-block mt-5 pl-1 pr-2 w-1/4">
                  <label
                    htmlFor="zipcode"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Zip Code
                  </label>
                  <input
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
                {/* State */}
                <div className="relative h-10 mb-5 inline-block mt-4 pl-1 w-1/4 pr-1">
                  <label
                    htmlFor="state"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    name="state"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-sm"
                    value={countrystate}
                    onChange={(e) => setCountrystate(e.target.value)}
                  />
                </div>

                <p className="text-gray-500 font-medium text-lg mt-8">
                  Other Details
                </p>
                {/* Other details Section dropdown*/}
                <div className="relative h-10 mb-5 sm:inline-block mt-2 sm:w-1/2 sm:px-1">
                  <label
                    htmlFor="interests"
                    className=" left-2 bg-white px-1 text-black text-md"
                  >
                    Interests
                  </label>
                  <select
                    id="interests"
                    name="interests"
                    className="h-full w-full border-gray px-2 hover:border-gray-500 transition-all focus:border-blue-700 
              rounded-md focus:ring-0 group focus:outline-0 border text-base flex place-items-center"
                    // value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    defaultValue
                  >
                    <option value="null">Select interest</option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Music & Movies"
                    >
                      Music & Movies
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Sports"
                    >
                      Sports
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Agriculture/Naturist"
                    >
                      Agriculture/Naturist
                    </option>
                    <option
                      className="hover:bg-gray-200 p-2 text-base rounded-none"
                      value="Other Interests"
                    >
                      Other Interests
                    </option>
                  </select>
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    type="submit"
                    className=" h-10 bg-primary text-white w-1/3 rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
