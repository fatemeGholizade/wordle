import { Backspace as BackspaceIcon } from "@mui/icons-material";
import { Box, Grid2 as Grid, IconButton } from "@mui/material";

interface IKeyboardProps {
  isDisabled: boolean;
  onKeyPress: (key: string) => void;
  usedKeys: { [key: string]: string };
}

const keys = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
];

const Keyboard: React.FC<IKeyboardProps> = ({ isDisabled, onKeyPress, usedKeys }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 3 }}>
      {keys.map((row, rowIndex) => (
        <Grid
          key={rowIndex}
          container
          spacing={1}
          justifyContent="center"
          sx={{
            // style in a triangle way
            mb: rowIndex < 2 ? 1 : 0,
            pl: `${10 - row.length}%`,
          }}
        >
          {row.map((key) => (
            <Grid key={key}>
              {key === "ENTER" ? (
                <IconButton
                  onClick={() => onKeyPress(key)}
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#3a3a3a",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                  }}
                >
                  ENTER
                </IconButton>
              ) : key === "BACKSPACE" ? (
                <IconButton
                  onClick={() => onKeyPress(key)}
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#3a3a3a",
                  }}
                  disabled={false}
                >
                  <BackspaceIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => onKeyPress(key)}
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: usedKeys[key] || "#3a3a3a",
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                  disabled={isDisabled}
                >
                  {key}
                </IconButton>
              )}
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default Keyboard;
