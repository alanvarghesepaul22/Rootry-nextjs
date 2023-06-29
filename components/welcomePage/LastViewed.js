import React from "react";
import styles from './WelcomePage.module.css'
import Image from "next/image";
import Link from "next/link";

const LastViewed = () => {
  return (
    <div className={styles.viewTree}>
      <div className={styles.viewTreeContent}>
        <div className={styles.avatar}>
          <Image
            src="https://cdn2.iconfinder.com/data/icons/child-people-face-avatar-3/500/child_159-512.png"
            alt="avatar"
            width={100}
            height={100}
            className={styles.avatarImg}
          />
        </div>
        <p className={styles.heading}>You last viewed</p>
        <p className={styles.headPara}>
          Add new branches to your tree to expand the connection
        </p>
        <p className={styles.btn}>
          <Link href="/tree/view-tree" className={styles.Link}>View tree</Link>
        </p>
      </div>
    </div>
  );
};

export default LastViewed;
