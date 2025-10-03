import styles from "./Animate.module.scss";

const Animate = () => {
  return (
    <div className={`mt-10 ${styles.area}`}>
      <ul className={styles.circles}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Animate;
