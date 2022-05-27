import { MemoryRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import NewReminder from "./Reminder/NewReminder/NewReminder";
import EditReminder from "./Reminder/EditReminder/EditReminder";
import ReminderList from "./Reminder/ReminderList/ReminderList";
import "./App.css";


function App() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/reminder-list" exact element={<ReminderList />} />
        <Route path="/new-reminder" exact element={<NewReminder />} />
        <Route path="/edit-reminder" exact element={<EditReminder />} />
        <Route render={() => <h1>404: not found</h1>} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
