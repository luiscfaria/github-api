import React, { useEffect, useState } from "react";


function App() {
  const [userData, setUserData] = useState({login: ""});

  useEffect(() => {
    const url = "https://api.github.com/users/luiscfaria";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUserData(json);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <>
        <h1>{userData.login}</h1>
      </>
    </div>
  );
}

export default App;
