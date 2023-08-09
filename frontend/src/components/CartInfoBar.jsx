import Wrapper from "../styles/CartInfoBar.style";
import cartBarImg from "../assets/images/savoury-sizzle.jpg";
import { Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import QtySelect from "./QtySelect";
import { Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";
import { Link } from "react-router-dom";

const CustomAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

const CustomDelete = styled(Delete)`
  color: var(--secondary-color);
`;

const CartInfoBar = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  const itemPrice = Number((item.qty * item.price).toFixed(2));
  return (
    <Wrapper>
      <CustomAvatar src={cartBarImg} />
      <Link to={`/food/${item._id}`}>
        <h1>{item.name}</h1>
      </Link>
      <div className="price-section">
        <h3>Price</h3>
        <p>${item.price}</p>
      </div>
      <div className="qty-section">
        <QtySelect item={item} />
      </div>
      <div className="total-section">
        <h3>Total</h3>
        <p>{itemPrice}</p>
      </div>
      <IconButton onClick={handleRemoveFromCart}>
        <CustomDelete />
      </IconButton>
    </Wrapper>
  );
};
export default CartInfoBar;
