import { Link } from "react-router-dom";

const Productard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block w-[300px] min-w-[300px]">
      <img
        src={product.img}
        alt={product.productName}
        className="text-[##D7D7D7] border border-slate-500 w-full h-[300px] object-cover"
      />
      <p className="text-[#000000A8] text-[12px] font-medium mt-[14px]">
        {product.category}
      </p>
      <div className="flex items-center justify-between font-medium text-[14px]">
        <p className="truncate">{product.productName}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default Productard;
