import { useParams } from "react-router-dom";
import { getProductById } from "../services/apiProducts";
import {  useQuery } from "@tanstack/react-query";
import { useAddToCart } from "../features/cart/useAddToCart";
import Fullpage from "../components/Fullpage";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  
  const {mutate,isPending:addPending ,id:userId} = useAddToCart(id)
  const {
    data: {productName,price,img,description,category,color,size,stock} = {},
    isPending,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => getProductById(id),
  })

  
  
  
  if (isPending) return <Fullpage><Spinner/></Fullpage>;

  return (
    <div className="flex items-center justify-center gap-20 py-10">
      <img
        src={img}
        alt={productName}
        className="w-[360px] h-[400px] object-cover"
      />

      <div className="border border-[#D9D9D9] flex flex-col items-start w-fit p-5 gap-5 max-w-[300px]">
        <div>
          <h2 className="text-sm font-medium">{productName}</h2>
          <p className="text-sm font-medium">${price}</p>
          <span className="text-[#0000008C] text-[12px] font-medium">
            {category}
          </span>
        </div>

        <h2 className="text-[12px] font-medium">
          {description}
        </h2>
        <div>
          <p>Color</p>
          <select name="color" id="" className="w-[100px] border border-black">
            <option value="red">red</option>
          </select>
        </div>

        <div>
          <p>Size</p>
          <select name="size" id="" className="w-[100px] border border-black">
            <option value="Sm">Sm</option>
          </select>
        </div>

        <button  disabled={isPending} onClick={mutate} className="w-full bg-[#d9d9d9] px-4 py-2 font-medium">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
