import { types } from "mobx-state-tree";

const ProductStore = types
  .model({
    id: types.optional(types.number, 1),
    title: types.optional(types.string, "商品1"),
    complete: types.optional(types.boolean, false),
    number: types.optional(types.string, "0"),
  })
  .actions((self) => ({
    edit: (dataObj = {}) => {
      Object.getOwnPropertyNames(dataObj).forEach((i) => {
        self[i] = dataObj[i];
      });
    },
    check: (dataObj = {}) => {
      self.complete = !self.complete;
    },
  }));

export { ProductStore };
