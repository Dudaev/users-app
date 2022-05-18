import React from "react";
import StorageDialog from "../Components/StorageDialog";

function HomePage() {
  const [open, setOpen] = React.useState(true);

  return <StorageDialog open={open} handleClose={() => setOpen(false)} />;
}

export default HomePage;
