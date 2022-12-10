import {useContext} from "react";
import Card from "../../components/card/card.component";
import {ProductsContext} from "../../contexts/products.context";
import "./shop.styles.scss";

const Shop = () => {
  const {products} = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
