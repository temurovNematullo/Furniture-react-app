import search from "../../assets/img/searchButton.svg";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  fetchProducts,
  fetchAllProducts,
} from "../../reduxTK/slices/productSlice";

const FurnitureSection: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);
  const { status } = useAppSelector((state) => state.products);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  const dispatch = useAppDispatch();
  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useMemo(() => {
    if (category === "all") {
      dispatch(fetchAllProducts({ sortBy: "", groupValue: "all" }));
    } else {
      dispatch(fetchAllProducts({ sortBy: "group", groupValue: category }));
    }
  }, [category]);

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
            placeholder="Search a furniture"
            className="SortList__container-input"
          />
          <button className="SortList__container-button" title="Search">
            <img src={search} alt="" className="searchIcon" />
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
        {products.map((product) => (
          <div className="cardConteiner-cardProduct">
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
