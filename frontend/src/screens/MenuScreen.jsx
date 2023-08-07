import styled from "styled-components";
import foodItems from "../items";
import FoodCard from "../components/FoodCard";

const Wrapper = styled.div`
  margin: calc(var(--spacing-2xl) * 1.6) 0 0;

  .container h1 {
    text-align: center;
    font-family: var(--heading-font);
    font-size: 54px;
    font-weight: 700;
    line-height: 58px;
  }

  .container h1 span {
    color: var(--secondary-color);
  }

  .container .card-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 40px;
    row-gap: 60px;
    margin: var(--spacing-2xl) 0 var(--spacing-xl);
  }
`;

const MenuScreen = () => {
  return (
    <Wrapper>
      <div className="container">
        <h1>
          Explore Our Delectable Menu for a <br />
          <span>Flavorful</span> Journey!
        </h1>
        <div className="card-container">
          {foodItems.map((item) => (
            <FoodCard item={item} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default MenuScreen;
