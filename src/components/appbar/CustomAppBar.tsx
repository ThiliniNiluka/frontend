import Notify from "../../assets/icons/notification.svg";
import Message from "../../assets/icons/message.svg";
import { Box, IconButton, Toolbar, Typography } from "@mui/material";

interface CustomAppBarProps {
  height: number;
}
export default function CustomAppBar({ height }: CustomAppBarProps) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          <div className="flex flex-col">
            <span className="mt-8">Dashboard</span>
            <span className="mt-8 font-bold">Welcome back, Alex</span>
          </div>
        </Typography>
        <div className="flex gap-6">
          <img src={Notify} alt="" className="w-[30px] h-[30px]" />
          <img src={Message} alt="" className="w-[30px] h-[30px]" />
        </div>
      </Toolbar>
    </Box>
  );
}
