import styled from "styled-components";
import cardImg1 from "../assets/images/savoury-sizzle.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0 auto;

  .card {
    background-color: var(--secondary-color);
    padding: 25px 20px;
    border-radius: 7px;
    max-width: 298px;
  }

  .card a {
    color: var(--white);
  }

  .card a:hover {
    text-decoration: underline;
  }
  .card .card-img {
    max-width: 243px;
    max-height: 210px;
    overflow: hidden;
    position: relative;
    border-radius: 7px;
  }

  .card .card-img img {
    position: relative;
    top: -151px;
    left: 0;
  }

  .card a {
    margin-left: 127px;
  }

  .card h2 {
    margin: var(--spacing-md) 0 0;
    text-align: center;
    font-family: var(--body-font);
    font-size: 34px;
    font-weight: 700;
    line-height: 58px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 243px;
  }

  .card span {
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 700;
    line-height: 58px;
  }
`;

const FoodCard = ({ item }) => {
  return (
    <Wrapper>
      <div className="card">
        <Link to={`/food/${item._id}`}>
          <div className="card-img">
            <img src={cardImg1} alt="" />
          </div>
        </Link>
        <div className="card-content">
          <Link to={`/food/${item._id}`}>
            <h2>{item.name}</h2>
          </Link>
          <span>${item.price}</span>
          <Link to={`/food/${item._id}`} className="ghost-btn">
            Add
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
export default FoodCard;
