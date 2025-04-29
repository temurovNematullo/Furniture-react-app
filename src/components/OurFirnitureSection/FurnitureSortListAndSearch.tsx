import { Children } from "react";
import search from "../../assets/img/searchButton.svg";
import { NavLink } from "react-router-dom";

interface FurnitureSortAndSearchProps {
  searchValue: string;
  handleChange: (value: string) => void;
  furnitureSearch: () => void;
  children: string;
}

const FurnitureSortAndSearch: React.FC<FurnitureSortAndSearchProps> = ({
  searchValue,
  handleChange,
  furnitureSearch,
  children,
}) => {
  return (
    <div className="SortList__container">
      <div className="SortList__container-search">
        <input
          type="text"
          value={searchValue}
          placeholder="Search a furniture"
          className="SortList__container-input"
          onChange={(e) => handleChange(e.target.value)}
        />
        <button className="SortList__container-button" title="Search">
          <img
            src={search}
            alt=""
            className="searchIcon"
            onClick={furnitureSearch}
          />
        </button>
      </div>
      <div className="SortList__container-nav">
        <div> {children}</div>
        <NavLink
          to="?category=all"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          All
        </NavLink>
        <NavLink
          to="?category=chair"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Chair
        </NavLink>
        <NavLink
          to="?category=table"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Table
        </NavLink>
        <NavLink
          to="?category=bed"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Bed
        </NavLink>
        <NavLink
          to="?category=sofa"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Sofa
        </NavLink>
        <NavLink
          to="?category=almirah"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Almirah
        </NavLink>
        <NavLink
          to="?category=rack"
          className="SortList__container-navItem"
          aria-disabled="false"
        >
          Rack
        </NavLink>
      </div>
    </div>
  );
};

export default FurnitureSortAndSearch;
