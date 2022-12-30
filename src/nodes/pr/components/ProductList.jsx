import React from "react";
import Product from "./Product";
import { observer, useLocalStore } from "mobx-react";
import { Table } from "@block/plug";
import prStore from "../store";

export default observer(function ProductList() {
  const { products } = useLocalStore(() => prStore);
  console.log("render: ProductList");
  return (
    <Table data={products} rowKey="id">
      <Table.Column
        dataKey="id"
        render={(v, row) => {
          return <Product data={row} key={row.id} />;
        }}
      >
        商品
      </Table.Column>
    </Table>
  );
});
