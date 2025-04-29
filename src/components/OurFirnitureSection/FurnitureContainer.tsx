import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchResults } from "../../reduxTK/slices/productSlice";
import CardSkeleton from "../Loader/loader";
import FurnitureCards from "./FurnitureCards";
import FurnitureSortAndSearch from "./FurnitureSortListAndSearch";
import {
  fetchProducts,
  fetchAllProducts,
} from "../../reduxTK/slices/productSlice";

const FurnitureContainer = () => {
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
    <>
      <FurnitureSortAndSearch
        searchValue={searchValue}
        handleChange={handleChange}
        furnitureSearch={furnitureSearch}
      >
        Hi im children
      </FurnitureSortAndSearch>
      <div className="cardConteiner">
        {status === "loading"
          ? Array(8)
              .fill(0)
              .map((_, index) => <CardSkeleton key={index} />)
          : products.map((product, index) => (
              <FurnitureCards key={index} product={product} />
            ))}
      </div>
    </>
  );
};

export default FurnitureContainer;
