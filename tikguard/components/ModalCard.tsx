          // @ts-ignore

import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Table from './Table';
import { useStore } from '@/app/context/context';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const ModalCard = ({ data}: { data: {
  label: String,
  severity: Number | null,
  positions: [ {
    start: Number,
    end: Number
  
  }]| null
}}) => {
  const {setError, setSeverity} = useStore();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    if(!data.positions) {
      setError('No data available for this category');
      setSeverity('warning')
    };
    setOpen(true)};
  const handleClose = () => {
    setOpen(false)
  };
  return (
    <>
      {data.positions ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Table data={data.positions} />
          </Box>
        </Modal>
      ) : (
        <></>
      )}
      <div
        onClick={handleOpen}
        className="transition-all w-[45%] flex flex-col  p-3 border-2 cursor-pointer border-background-500 dark:border-gray-500 border-solid text-xs rounded"
      >
        <div>
          {data.label}:
        </div>
        <div className="h-full flex items-center justify-center ">
          {data.positions ? (
            <>
              Frequencies: {(data as { positions: any[] }).positions.length}
            </>
          ) : data.severity ? (
            <>
              Severity: {data.severity.toString()}
            </>
          ) : (
            <>
              Severity: Not Available
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ModalCard