          // @ts-ignore

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
};

const ModalCard = ({ data}: { data: {
  namespace: String | null,
  id: String | null,
  label: String,
  hierarchy: String[] | null,
  score: Number | null,
  frequency: Number | null,
  winner: Boolean | null,
  positions: [ {
    start: Number,
    end: Number
  
  }]| null
}}) => {
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
    <>
            { data.positions? <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Table data={data.positions} />
        </Box>
      </Modal> :<></>}
    <div onClick={handleOpen}  className='transition-all flex flex-col  w-full p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded-sm'>
        <div>
          {data.label}
        </div>
        <div >
          Frequencies: {data.positions ? (data as { positions: any[] }).positions.length : 0}
        </div>


    </div>
    </>

  )
}

export default ModalCard