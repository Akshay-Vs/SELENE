import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Heading from "./Heading";

import "./style.scss";

const PopularProducts = () => {
  return (
    <div className="popular-products">
      <Heading />
      <div className="flex justify-center">
        <ProductCard
          name="Selene Palm ch-2"
          price={299}
          image="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/h/l/hl127-10005_5_.webp"
        />
        <ProductCard
          name="Selene Glass Cocoon 2A"
          price={299}
          image="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/4f9684b790a78d2ad48602ec5021b7a8/h/l/hl37-10006_2_.webp"
        />
        <ProductCard
          name="Slelene Double shoot pendent"
          price={299}
          image="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/h/l/hl36-10005_4_.webp"
        />
        <ProductCard
          name="Slelene Tripple metal pendent 3B"
          price={299}
          image="https://www.whiteteak.com/media/fishpig/webp/catalog/product/cache/a64c8e9cfc5e68c438191ffc2c6ad677/h/l/hl81-10001_5_.webp"
        />
      </div>
    </div>
  );
};

export default PopularProducts;
