import React from "react";
import HomePage from "./pages/homepage/homepage";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <>
        <UserProvider>
          <HomePage />
        </UserProvider>
      </>
    </div>
  );
}

export default App;
