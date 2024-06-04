// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { assets } from "../../Assets/Assets";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <div onClick={scrollToTop} style={styles.container}>
          <img
            src={assets.up}
            alt="Scroll to top"
            style={styles.image}
          />
      </div>
    )
  );
};

const styles = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '40px',  // Adjust size as needed
    height: '40px', // Adjust size as needed
    backgroundColor: '#000000', // Background color
    borderRadius: '50%', // Makes the container circular
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
    zIndex:99,
      },
  image: {
    width: '40px',  // Adjust size as needed
    height: '40px', // Adjust size as needed
  },
};

export default ScrollToTopButton;
