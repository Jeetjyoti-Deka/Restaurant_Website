import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const QtySelect = ({ item }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    item = { ...item, qty: e.target.value };
    dispatch(addToCart(item));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="qty-select">Qty</InputLabel>
      <Select
        labelId="qty-select"
        id="qty"
        value={item.qty}
        label="Qty"
        onChange={handleChange}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <MenuItem key={x + 1} value={x + 1}>
            {x + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default QtySelect;
