import React from "react";
import styles from "./WelcomePage.module.css";

const Search = () => {
  return (
    <div className={styles.personSearch}>
      <form action="" method="POST">
        <p className={styles.heading}>Search All Record</p>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="First Name"
            className={styles.firstName}
            id="firstName"
            name="firstName"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Last Name"
            className={styles.lastName}
            id="lastName"
            name="lastName"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="date"
            placeholder="Birth Date"
            className={styles.birthday}
            id="birthday"
            name="birthday"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="House Name"
            className={styles.houseName}
            id="house"
            name="house"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            placeholder="Location"
            className={styles.location}
            id="location"
            name="location"
          />
        </div>
        <button className={styles.personSearchButton}>Search</button>
      </form>
    </div>
  );
};

export default Search;
