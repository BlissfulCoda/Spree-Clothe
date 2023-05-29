// import { ProductType } from "src/products";
import { Link } from "react-router-dom";
type ProductType = {
  id: string | number;
  color: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  numReviews: number;
};

export default function Product({ product }: ProductType): JSX.Element {
  return (
    <div className="w-full h-full">
      <Link to={`/product/${product.id}`}>
        <figure>
          <img
            src={product.image}
            alt={product.name}
            className="object-cover object-top md:object-top h-48 md:h-52 w-full"
          />
          <div className="text-xs space-y-3 mt-3 space-y-2">
            <figcaption>
              <h4 className="text-gray-400 font-light text-[12px] mb-2">{product.color}</h4>
              <h5 className="text-[12px]">{product.description}</h5>
            </figcaption>
            <hr />
            <h5 className="font-regular">£{product.price}</h5>
          </div>
        </figure>
      </Link>
    </div>
  );
}
