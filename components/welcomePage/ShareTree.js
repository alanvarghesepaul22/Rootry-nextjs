import React from "react";
import styles from "./WelcomePage.module.css";
import Link from "next/link";

const ShareTree = () => {
  return (
    <div className={styles.shareTree}>
      <div className={styles.share}>
        <p className={styles.heading}>Share Your Family Tree</p>
        <p className={styles.headPara}>
          Invite your family and friends to view your tree and allow them to
          merge the tree if they have any relation with you
        </p>
        <Link href="/tree/share-tree" className={styles.shareButton}>Share Your Tree</Link>
      </div>
    </div>
  );
};

export default ShareTree;
