import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { listLeagues } from "../services/LeagueService";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  startDate: number,
  endDate: number,
  registrationEndDate: number,
  register: number
) {
  return { name, startDate, endDate, registrationEndDate, register };
}

const rows = [
  createData(
    "CTG Open Men Doubles",
    "2023-10-31",
    "2023-10-31",
    "2023-10-31",
    "Register"
  ),
  createData(
    "CTG Open Men Singles ",
    "2023-10-31",
    "2023-10-31",
    "2023-10-31",
    "Register"
  ),
  createData(
    "CTG Open Women Doubles",
    "2023-10-31",
    "2023-10-31",
    "2023-10-31",
    "Register"
  ),
  createData(
    "CTG Open Kids U 14",
    "2023-10-31",
    "2023-10-31",
    "2023-10-31",
    "Register"
  ),
  createData(
    "CTG Open Kids U 12",
    "2023-10-31",
    "2023-10-31",
    "2023-10-31",
    "Register"
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>League Name</StyledTableCell>
            <StyledTableCell align="right">League Start Date</StyledTableCell>
            <StyledTableCell align="right">League End Date</StyledTableCell>
            <StyledTableCell align="right">
              Registration End Date
            </StyledTableCell>
            <StyledTableCell align="right">Register</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.startDate}</StyledTableCell>
              <StyledTableCell align="right">{row.endDate}</StyledTableCell>
              <StyledTableCell align="right">
                {row.registrationEndDate}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="contained" color="success">
                  Register
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
