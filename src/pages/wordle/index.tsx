import {
  Box,
  Container,
  Paper} from "@mui/material";

const WordlePage: React.FC = () => {

  return (
    <Container>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px",
          }}
        >
            </Box>


      </Paper>

    </Container>
  );
};

export default WordlePage;