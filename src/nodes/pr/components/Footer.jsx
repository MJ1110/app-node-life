import React from "react";
import { observer, useLocalStore } from "mobx-react";
import prStore from "../store";

export default observer(function Footer() {
  const store = useLocalStore(() => prStore);
  console.log("render: Footer");

  return (
    <>
      <div style={{ textAlign: "right", paddingRight: "20px" }}>total: {store.total}</div>
      已选中的行：{ store.checkdeList?.join(',')}
    </>
  );
});
