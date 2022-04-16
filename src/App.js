import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const fetching = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/users')
      if (result.status !== 200) {
        setError(result.statusText);
        console.log(error);
        setLoading(false);
        return;
      } else {
        const data = await result.json();
        setUsers(data);
        setLoading(false);
      }
    }
      fetching();
  }, [error]);

  
  return (
    <UserList list={users} load={loading} />     
  )
}
export default App;