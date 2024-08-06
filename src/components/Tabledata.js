import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function TableData() {

  const [row, setRow] = React.useState([]);
  //setRow(rowData);

  // const rows = [
  //   createData(
  //     0,
  //     '16 Mar, 2019',
  //     'Elvis Presley',
  //     'Tupelo, MS',
  //     'VISA ⠀•••• 3719',
  //     312.44,
  //   ),
  //   createData(
  //     1,
  //     '16 Mar, 2019',
  //     'Paul McCartney',
  //     'London, UK',
  //     'VISA ⠀•••• 2574',
  //     866.99,
  //   ),
  //   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  //   createData(
  //     3,
  //     '16 Mar, 2019',
  //     'Michael Jackson',
  //     'Gary, IN',
  //     'AMEX ⠀•••• 2000',
  //     654.39,
  //   ),
  //   createData(
  //     4,
  //     '15 Mar, 2019',
  //     'Bruce Springsteen',
  //     'Long Branch, NJ',
  //     'VISA ⠀•••• 5919',
  //     212.79,
  //   ),
  // ];

    return(
        <>
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Step Action</TableCell>
            <TableCell>Field Name</TableCell>
            <TableCell>Field Value</TableCell>
            <TableCell>Wait Time</TableCell>
            <TableCell>Display Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row?.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.name}</TableCell>
              <TableCell>{r.shipTo}</TableCell>
              <TableCell>{r.paymentMethod}</TableCell>
              <TableCell align="right">{`$${r.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </>
    )
}