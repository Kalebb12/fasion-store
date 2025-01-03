import { Link } from "react-router-dom";
import Fullpage from "../../components/Fullpage";
import Productard from "../../components/productCard";
import Spinner from "../../components/Spinner";
import { useCart } from "./useCart";

const Cart = () => {
  const { data, isPending } = useCart();
  if (isPending)
    return (
      <Fullpage>
        <Spinner />
      </Fullpage>
    );
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.map((product) => {
          return <Productard key={product.id} product={product.productId} />;
        })}
      </div>
      <Fullpage>
        {data.length === 0 && (
          <div>
            <p className="font-bold text-[25px] text-center md:text-[50px]">No products in cart</p>
            <Link to="/" className="block font-semibold text-center text-blue-500 underline"> Go to home</Link>
          </div>
        )}
      </Fullpage>
    </div>
  );
};

export default Cart;
