import React from 'react'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Table from './Table';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 400,
};

const ModalCard = ({title, data}: {title: string, data: Object}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log(3)
    setOpen(true)};
  const handleClose = () => {
    console.log(1)
    setOpen(false)
    console.log(open)
  };
  return (
    <div className='transition-all flex flex-col  w-full p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded-sm'>
        <div>

        {title}
        </div>
        <div onClick={handleOpen}>
          Frequencies: {(data as { data: { categories: any[] } })['data']['categories'].length}
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Table />
        </Box>
      </Modal>

    </div>

  )
}

export default ModalCard