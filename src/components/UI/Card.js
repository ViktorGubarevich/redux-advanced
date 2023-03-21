import styles from "./Card.module.css";

const Card = ({ className, children }) => {
  return (
    <section className={`${styles.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
