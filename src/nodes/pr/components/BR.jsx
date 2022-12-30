import React from "react";
import { useLocalStore, observer } from "mobx-react";
import { Input } from "@block/plug";
import prStore from "../store";

export default observer(function BR() {
  const { BR } = useLocalStore(() => prStore);
  console.log("render: BR");
  const handleChange = (e) => prStore.initialBr({ brCode: e.target.value });

  return  (
    <div>
      <Input value={BR?.brCode} onChange={handleChange} />
    </div>
  );
});
