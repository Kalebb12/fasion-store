import { useQuery } from "@tanstack/react-query";
import Productard from "../../components/productCard";
import { getProducts } from "../../services/apiProducts";
import Slider from "../../components/slider"
const HomeContent = () => {
  const {
    isPending,
    data: {products ,count} = {},
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => getProducts(),
  });
  return (
    <main className="flex flex-col px-5">
      <div className="flex items-center gap-2">
        <h1>New This week</h1>
        <sup className="font-extrabold text-[20px]">({count})</sup>
      </div>

      <Slider pending={isPending }>
          {products &&
            products.map((product) => {
              return <Productard product={product} key={product.id} />;
            })}
      </Slider>
    </main>
  );
};

export default HomeContent;
