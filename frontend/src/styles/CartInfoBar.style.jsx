import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--grey-700);
  border-radius: 31px;
  margin: var(--spacing-md) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-lg) 0 0;

  .qty-section {
    width: 81px;
  }

  h1 {
    font-size: 23px;
    max-width: 143px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  a {
    text-decoration: underline;
  }

  .total-section p {
    text-align: center;
  }
`;

export default Wrapper;
