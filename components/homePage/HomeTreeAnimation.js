import Image from "next/image";
import styles from "./HomeTreeAnimation.module.css";

const HomeTreeAnimation = () => {
  return (
    <div className="mt-20">
      <div className={styles.timeline}>Tree Creation</div>

      <div className={styles.cardContainer}>
        <div className={styles.card} id={styles.mainCard}>
          <Image
            src="https://cdn2.iconfinder.com/data/icons/child-people-face-avatar-3/500/child_162-512.png"
            alt="child"
            className="iconfinder"
            width={500}
            height={500}
          />
          <p>You</p>
        </div>
        <div className={styles.dCard} id={styles.subCard}>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/business-people-face-avatar-7/500/business2_75-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Father</p>
          </div>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/business-people-face-avatar-7/500/business2_63-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Mother</p>
          </div>
        </div>
        <div className={styles.dCard} id={styles.ssubCard}>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/old-people-face-avatar-2/500/old_74-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Grand Father</p>
          </div>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/old-people-face-avatar-1/500/old_62-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Grand Mother</p>
          </div>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/old-people-face-avatar-1/500/old_62-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Grand Mother</p>
          </div>
          <div className={styles.card}>
            <Image
              src="https://cdn2.iconfinder.com/data/icons/old-people-face-avatar-2/500/old_74-512.png"
              alt="image"
              className="iconfinder"
              width={200}
              height={200}
            />
            <p>Grand Father</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTreeAnimation;
