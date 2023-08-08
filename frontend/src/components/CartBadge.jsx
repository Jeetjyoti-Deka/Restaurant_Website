import styled from "styled-components";

const Wrapper = styled.div`
  .badge {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    font-weight: 900;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0;
    position: absolute;
    top: -14px;
    left: 52px;
  }
`;

const CartBadge = ({ itemCount }) => {
  return (
    <Wrapper>
      <span className="badge">{itemCount}</span>
    </Wrapper>
  );
};
export default CartBadge;
