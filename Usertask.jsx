import { useState, useEffect, useCallback, useMemo } from "react";

function UserTask() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${search}`
      );

      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    fetchUsers();

    return () => {
      console.log("Cleanup running");
    };
  }, [fetchUsers]);

  const totalUsers = useMemo(() => {
    return users.length;
  }, [users]);

  return (
    <div>
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchUsers}>Refresh</button>

      <h3>Total Users: {totalUsers}</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTask;