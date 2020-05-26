import React from 'react';
import { Button, Form, Input } from 'antd';


const BaseFilterForm = (props) => {


  return (
    <Form form={form} onValuesChange={debounceInput} initialValues={filters} layout="inline">
      <Form.Item name="baseSearchParam1">
        <Input placeholder="baseSearchParam1" />
      </Form.Item>

      <Form.Item name="baseSearchParam2">
        <Input placeholder="baseSearchParam2" />
      </Form.Item>

      <Form.Item>
        <Button onClick={reset}>Reset</Button>
      </Form.Item>
    </Form>
  )
}

export default BaseFilterForm;
