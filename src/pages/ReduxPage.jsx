import React from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Components/SearchBar";
import UsersList from "../Components/UsersList";
import { useActions } from "../hooks/useActions";
function ReduxPage() {
  const [search, setSearch] = React.useState("");
  const { addUser, changeUser, removeUser } = useActions();
  const usersArray = useSelector((state) => state);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    setUsers(
      usersArray.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    );
  }, [usersArray, search]);

  const onUserAdd = (_, name) => {
    addUser(name);
  };

  const onUserChange = (id, name) => {
    changeUser(id, name);
  };

  const onUserRemove = (id) => {
    removeUser(id);
  };

  return (
    <>
      <SearchBar setSearch={setSearch} search={search} />
      <UsersList
        users={users}
        onUserAdd={onUserAdd}
        onUserRemove={onUserRemove}
        onUserChange={onUserChange}
      />
    </>
  );
}

export default ReduxPage;
