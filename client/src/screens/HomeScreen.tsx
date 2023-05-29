import Products from "../products";
import Product from "@components/Product";

export default function HomeScreen(): JSX.Element {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-10 mx-4">
      {Products.map((product) => (
        <div key={product.id} className="">
          <Product product={product} />
        </div>
      ))}
    </section>
  );
}
