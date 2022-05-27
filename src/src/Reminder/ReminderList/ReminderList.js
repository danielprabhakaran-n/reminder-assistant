import React, { useEffect, useState } from "react";
import { List, Avatar, Empty, Button } from "antd";
import { EditOutlined, DeleteOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import emptyImage from "../../assets/images/empty.svg"

const ReminderList = (props) => {
  const navigate = useNavigate();
  const [reminderData, setReminderData] = useState([]);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("reminderData");
    setReminderData(JSON.parse(dataFromLocalStorage) ?? []);
  }, []);

  const onEditHandler = (paramItem) => {
    localStorage.setItem("editableReminderdata", JSON.stringify(paramItem));
    navigate("/edit-reminder")
  }

  const onDeleteHandler = (paramItem) => {
    const filteredReminderData = reminderData?.filter(reminderItem => reminderItem.id !== paramItem.id);
    localStorage.setItem("reminderData", JSON.stringify(filteredReminderData));
    setReminderData(filteredReminderData)
  }

  return (
    <div className="container">
      <div>
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
      {reminderData?.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={reminderData}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link" key="list-edit" onClick={() => onEditHandler(item)}>
                  <EditOutlined />
                </Button>,
                <Button type="link" key="list-delete" onClick={() => onDeleteHandler(item)}>
                  <DeleteOutlined />
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.reminderName}
                description={
                  <span>
                    I will remind you every <strong>{item.alarmPeriod}</strong>
                  </span>
                }
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty
          image={emptyImage}
          imageStyle={{
            height: 60,
          }}
          description={<span>No Reminder created!</span>}
        >
          <Button type="primary" onClick={() => navigate("/new-reminder")}>
            Create Now
          </Button>
        </Empty>
      )}
    </div>
  );
};
export default ReminderList;
