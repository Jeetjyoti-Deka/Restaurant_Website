import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import heroBurger from "../assets/images/hero-burger.jpg";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background-color: var(--primary-color);
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;

  .background-burger {
    background: url(${heroBurger}) var(--grey-300) 50% / cover no-repeat;
    min-height: 100vh;
    width: 50vw;
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }

  .blur-1,
  .blur-2,
  .blur-3 {
    background: linear-gradient(90deg, #232734 0%, rgba(35, 39, 52, 0) 100%);
    min-height: 100vh;
    width: 257px;
    position: absolute;
    z-index: 5;
    top: 0;
    left: 0;
  }

  .blur-2 {
    top: 0;
    left: 2px;
  }

  .blur-3 {
    top: 0;
    left: 24px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 4;
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

  .hero {
    position: relative;
  }

  .hero-content {
    margin: calc(var(--spacing-2xl) * 1.2) 0 0;
    position: relative;
    z-index: 3;
  }

  .hero-content h1 {
    color: var(--white);
    width: 664px;
    font-family: var(--heading-font);
    font-size: 54px;
    font-weight: 700;
    line-height: 58px;
    margin: 0 0 var(--spacing-md);
  }

  .hero-content p {
    color: var(--white);
    font-family: var(--body-font);
    font-size: 14px;
    font-weight: 500;
    line-height: 58px;
    margin: 0 0 var(--spacing-xl);
  }
`;

const LandingScreen = () => {
  return (
    <Wrapper>
      <div className="background-burger">
        <div className="blur-1"></div>
        <div className="blur-2"></div>
        <div className="blur-3"></div>
      </div>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <button className="ghost-btn">Sign In</button>
          </div>
        </nav>
      </div>

      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Delicious Food is Waiting for You</h1>
            <p>Taste, Love, Repeat: Unforgettable Flavors in Every Bite!</p>
            <div className="btn-group">
              <button className="primary-btn">Order Now!</button>
              <button className="secondary-btn">View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default LandingScreen;
