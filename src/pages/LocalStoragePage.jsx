import React from "react";
import SearchBar from "../Components/SearchBar";
import UsersList from "../Components/UsersList";

function LocalStoragePage() {
  const [users, setUsers] = React.useState([]);
  const [isUpdateData, setUpdateData] = React.useState(false);
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    let keys = [];
    let users = [];
    for (let index = 0; index < localStorage.length; index++) {
      keys.push(localStorage.key(index));
    }

    keys.sort();

    for (let index = 0; index < keys.length; index++) {
      users.push({
        id: keys[index],
        name: localStorage.getItem(keys[index]),
      });
    }
    setUsers(
      users.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    );
    setUpdateData(false);
  }, [isUpdateData, search]);

  const onUserAdd = (_, name) => {
    localStorage.setItem(Date.now(), name);
    setUpdateData(true);
  };

  const onUserChange = (id, name) => {
    localStorage.setItem(id, name);
    setUpdateData(true);
  };

  const onUserRemove = (id) => {
    localStorage.removeItem(id);
    setUpdateData(true);
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

export default LocalStoragePage;
