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
  data: Object;
}) => {
  const { theme, analysedText } = useStore();
  const currentMode =
    theme.palette.mode === 'dark' ? 'bg-background-700' : 'bg-background-100';

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
      headerClassName: currentMode,
    },

    {
      field: 'class',
      headerName: 'Class',
      width: 130,
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
  for (const [key, value] of Object.entries(data)) {

    rows.push({ id: count, class: key, severity: value });
    count += 1;
  }

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
