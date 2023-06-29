import React from "react";
import styles from "./WelcomePage.module.css";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div className={styles.quickSearch}>
      <p className={styles.heading}>Quick Links</p>
      <div className={styles.quickSearchUl}>
        <ul>
          <li>
            <Link href="/groups" className={styles.Link}>
              Form Group
            </Link>
          </li>
          <li>
            <Link href="/magazine-news" className={styles.Link}>
              Newspaper & magazine
            </Link>
          </li>
          <li>
            <Link href="/timeline" className={styles.Link}>
              Family Record
            </Link>
          </li>
          <li>
            <Link href="/search-tree" className={styles.Link}>
              Tree Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
