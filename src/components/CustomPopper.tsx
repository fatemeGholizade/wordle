import { Box, Fade, Popper } from "@mui/material";

interface ICustomPopperProps {
  isDisabled: boolean;
  message: string;
  gridRef: React.RefObject<HTMLElement>;
  timeout?: number;
  placement?: "top" | "bottom" | "left" | "right";
}

const CustomPopper: React.FC<ICustomPopperProps> = ({
  isDisabled,
  message,
  gridRef,
  timeout = 350,
  placement = "top",
}) => {
  return (
    <Popper open={isDisabled} anchorEl={gridRef.current} transition placement={placement}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={timeout}>
          <Box
            sx={{
              padding: 1,
              backgroundColor: "#ffffff",
              color: "#000000",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            {message}
          </Box>
        </Fade>
      )}
    </Popper>
  );
};

export default CustomPopper;
