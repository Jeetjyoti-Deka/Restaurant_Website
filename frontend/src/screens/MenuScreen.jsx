import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/items");
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <h1>
          Explore Our Delectable Menu for a <br />
          <span>Flavorful</span> Journey!
        </h1>
        <div className="card-container">
          {items.map((item) => (
            <FoodCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default MenuScreen;
