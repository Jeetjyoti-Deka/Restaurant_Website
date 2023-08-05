import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const Wrapper = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  top: 0;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar .logo {
    margin: var(--spacing-lg) 0;
  }

  .navbar .nav-links {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: var(--spacing-lg) 0;
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <button className="ghost-btn">Sign In</button>
          </div>
        </nav>
      </div>
    </Wrapper>
  );
};
export default Navbar;
