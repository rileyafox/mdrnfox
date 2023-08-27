// Importing necessary libraries and components from packages
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

// Importing logo asset from local directory
import logo from '../Assets/Images/fox_logo_removebg-transformed.png';

// Define the LoadingPage component
const LoadingPage = () => {
  // Using the useNavigate hook to get the navigate function for programmatically changing routes
  const navigate = useNavigate();
  
  // Accessing the theme properties defined in the MUI theme provider (if any)
  const theme = useTheme();
  
  // State to manage whether the page is loading or not
  const [loading, setLoading] = useState(true);

  // UseEffect hook to execute side-effects after component render
  useEffect(() => {
    // Set a timer to change the loading state and navigate to the '/portfolio' route after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/portfolio');
    }, 3000);
    
    // Clean-up function: clear the timer when the component is unmounted to avoid any side-effects
    return () => clearTimeout(timer);
  }, [navigate]);  // Use navigate function as a dependency to ensure that the effect only runs when it changes

  // Rendering the loading logo inside a container with specific styles
  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        background: 'black',
        zIndex: 9999,
        '& img': {
          width: '50%',
          height: 'auto',
          // Applying an animation to the logo to scale it over a 3-second duration
          animation: `myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
          animationFillMode: 'forwards',
          '@keyframes myEffect': {
            '0%': {
              transform: 'scale(1)',
            },
            '100%': {
              transform: 'scale(1.2)',
            },
          },
        },
      }}
    >
      {loading && <img src={logo} alt="logo" />} {/* Render the logo only when the loading state is true */}
    </Box>
  );
};

// Exporting the LoadingPage component to be used elsewhere in the app
export default LoadingPage;