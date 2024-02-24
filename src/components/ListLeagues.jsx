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

const ListLeagues = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    listLeagues()
      .then((response) => {
        setLeagues(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          {leagues.map((league) => (
            <StyledTableRow key={league.name}>
              <StyledTableCell component="th" scope="row">
                {league.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {league.startDate}
              </StyledTableCell>
              <StyledTableCell align="right">{league.endDate}</StyledTableCell>
              <StyledTableCell align="right">
                {league.registrationEndDate}
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
};
export default ListLeagues;
