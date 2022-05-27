import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
// import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
// import NewReminder from "../Reminder/NewReminder/NewReminder";
// import ReminderList from "../Reminder/ReminderList/ReminderList";

import "./Home.css";

const Home = () => {
  // const [displayComponent, setDisplayComponent] = useState("");
  let navigate = useNavigate();

  const onCreateBtnClickHandler = (component) => {
    navigate("new-reminder");
  };

  const onListBtnClickHandler = (component) => {
    navigate("reminder-list");
  };

  // const getDisplayComponent = (component) => {
  //   switch (component) {
  //     case "new":
  //       return <NewReminder onCancel={onNewReminderCancelHandler} />;
  //     case "list":
  //       return <ReminderList onCreateClick={() => onBtnClickHandler("new")} />;
  //     default:
  //       return <h3>Welcome to Reminder Assistant</h3>;
  //   }
  // };

  return (
    <div className="container">
      <div className="ra_greet-user">Hello, User</div>
      <div>
        <h3>Welcome to Reminder Assistant</h3>
      </div>
      <div className="ra_navigation">
        <Button type="primary" onClick={() => onCreateBtnClickHandler("new")}>
          Create New Reminder
        </Button>
        <Button type="link" onClick={() => onListBtnClickHandler("list")}>
          Reminder List
        </Button>
      </div>
    </div>
  );
};

export default Home;
