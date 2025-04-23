import search from "../../assets/img/Search.svg";

const Header: React.FC = () => {
  return (
    <nav className="header__menu">
      <div className="header__logo logo">
        <h3>SQ R3</h3>
      </div>
      <ul className="header__menu-list hidden-mobile">
        <li className="header__menu-item">
          <a className="header__menu-link" href="#home">
            Home
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__menu-link" href="#about">
            About
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__menu-link" href="#services">
            Services
          </a>
        </li>
        <li className="header__menu-item">
          <a className="header__menu-link" href="#contact">
            Furniture
          </a>
        </li>
      </ul>
      <button className="header__menu-button hidden-mobile" type="button">
        Order Now
      </button>
      <button className="header__menu-search">
        <img
          className="header__menu-img"
          src={search}
          alt="Search"
          loading="lazy"
        />
      </button>

      <button
        className="header__menu-burgerButton visible-mobile"
        type="button"
        title="Menu"
      >
        <span className="visually-hidden">Menu</span>
      </button>
    </nav>
  );
};

export default Header;
