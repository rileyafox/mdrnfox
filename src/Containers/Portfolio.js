import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import WindowIcon from '@mui/icons-material/Window';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import wallpaper from '../Assets/Images/windows_11_se.png';
import resume from '../Assets/resume.pdf';
import project1Img from '../Assets/Images/Visual-Pathing-Algorithms.jpg';
import project2Img from '../Assets/Images/Visual-Sorting-Algorithms.jpg';
import project3Img from '../Assets/Images/twitter-resume.jpg';
import project4Img from '../Assets/Images/Twitter-Clone.jpg';
import { Box, Card, CardMedia, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';


const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(2),
  color: 'white',
}));

const BackgroundWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${wallpaper})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'fixed',
  height: '100vh',
  width: '100vw',
}));

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  backgroundColor: 'black',
  boxShadow: 24,
  padding: theme.spacing(4),
  overflow: 'auto',
  color: 'white',
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#333',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#555',
    borderRadius: '5px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#777',
  },
  scrollbarWidth: 'thin',
  scrollbarColor: '#555 #333',
}));

const WindowsModalBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '70px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 400,
  //height: 300,
  maxHeight: '90vh',
  bgcolor: 'rgba(255, 255, 255, 0.1)',
  boxShadow: 24,
  overflowY: 'auto',
  color: 'white',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  '& > *': {
    margin: 0,
  },
}));

const Taskbar = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  height: '40px',
  background: 'rgba(255, 255, 255, 0.1)',
  boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1),
}));

const TaskbarIcon = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '4px',
  },
}));

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [windowsOpen, setWindowsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleWindowsOpen = () => setWindowsOpen(true);
  const handleWindowsClose = () => setWindowsOpen(false);

  return (
    <BackgroundWrapper>
      <IconWrapper>
      <Box>
            <a href="https://github.com/rileyafox" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <GitHubIcon fontSize="large" />
                <Typography>GitHub</Typography>
            </a>
        </Box>
        <Box>
            <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <PictureAsPdfIcon fontSize="large" />
                <Typography>Resume</Typography>
            </a>
        </Box>
        <Box>
            <a href="https://www.linkedin.com/in/rileyaf/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <LinkedInIcon fontSize="large" />
                <Typography>LinkedIn</Typography>
            </a>
        </Box>
        <Box>
          <DeveloperModeIcon fontSize="large" onClick={handleOpen} style={{ color: 'white' }}/>
          <Typography>Projects</Typography>
        </Box>
        <Modal
            BackdropProps={{ style: { backgroundColor: 'transparent' } }}  
            open={open}
            onClose={handleClose}
            aria-labelledby="projects-modal"
            aria-describedby="projects-description"
        >
            <ModalBox>
              <Typography id="projects-modal" variant="h6" style={{ textAlign: 'center', marginTop: 0  }}>
                Projects
              </Typography>
              <Box m={2}>
                <Card>
                  <CardMedia component="img" height="200" image={project1Img} alt="Project 1"/>
                  <CardContent>
                    <Typography id="project-1">
                      Visual AI Pathing Algorithms
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box m={2}>
                <Card>
                  <CardMedia component="img" height="200" image={project2Img} alt="Project 2"/>
                  <CardContent>
                    <Typography id="project-2">
                      Visual Sorting Algorithms
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box m={2}>
                <Card>
                  <CardMedia component="img" height="200" image={project3Img} alt="Project 3"/>
                  <CardContent>
                    <Typography id="project-3">
                      Twitter Resume
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box m={2}>
                <Card>
                  <CardMedia component="img" height="200" image={project4Img} alt="Project 4"/>
                  <CardContent>
                    <Typography id="project-4">
                      Twitter Clone
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </ModalBox>
        </Modal>
        <Box>
          <FullscreenIcon fontSize="large" />
          <Typography>FullScreen</Typography>
        </Box>
      </IconWrapper>

      <Taskbar>
        <TaskbarIcon>
          <WindowIcon onClick={handleWindowsOpen} style={{ color: 'white' }}/>
        </TaskbarIcon>

        <Modal
          BackdropProps={{ style: { backgroundColor: 'transparent' } }}
          open={windowsOpen}
          onClose={handleWindowsClose}
          aria-labelledby="windows-modal"
          aria-describedby="windows-description"
        >
        <WindowsModalBox>
    <Box 
      flex={1} 
      display="flex" 
      justifyContent="space-around" 
      alignItems="center"
      bgcolor="rgba(0,0,0,0.1)"  
      padding={theme.spacing(2)}
    >
      <a href="https://github.com/rileyafox" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <GitHubIcon fontSize="large" />
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <PictureAsPdfIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/rileyaf/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <LinkedInIcon fontSize="large" />
            </a>
        <DeveloperModeIcon fontSize="large" onClick={handleOpen} />
    </Box>

    <Box flex={2} display="flex" flexDirection="column" justifyContent="center">
  {isExpanded && (
    <Box padding={2} bgcolor='rgba(46, 46, 46, 0.9)'>
      {/* For Phone Number */}
      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Typography variant="body2">Phone Number:</Typography>
        <Typography variant="body2">256-318-3092</Typography>
      </Box>

      {/* For Email */}
      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Typography variant="body2">Email:</Typography>
        <Typography variant="body2">rileyfox134@gmail.com</Typography>
      </Box>

      {/* For Website */}
      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Typography variant="body2">Website:</Typography>
        <Typography variant="body2">www.mdrnfox.com</Typography>
      </Box>

      {/* For Experience */}
      <Box display="flex" justifyContent="space-between" marginBottom={1}>
        <Typography variant="body2">Experience:</Typography>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Typography variant="body2">1 year</Typography>
          <Typography variant="body2">JavaScript/React</Typography>
          <Typography variant="body2">Python</Typography>
          <Typography variant="body2">C#/.NET</Typography>
        </Box>
      </Box>
    </Box>
  )}
</Box>

    <Box 
      flex={1} 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      padding={theme.spacing(2)}
      bgcolor='rgba(46, 46, 46, 0.9)'
    >
      <Box display="flex" alignItems="center" gap={theme.spacing(1)}>
        <AccountCircleIcon fontSize="large" />
        <Box>
          <Typography variant="subtitle1">Riley Fox</Typography>
          <Typography variant="body2">Junior Software Engineer</Typography>
        </Box>
      </Box>
      <KeyboardArrowUpIcon fontSize="large" onClick={() => setIsExpanded(!isExpanded)} />
    </Box>
</WindowsModalBox>

        </Modal>

        <TaskbarIcon>
            <a href="https://github.com/rileyafox" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <GitHubIcon />
            </a>
        </TaskbarIcon>
        <TaskbarIcon>
            <a href={resume} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <PictureAsPdfIcon />
            </a>
        </TaskbarIcon>
        <TaskbarIcon>
            <a href="https://www.linkedin.com/in/rileyaf/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                <LinkedInIcon />
            </a>
        </TaskbarIcon>
        <TaskbarIcon>
            <DeveloperModeIcon onClick={handleOpen} style={{ color: 'white' }} />
        </TaskbarIcon>
      </Taskbar>
    </BackgroundWrapper>
  );
};

export default Portfolio;