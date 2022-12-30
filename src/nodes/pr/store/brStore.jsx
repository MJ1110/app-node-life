import { types } from "mobx-state-tree";

const BrStore = types.model({
  brCode: types.optional(types.string, "BR123"),
});

export { BrStore };
