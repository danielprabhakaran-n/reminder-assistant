import React, { useEffect, useState } from "react";
import { List, Avatar, Empty, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ReminderList = (props) => {
  const { onCreateClick } = props;
  const [alarmData, setAlarmData] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("alarmData"));
    setAlarmData(JSON.parse(localStorage.getItem("alarmData")) ?? []);
  }, []);

  return (
    <>
      {alarmData.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={alarmData}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button type="link" key="list-edit"><EditOutlined /></Button>,
                <Button type="link" key="list-delete"><DeleteOutlined /></Button>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.reminderName}
                description={<span>I will remind you every <strong>{item.alarmPeriod}</strong></span>}
              />
            </List.Item>
          )}
        />
      ) : (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>No reminder created!</span>}
        >
          <Button type="primary" onClick={() => onCreateClick()}>
            Create Now
          </Button>
        </Empty>
      )}
    </>
  );
};
export default ReminderList;
