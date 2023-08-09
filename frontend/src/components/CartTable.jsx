import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import { TableBody } from "@mui/material";

const CartTable = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 90 }} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell>Items Price</TableCell>
            <TableCell align="left">${cart.itemsPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>

            <TableCell align="left">${cart.taxPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Delivery</TableCell>

            <TableCell align="left">${cart.deliveryPrice}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>

            <TableCell align="left">${cart.totalPrice}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CartTable;

function createData(name, num) {
  return { name, num };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];
