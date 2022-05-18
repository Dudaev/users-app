import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";

function MyDialog({
  open,
  handleClose,
  action,
  user = { id: "", name: "" },
  userHandler,
}) {
  const [name, setName] = useState(user.name);
  const [error, setError] = useState(false);
  const onAddOrChangeUser = () => {
    if (60 < name.length || name.length < 1) {
      setError(true);
    } else {
      setName(user.name);
      userHandler(user.id, name);
      handleClose();
    }
  };

  const cancelAddUser = () => {
    setName(user.name);
    handleClose();
  };

  const onTextFieldChange = (value) => {
    setName(value);
    setError(60 < value.length || value.length < 1);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {action === "add" ? "Введите имя" : "Редактирование"} пользователя
        </DialogTitle>
        <DialogContent>
          <TextField
            error={error}
            helperText="Длина строки должна быть в диапазоне от 1 до 60"
            autoFocus
            margin="dense"
            id="name"
            label="Имя пользователя"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={(event) => onTextFieldChange(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelAddUser}>Отмена</Button>
          <Button
            onClick={onAddOrChangeUser}
            variant={error ? "disabled" : "outlined"}
          >
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default MyDialog;
