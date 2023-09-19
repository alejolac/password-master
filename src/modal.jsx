import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import { AddAPhotoSharp } from "@mui/icons-material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  backgroundColor: "white",
  color: "black",
};

export default function BasicModal({ password, modalOpen, modalClose, add }) {
  const handleClose = () => modalClose();
  const [labelModal, setLabelModal] = useState("")

  const handleLabel = (e) => {
    setLabelModal(e.target.value);
  };

  const newPassword = () => add(labelModal)

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex-modal-title">
            <DownloadDoneIcon />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Nueva Contraseña
            </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Asignale un nombre a tu nueva contraseña
          </Typography>
          <TextField
            required
            fullWidth
            label={"Etiqueta"}
            id="margin-normal"
            margin="normal"
            onChange={handleLabel}
            value={labelModal}
          />
          <TextField
            fullWidth
            label={"Contraseña"}
            id="margin-none"
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
            value={password}
          />
          <Button onClick={newPassword} variant="contained">Agregar</Button>
        </Box>
      </Modal>
    </div>
  );
}
