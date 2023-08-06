import styled from "styled-components";
import cardImg1 from "../assets/images/savoury-sizzle.jpg";

const Wrapper = styled.div`
  .card {
    background-color: var(--secondary-color);
    padding: 25px 20px;
    border-radius: 7px;
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

  .card button {
    margin-left: 127px;
  }

  .card h2 {
    margin: var(--spacing-md) 0 0;
    text-align: center;
    font-family: var(--body-font);
    font-size: 34px;
    font-weight: 700;
    line-height: 58px;
  }

  .card span {
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 700;
    line-height: 58px;
  }
`;

const FoodCard = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-img">
          <img src={cardImg1} alt="" />
        </div>
        <h2>Savoury Sizzle</h2>
        <span>$30.00</span>
        <button className="ghost-btn">Add</button>
      </div>
    </Wrapper>
  );
};
export default FoodCard;
