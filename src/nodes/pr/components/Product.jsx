import React, { useRef } from "react";
import { observer, } from "mobx-react";
import { Form, Input, Checkbox } from "@block/plug";

export default observer(function Product({ data }) {
  const formRef = useRef(null);

  const handleFormChange = async (key, v, formData) => {
    // 选中状态
    if (key === "complete") {
      data.check();
    }
    // 修改数量
    if (key === "number") {
      data.edit(formData);
    }
  };
  console.log("render: Product",data.id);

  return (
    <Form lableWidth="20px" ref={formRef} defaultFieldsValue={data} onFieldValueChange={handleFormChange}>
      <Form.Item formItemKey="complete" span={2}>
        <Checkbox toFormItem />
      </Form.Item>
      <Form.Item label="名称：" formItemKey="title" span={4}>
        {data.title}
      </Form.Item>
      <Form.Item label="数量：" formItemKey="number" span={4}>
        <Input toFormItem placeholder="请输入数量" />
      </Form.Item>
    </Form>
  );
});
