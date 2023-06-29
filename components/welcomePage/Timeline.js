import React from "react";
import styles from "./WelcomePage.module.css";
import Link from "next/link";
import Image from "next/image";

const Timeline = () => {
  return (
    <div className={styles.requestTreeConnection}>
      <div className={styles.viewTimeline}>
        <div className={styles.avatar}>
          <Image
            src="https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/timeline-512.png"
            alt=""
            width={100}
            height={100}
            className={styles.avatarImg}
          />
        </div>
        <p className={styles.heading}>Your Moments</p>
        <p className={styles.headPara}>
          Add the most memorable moments from your life
        </p>
        <p className={styles.btn}>
          <Link href="/timeline" className={styles.Link}>
            View Records
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Timeline;
