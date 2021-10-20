import React from "react";
import { Empty, Button } from "antd";

const ReminderList = (props) => {
  const {onCreateClick} = props;
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 60,
      }}
      description={
        <span>
          No reminder created!
        </span>
      }
    >
      <Button type="primary" onClick={()=>onCreateClick()}>Create Now</Button>
    </Empty>
  );
}
export default ReminderList;
