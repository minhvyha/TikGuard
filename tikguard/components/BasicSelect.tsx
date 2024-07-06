import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({
  list,
  value,
  callback,
}: {
  list: {
    value: string;
    label: string;
  }[];
  value: string;
  callback: (value: string) => void;
}) {
  const selectList = list.map((item, index) => {
    return (
      <MenuItem key={index} value={item.value}>
        {item.label}
      </MenuItem>
    );
  });

  const handleChange = (event: SelectChangeEvent) => {
    callback(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          {selectList}
        </Select>
      </FormControl>
    </Box>
  );
}
