import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import itemImg from "../assets/images/savoury-sizzle.jpg";
import { useGetItemByIdQuery } from "../slices/itemApiSlice";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Wrapper = styled.div`
  margin: calc(var(--spacing-2xl) * 2.5) 0 0;
  position: relative;

  .ghost-btn {
    position: absolute;
    top: -71px;
    left: 189px;
  }

  .container {
    display: flex;
    justify-content: space-between;
  }

  .container .item-img {
    max-width: 565px;
    max-height: 437px;
    overflow: hidden;
    position: relative;
    border-radius: 7px;
  }

  .container .item-img img {
    position: relative;
    top: -366px;
    left: 0;
  }

  .container .content {
    padding: var(--spacing-lg) var(--spacing-xl);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .container .content h1 {
    font-family: var(--heading-font);
    font-size: 65px;
    font-weight: 700;
    line-height: 75px;
  }

  .container .content p {
    font-family: var(--body-font);
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  .container .content span {
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
  }

  .container .qty-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .container .qty-section select {
    outline: 0;
    border: 0;
    box-shadow: none;
    border-radius: 7px;
    padding: 4px 1em;
    margin: 0 0 0 var(--spacing-2xl);
    color: var(--grey-300);
    background-color: var(--grey-700);
    background-image: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }
`;

const ItemScreen = () => {
  const { id: itemId } = useParams();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { data: item, isLoading, error } = useGetItemByIdQuery(itemId);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, qty }));
    navigate("/cart");
  };

  return (
    <Wrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error?.data?.message || error?.error}</h2>
      ) : (
        <>
          <button className="ghost-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <div className="container">
            <div className="item-img">
              <img src={itemImg} alt="" />
            </div>
            <div className="content">
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <span>Price: ${item.price}</span>
              {item.countInStock > 0 && (
                <div className="qty-section">
                  <h3>Qty:</h3>
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <button className="primary-btn" onClick={handleAddToCart}>
                Add
              </button>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default ItemScreen;
