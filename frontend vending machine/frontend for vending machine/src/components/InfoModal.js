import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ModalInfo({ flag, close }) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  useEffect(() => {
    // Use a timer to automatically close the modal after 5 seconds
    const timer = setTimeout(() => {
      close();
    }, 20000);
    // Clear the timer if the modal is closed before the timeout
    return () => clearTimeout(timer);
  }, [flag, close]);

  return (
    <div>
      <Modal
        open={flag}
        onClose={close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label className='title2'>Success</label> 
          <Typography id="modal-modal-title" variant="h6" component="h3">
            1 PET token has been set to your wallet
          </Typography>
          <Box style={{  textAlign: 'center', margin:"1em"}}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Your tokens are being sent...it shouldn't take long
            </Typography>
            <Typography style={{color:"blue",marginBottom:'2em'}} sx={{ mt: 2 }}>
              Thanks for your contribution to the planet! 
              You can exchange your PET coins into Stable Coins too!
            </Typography>
          </Box>
          <Stack spacing={2} direction="row" justifyContent="flex-end">
            <Button variant="contained" onClick={close} style={{backgroundColor:"#e91e63"}} >Close</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalInfo;
