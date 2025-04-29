import { forwardRef } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchAllProducts } from "../../reduxTK/slices/productSlice";
import FurnitureContainer from "./FurnitureContainer";

interface FurniturePropsType {
  children?: React.ReactNode;
}

const FurnitureSection = forwardRef<HTMLDivElement, FurniturePropsType>(
  (props, ref) => {
    const dispatch = useAppDispatch();

    return (
      <section id="furniture" className="Furniture container ">
        <div ref={ref} className="firnitureText_Box">
          <h2>Our Furniture</h2>
          <span className="furnitureTxt">It is a long established fact t</span>
          <span className="furnitureTxt">
            {" "}
            hat a reader will be distracted by the service.
          </span>
        </div>
        <FurnitureContainer />
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
  }
);

export default FurnitureSection;
