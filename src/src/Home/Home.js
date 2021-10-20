import React, { useState } from "react";
import { Button } from "antd";
// import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import NewReminder from "../Reminder/NewReminder/NewReminder";
import ReminderList from "../Reminder/ReminderList/ReminderList";

import "./Home.css";

const Home = () => {
  const [displayComponent, setDisplayComponent] = useState("");

  const onBtnClickHandler = (component) => {
    setDisplayComponent(component);
  };

  const onNewReminderCancelHandler = () => {
    setDisplayComponent("");
  };

  const getDisplayComponent = (component) => {
    switch (component) {
      case "new":
        return <NewReminder onCancel={onNewReminderCancelHandler} />;
      case "list":
        return <ReminderList onCreateClick={() => onBtnClickHandler("new")} />;
      default:
        return <h3>Welcome to Reminder Assistant</h3>;
    }
  };

  return (
    <div>
      {!displayComponent && <div className="ra_greet-user">Hello, User</div>}
      <div>{getDisplayComponent(displayComponent)}</div>
      {!displayComponent && (
        <div className="ra_navigation">
          <Button type="primary" onClick={() => onBtnClickHandler("new")}>
            Create New Reminder
          </Button>
          <Button type="link" onClick={() => onBtnClickHandler("list")}>
            Reminder List
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
