import React from "react";
import CompleteProfile from "@/components/welcomePage/CompleteProfile";
import Search from "@/components/welcomePage/Search";
import ShareTree from "@/components/welcomePage/ShareTree";
import LastViewed from "@/components/welcomePage/LastViewed";
import Timeline from "@/components/welcomePage/Timeline";
import QuickLinks from "@/components/welcomePage/QuickLinks";
import styles from "@/components/welcomePage/WelcomePage.module.css";

const HomePage = async () => {
  return (
    <div className="mt-28">
      <div className={styles.homeSection}>
        <div className={styles.homeContainer}>
          <div className={styles.topHomeSide}>
            <div className={styles.wrapperHome}>
              <CompleteProfile />
              <ShareTree />
            </div>
            <Search />
          </div>

          <div className={styles.bottomHomeSide}>
            <div className={styles.bottomWrapper}>
              <div className={styles.viewTreeContainer}>
                <LastViewed />
                <Timeline />
              </div>
              <QuickLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
