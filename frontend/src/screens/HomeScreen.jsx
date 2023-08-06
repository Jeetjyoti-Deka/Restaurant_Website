import styled from "styled-components";
import cardImg1 from "../assets/images/savoury-sizzle.jpg";
import FoodCard from "../components/FoodCard";

const Wrapper = styled.div`
  margin: calc(var(--spacing-2xl) * 1.8) 0 var(--spacing-xl);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container h1 {
    text-align: center;
    font-family: var(--heading-font);
    font-size: 54px;
    font-weight: 700;
    line-height: 58px;
    text-transform: capitalize;
  }

  .container h1 > span {
    color: var(--secondary-color);
  }

  .container p {
    margin: var(--spacing-xl) 0 var(--spacing-xl);
    font-family: var(--body-font);
    font-size: 24px;
    font-weight: 500;
    line-height: 58px;
  }

  .card-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>
          Welcome to <span>SIZZLE</span>: <br />
          where every bite is a culinary delight!
        </h1>
        <p>Our Customer Favourites:</p>
        <div className="card-container">
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </Wrapper>
  );
};
export default HomeScreen;
