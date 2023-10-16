import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetUsers from "./GetUsers";
import GetMessages from "./GetMessages";

function RoutesList() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/get-users" element={<GetUsers />} />
        <Route path="/get-messages" element={<GetMessages />} />
        <Route path="/add-user" element={<GetUsers />} />
        <Route path="/add-message" element={<GetUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesList;
