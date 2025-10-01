"use client";
import styles from "../developement/DevHeading.module.css";

interface ScrollableButtonProps {
  scrollAmount: number;
  buttonText?: string;
  buttonClasses?: string;
}

const ScrollableButton: React.FC<ScrollableButtonProps> = ({
  scrollAmount = 350,
  buttonText = "Explore More",
  buttonClasses = styles.btn,
}) => {
  const handleScroll = () => {
    window.scrollTo({ top: scrollAmount, behavior: "smooth" });
  };

  return (
    <button className={buttonClasses} onClick={handleScroll}>
      {buttonText}
    </button>
  );
};

export default ScrollableButton;
