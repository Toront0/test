import CategoryIcons from "@/components/Home/CategoryIcons";
import MostPopular from "@/components/Home/MostPopular";
import SearchInput from "@/components/Home/SearchInput";
import { useProducts } from "@/store/store";

export type Product = {
  id: number;
  created_at: Date;
  title: string;
  price: number;
  brand: string;
  category: string;
  color: string[];
  description: string;
  imgs: string[];
  size: string[];
};

const getData = async () => {
  const res = await fetch(`/api/products`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();

  return data;
};

export default async function Home() {
  const data = (await getData()) as Product[];

  useProducts.setState({ products: data });

  // const data = await res.json();

  return (
    <div className="xs:grid-cols-2 sm:grid-cols-fluid gap-y-8 gap-x-4  max-w-[2000px] mx-auto h-[calc(100%-48px)] relative bg-white dark:bg-body-dark px-4 overflow-x-hidden">
      <CategoryIcons />
      <SearchInput />
      <MostPopular />
    </div>
  );
}
