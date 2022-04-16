import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data);
        setLoading(false);
      }
    )
      .catch(err => {
        setError(err);
        setLoading(false);
      }
    );
  }, [error]);

  
  return (
    <UserList list={users} load={loading} />     
  )
}
export default App;