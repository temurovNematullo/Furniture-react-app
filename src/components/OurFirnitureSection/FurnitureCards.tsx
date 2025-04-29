import { Product } from "../../types/Product";

interface FurtinureCardsProps {
  product: Product;
}

const FurnitureCards: React.FC<FurtinureCardsProps> = ({ product }) => {
  return (
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
  );
};

export default FurnitureCards;
