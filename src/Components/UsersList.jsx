import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuButton from "./MenuButton";
import { Box, Button, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MyDialog from "./MyDialog";

export default function UsersList({
  users,
  userHandler,
  onUserRemove,
  onUserChange,
  onUserAdd,
}) {
  const [addDialog, setAddDialog] = React.useState(false);

  return (
    <Box sx={{ width: "100%", maxWidth: 600, p: "0 10px", m: "30px auto" }}>
      <List>
        {users.map((user) => (
          <div key={user.id}>
            <ListItem
              disableGutters
              secondaryAction={
                <MenuButton
                  user={user}
                  onUserRemove={onUserRemove}
                  userHandler={userHandler}
                  onUserChange={onUserChange}
                />
              }
            >
              <ListItemText primary={user.name} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
      <Button
        onClick={() => setAddDialog(true)}
        startIcon={<AddIcon />}
        sx={{ width: "100%" }}
      >
        Добавить пользователя
      </Button>
      <MyDialog
        open={addDialog}
        userHandler={onUserAdd}
        action={"add"}
        handleClose={() => setAddDialog(false)}
      />
    </Box>
  );
}
