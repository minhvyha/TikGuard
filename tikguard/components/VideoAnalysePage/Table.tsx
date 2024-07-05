import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useStore } from '@/app/context/context';
import { styled } from '@mui/material/styles';

const GridContainer = styled('div')`
  .MuiDataGrid-cell {
    border-top: 2px solid rgb(107 114 128) !important;
  }
  .MuiDataGrid-filler {
    border-top: 2px solid rgb(107 114 128) !important;
  }
  .MuiDataGrid-footerContainer {
    border-top: 2px solid rgb(107 114 128) !important;
  }
  .css-mtwq5m-MuiDataGrid-root .MuiDataGrid-row:hover {
    background-color: rgb(65 68 88) !important;
  }
`;

const Table = ({
  data,
}: {
  data: any;
}) => {
  const { theme } = useStore();
  const currentMode =
    theme.palette.mode === 'dark' ? 'bg-background-700' : 'bg-background-100';

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      headerClassName: currentMode,
    },
    {
      field:'timestamp',
      headerName: 'Timestamp',
      width: 110,
      headerClassName: currentMode,
    },

    {
      field: 'class',
      headerName: 'Class',
      width: 170,
      headerClassName: currentMode,
    },
    {
      field: 'severity',
      headerName: 'Severity | Probability',
      type: 'number',
      width: 190,
      headerClassName: currentMode,
    },
  ];
  let rows :any = []
  let count = 1
  console.log(data)
  data.forEach((element: any) => {
    console.log(element)
    let timestamp = new Date(element.time * 1000).toISOString().slice(11, 19); 
    for (const [key, value] of Object.entries(element.classes)) {

      rows.push({ id: count, timestamp:timestamp, class: key, severity: value });
      count += 1;
    }
  });
  

  return (
    <GridContainer>
      <DataGrid
        sx={{
          height: 350,
          backgroundColor:
            theme.palette.mode === 'dark' ? '#414458' : '#e2e3e9',
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 100]}
        rowSelection={false}
      />
    </GridContainer>
  );
};

export default Table;
