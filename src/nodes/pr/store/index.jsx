import { types } from "mobx-state-tree";
import { BrStore } from "./brStore";
import { ProductStore } from "./productStore";

//定义根 model
const RootStore = types
  // 数据
  .model({
    BR: types.maybeNull(BrStore, null),
    products: types.optional(types.array(ProductStore), []),
  })
  // 计算属性 computed
  .views((self) => ({
    get total() {
      return self.products.reduce((prev, cur) => +prev + +cur.number, 0);
    },
    get checkdeList() {
      return self.products.reduce((prev, cur) => (cur.complete ? [...prev, cur.id] : prev), []);
    },
  }))
  // 更新行为
  .actions((self) => ({
    initialBr: (data) => {
      console.log("init Br", data);
      self.BR = BrStore.create(data);
    },
    initialProducts: (data) => {
      console.log("init Products", data);
      self.products = data.map((i) => ProductStore.create(i));
    },
  }));

const prStore = RootStore.create({
  BR: null,
  products: [],
});
export default prStore;
