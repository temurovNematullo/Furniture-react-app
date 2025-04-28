import search from "../../assets/img/Search.svg";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  handleScroll: () => void; // Тип для функции без параметров
  // или, если функция принимает параметры:
  // handleScroll: (param: type) => void;
}

const Header: React.FC<HeaderProps> = ({ handleScroll }) => {
  return (
    <nav className="header__menu">
      <div className="header__logo logo">
        <h3>SQ R3</h3>
      </div>
      <ul className="header__menu-list hidden-mobile">
        <li className="header__menu-item">
          <NavLink className="header__menu-link" to="/home">
            Home
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink className="header__menu-link" to="/about">
            About
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink className="header__menu-link" to="/services">
            Services
          </NavLink>
        </li>
        <li className="header__menu-item">
          <NavLink
            onClick={handleScroll}
            className="header__menu-link"
            to="/furninure"
          >
            Furniture
          </NavLink>
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
