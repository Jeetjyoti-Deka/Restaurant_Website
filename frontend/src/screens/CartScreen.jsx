import styled from "styled-components";
import CartInfoBar from "../components/CartInfoBar";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import CartTable from "../components/CartTable";

const Wrapper = styled.div`
  margin: var(--spacing-2xl) 0;

  .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 20px;
  }

  .container .cart-items {
    display: flex;
    flex-direction: column;
  }

  .empty {
    width: 75%;
    margin: 0 auto;
  }

  .empty a {
    color: var(--secondary-color);
    text-decoration-color: var(--secondary-color);
  }

  .container .bill {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: var(--spacing-md) 0 0 0;
  }
`;

const cartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Wrapper>
      {cartItems.length > 0 ? (
        <>
          <div className="container">
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartInfoBar key={item._id} item={item} />
              ))}
            </div>
            <div className="bill">
              <CartTable />
            </div>
          </div>
        </>
      ) : (
        <div className="empty">
          <span>Cart is Empty </span>
          <MuiLink variant="h6" component={RouterLink} to="/menu">
            Place Order
          </MuiLink>
        </div>
      )}
    </Wrapper>
  );
};
export default cartScreen;
