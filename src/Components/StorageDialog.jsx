import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function StorageDialog({ open, handleClose }) {
  const location = useLocation();

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Выберите репозиторий</DialogTitle>
        <DialogContent>
          <div>
            <Button
              variant={
                location.pathname.slice(1) === "redux" ? "disabled" : "outlined"
              }
              size="large"
              fullWidth
              sx={{ mb: "10px" }}
              component={Link}
              to="/redux"
            >
              Redux
            </Button>
          </div>
          <div>
            <Button
              variant={
                location.pathname.slice(1) === "localStorage"
                  ? "disabled"
                  : "outlined"
              }
              size="large"
              fullWidth
              component={Link}
              to="/localStorage"
            >
              LocalStorage
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default StorageDialog;
