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
  data: [
    {
      start: Number;
      end: Number;
      intensity?: string;
      type?: string;
    }
  ];
}) => {
  const { theme, text } = useStore();
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
      field: 'start',
      headerName: 'Start Index',
      width: 130,
      headerClassName: currentMode,
    },
    {
      field: 'end',
      headerName: 'End Index',
      width: 130,
      headerClassName: currentMode,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: data[0]?.type ? 120 : 0,
      headerClassName: currentMode,
    },
    {
      field: 'intensity',
      headerName: 'Intensity',
      width: data[0]?.intensity ? 120 : 0,
      headerClassName: currentMode,
    },
    {
      field: 'word',
      headerName: 'Words',
      type: 'number',
      width: 90,
      headerClassName: currentMode,
    },
  ];
  let rows = data.map((row, index) => {
    return {
      id: index + 1,
      start: row.start,
      end: row.end,
      type: row.type || '',
      intensity: row.intensity || '',
      word: text.substring(Number(row.end), Number(row.start)),
    };
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
