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
  severity: Boolean | Number | null,
  classes: Object| null
}}) => {
  const {setError, setSeverity} = useStore();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    if(!data.classes) {
      setError('No data available for this category');
      setSeverity('warning')
    };
    setOpen(true)};
  const handleClose = () => {
    setOpen(false)
  };
  function formatter(num: number) {
    return new Intl.NumberFormat('default', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  return (
    <>
      {data.classes ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Table data={data.classes} />
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
        <div className={`h-full flex items-center justify-center py-2 ${data.classes !== null ? 'underline underline-offset-1' : ''}`}>
          { data.severity !== false ? (
            <>
              Severity: {formatter(data.severity as number).toString()}
            </>
          ) : data.severity === false ?  (
            <>
              See details
            </>
          ): (
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