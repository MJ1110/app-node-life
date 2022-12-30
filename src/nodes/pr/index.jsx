import React, { useEffect } from "react";
import { useObserver, useLocalStore } from "mobx-react";
import prStore from "./store";
import { ProductList, BR, Footer } from "./components";
import "./index.css";

export default function PR() {
  const store = useLocalStore(() => prStore);
  console.log("render: PR组件");

  useEffect(() => {
    const data = [];
    for (var i = 0; i < 2; i++) {
      data.push({
        id: i,
        title: `商品${i}`,
        complete: false,
        number: `${i}`,
      });
    }
    store.initialProducts(data);
  }, []);

  return useObserver(() => {
    return (
      <div>
        <BR />
        <Footer />
        <ProductList />
      </div>
    );
  })
 
};
