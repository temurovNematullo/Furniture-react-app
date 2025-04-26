import search from "../../assets/img/searchButton.svg";
import { NavLink } from "react-router-dom";
import debounce from "lodash.debounce";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../../reduxTK/slices/productSlice";
import CardSkeleton from "../Loader/loader";

import {
  fetchProducts,
  fetchAllProducts,
} from "../../reduxTK/slices/productSlice";

const FurnitureSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const [searchValue, setSearchValue] = useState<string>("");

  const furnitureSearch = () => {
    if (searchValue.length === 0) {
      return;
    } else {
      dispatch(fetchSearchResults(searchValue));
      setSearchValue("");
    }
  };

  const handleChange = (value: string) => {
    const valueSearch = value.trim();

    setSearchValue(valueSearch);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (category === "all") {
      dispatch(fetchAllProducts({ sortBy: "", groupValue: "all" }));
    } else if (category.length !== 0) {
      dispatch(fetchAllProducts({ sortBy: "group", groupValue: category }));
    }
  }, [category, dispatch]);

  return (
    <section className="Furniture container ">
      <div className="firnitureText_Box">
        <h2>Our Furniture</h2>
        <span className="furnitureTxt">It is a long established fact t</span>
        <span className="furnitureTxt">
          {" "}
          hat a reader will be distracted by the service.
        </span>
      </div>
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
      <div className="cardConteiner">
        {products.length === 0
          ? Array(8)
              .fill(0)
              .map((_, index) => <CardSkeleton key={index} />)
          : products.map((product, index) => (
              <div className="cardConteiner-cardProduct" key={index}>
                <div className="cardProduct_img">
                  <img src={product.image} alt="" />
                </div>
                <div className="cardProduct_Info">
                  <h3>{product.title}</h3>
                  <h3>${product.price}</h3>
                </div>
                <div className="cardProduct_text">
                  <span>{product.about}</span>
                  <button className="cardProduct_button">Order Now</button>
                </div>
              </div>
            ))}
      </div>
      <div className="view__Conteiner">
        <button
          className="view__Conteiner-button"
          onClick={() =>
            dispatch(fetchAllProducts({ sortBy: "", groupValue: "" }))
          }
        >
          View All
        </button>
      </div>
    </section>
  );
};

export default FurnitureSection;
