import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useStore } from '@/app/context/context';
import { styled } from '@mui/material/styles';

const GridContainer = styled('div')`
  .MuiDataGrid-cell {

    border-top: 2px solid rgb(107 114 128) !important;

  }
  .MuiDataGrid-filler{
    border-top: 2px solid rgb(107 114 128) !important;
  }
  .MuiDataGrid-footerContainer{
    border-top: 2px solid rgb(107 114 128) !important;
  
  }
  .css-mtwq5m-MuiDataGrid-root .MuiDataGrid-row:hover{
    background-color: rgb(65 68 88 ) !important;
  }

`;

const Table = () => {
  const { theme } = useStore();
  const currentMode = theme.palette.mode === 'dark' ? 'bg-background-700': 'bg-background-100';

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      headerClassName:
        currentMode,

    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      headerClassName:
        currentMode,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      headerClassName:
        currentMode,

    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
      headerClassName:
        currentMode,

    },

  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

    { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

  ];

  return (
    <GridContainer>
    <DataGrid
      sx={{
        height: 350,
        backgroundColor: theme.palette.mode === 'dark' ? '#414458' : '#e2e3e9',
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
