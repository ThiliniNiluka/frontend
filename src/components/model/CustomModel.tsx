import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { OutlinedInput } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  Height: 802,
  bgcolor: "background.paper",
  border: "2px ",
  // boxShadow: 24,
  p: 4,
};

export default function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="" variant="contained">
        Add Product
      </Button>
      <Modal
        // className="w-[500px] h-[802px]"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="mt-2 space-y-6">
            <span className="text-gray-500 text-[24px]">New Product</span>
            <div className="flex justify-between">
              <label className="mt-[12px] text-gray-300">
                Drag image here or Browse image
              </label>
              <OutlinedInput
                placeholder="Enter product name"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="mt-[12px] text-gray-300">Product Name</label>
              <OutlinedInput
                placeholder="Enter product name"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="mt-[12px] text-gray-300">Product ID</label>
              <OutlinedInput
                placeholder="Enter product ID"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="pt-[12px] text-gray-300">Category</label>
              <OutlinedInput
                placeholder="Select product category"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="pt-[12px] text-gray-300">Buying Price</label>
              <OutlinedInput
                placeholder="Enter buying price"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="pt-[12px] text-gray-300">Quantity</label>
              <OutlinedInput
                placeholder="Enter product quantity"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="pt-[12px] text-gray-300">Unit</label>
              <OutlinedInput
                placeholder="Enter product unit"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="flex justify-between">
              <label className="pt-[12px] text-gray-300">Expiry Date</label>
              <OutlinedInput
                placeholder="Enter expiry date"
                id="outlined-adornment-weight"
                className="w-[273px] h-[44px]"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </div>
            <div className="pt-[20px] space-x-4 ml-[220px]">
              <Button className="w-[100px] h-[48px]">
                <p className="text-[14px] text-gray-300">Discard</p>
              </Button>
              <Button
                variant="contained"
                className="w-[100px] h-[48px] bg-blue-600"
              >
                <p className="text-[14px]">Submit</p>
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
