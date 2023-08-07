import styled from "styled-components";
import foodItems from "../items";
import { useParams } from "react-router-dom";
import itemImg from "../assets/images/savoury-sizzle.jpg";

const Wrapper = styled.div`
  margin: calc(var(--spacing-2xl) * 2) 0 0;

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
`;

const ItemScreen = () => {
  const { id: itemId } = useParams();

  const item = foodItems.find((x) => x._id === itemId);

  return (
    <Wrapper>
      <div className="container">
        <div className="item-img">
          <img src={itemImg} alt="" />
        </div>
        <div className="content">
          <h1>{item.name}</h1>
          <p>{item.detail}</p>
          <span>Price: ${item.price}</span>
          <button className="primary-btn">Add</button>
        </div>
      </div>
    </Wrapper>
  );
};
export default ItemScreen;
