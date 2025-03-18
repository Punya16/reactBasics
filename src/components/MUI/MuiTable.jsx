import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const students = [
  { name:"Punya",phone:7356443895,email:"punyasuvarna007@gmail.com",address:"Rama Nivas"},
  { name:"Punya",phone:7356443895,email:"punyasuvarna007@gmail.com",address:"Rama Nivas"},
  { name:"Punya",phone:7356443895,email:"punyasuvarna007@gmail.com",address:"Rama Nivas"},
  { name:"Punya",phone:7356443895,email:"punyasuvarna007@gmail.com",address:"Rama Nivas"},
  { name:"Punya",phone:7356443895,email:"punyasuvarna007@gmail.com",address:"Rama Nivas"},
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Sl No</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >{++index}</TableCell>
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell >{row.phone}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.address}</TableCell>
              {/* <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
