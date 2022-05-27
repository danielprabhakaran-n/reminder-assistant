import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";

import "./EditReminder.css";

const { Option } = Select;

const EditReminder = (props) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [editableData, setEditableData] = useState({});

  const onSubmitForm = (values) => {
    values.id = editableData?.id;
    const existData = JSON.parse(localStorage.getItem("reminderData")) ?? [];
    const foundIndex = existData?.findIndex((item) => item?.id == values?.id);
    console.log(existData, foundIndex, values?.id);
    existData[foundIndex] = values;
    const reminderData = existData;
    localStorage.setItem("editableReminderdata", JSON.stringify({}));
    localStorage.setItem("reminderData", JSON.stringify(reminderData));
    navigate("/reminder-list");
  };

  const onNewReminderCancelHandler = () => {
    localStorage.setItem("editableReminderdata", JSON.stringify({}));
    form.resetFields();
    navigate("/");
  };

  useEffect(() => {
    const editableReminderData =
      JSON.parse(localStorage.getItem("editableReminderdata")) ?? {};
    if (editableReminderData) {
      setEditableData(editableReminderData);
      form.setFieldsValue({
        userName: editableReminderData.userName,
        reminderPeriod: editableReminderData.reminderPeriod,
        reminderName: editableReminderData.reminderName,
      });
    }
  }, []);

  return (
    <div className="container">
      <Form
        form={form}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        // onValuesChange={onFormLayoutChange}
        onFinish={onSubmitForm}
        initialValues={{
          userName: editableData.userName,
          reminderPeriod: editableData.reminderPeriod,
          reminderName: editableData.reminderName,
        }}
      >
        <Form.Item name="userName">
          <Input placeholder="What's your name?" />
        </Form.Item>
        <Form.Item name="reminderPeriod">
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
            onClick={() => onNewReminderCancelHandler()}
          >
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditReminder;
