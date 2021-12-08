import React from "react";
import { Form, Input, Button, Select } from "antd";

import "./NewReminder.css";

const { Option } = Select;

const NewReminder = (props) => {
  const { onCancel } = props;

  const onSubmitForm = (values) => {
    console.log('Success:', values);
    const newData = []; 
    newData.push(values);
    const existData = JSON.parse(localStorage.getItem("alarmData")) ?? []
    const alarmData = [...newData, ...existData];
    
    console.log(alarmData)
    localStorage.setItem("alarmData", JSON.stringify(alarmData));
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        onFinish={onSubmitForm}
      >
        <Form.Item name="userName">
          <Input placeholder="What's your name?" />
        </Form.Item>
        <Form.Item name="alarmPeriod">
          <Select placeholder="When you want me to remind?">
            <Option value="10 min"> Every 10 Min</Option>
            <Option value="20 min">Every 20 Min</Option>
            <Option value="30 min">Every 30 Min</Option>
            <Option value="1 hr">Every 1 hour</Option>
          </Select>
        </Form.Item>
        <Form.Item name="reminderName">
          <Input placeholder="What's the reminder?" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Save
          </Button>
          <Button
            htmlType="button"
            style={{ margin: "0 10px" }}
            onClick={() => onCancel()}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewReminder;
