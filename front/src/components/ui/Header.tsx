import React from "react";
import styles from ""; // Adjust the path as needed

interface HeaderProps {
  title: string;
  description: string;
  buttonElement?: React.FC<HeaderProps>;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  description,
  buttonElement,
}) => {
  return (
    <div id="service-card-header" className={styles.headerWrapper}>
      <div className={styles.textContainer}>
        <div className={`title-color ${styles.title}`}>
          {title}
          <br className="hidden 2xl:block xl:block lg:block" /> with us
        </div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.buttonContainer}>
        {buttonElement && React.createElement(buttonElement)}
      </div>
    </div>
  );
};
