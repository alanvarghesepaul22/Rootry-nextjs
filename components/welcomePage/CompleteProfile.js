import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./WelcomePage.module.css";
import { NextAuthOptions, loginIsRequiredServer } from "@/lib/auth";
import { getServerSession } from "next-auth";

const CompleteProfile =async () => {
  await loginIsRequiredServer();
  const session = await getServerSession(NextAuthOptions);

  return (
    <div className={styles.leftHomeSide}>
      <div className={styles.updateProfile}>
        <div className={styles.avatar}>
          <Image
            src={session.user.image==undefined ? 'https://cdn2.iconfinder.com/data/icons/child-people-face-avatar-3/500/child_159-512.png':session.user.image}
            alt="avatar"
            width={100}
            height={100}
            className={styles.profileImg}
          />
        </div>

        <div className={styles.updateContent}>
          <p className={styles.heading}>Introducing My profile</p>
          <p className={styles.headPara}>
            Add a profile picture, edit your public name and choose what other
            information you wish to share with our community.
          </p>
          <Link
            href="/profile/complete-profile"
            className={styles.updateContentButton}
          >
            Complete your profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
