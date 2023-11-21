import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import PopularProducts from "@/components/PopularProducts";
import Qualities from "@/components/Qualities";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <PopularProducts />
      <Qualities />
    </div>
  );
}
