import { Box, Container, Grid2 as Grid, Paper } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";

import CustomPopper from "@/components/CustomPopper";
import Keyboard from "@/components/Keyboard";
import { getLetterColor } from "@/utils/getLetterColor";

const WORD = "BASIL";
const MAX_ATTEMPTS = 6;

const Wordle = () => {
  const [guesses, setGuesses] = useState<string[]>(Array(MAX_ATTEMPTS).fill(""));
  const [currentGuess, setCurrentGuess] = useState("");
  const [usedKeys, setUsedKeys] = useState<{ [key: string]: string }>({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [message, setMessage] = useState<string>("");

  const gridRef = useRef<HTMLDivElement>(null);
  const { enqueueSnackbar } = useSnackbar();

  const resetGame = () => {
    setGuesses(Array(MAX_ATTEMPTS).fill(""));
    setCurrentGuess("");
    setUsedKeys({});
  };

  const handleKeyPress = (key: string) => {
    if (key === "ENTER") {
      if (currentGuess.length !== 5) {
        setIsDisabled(true);
        setMessage("Not enough letters");
        // after 1500 ms let user type
        setTimeout(() => {
          setIsDisabled(false);
          setMessage("");
        }, 1500);
        return;
      }
      const newGuesses = [...guesses];
      const currentRowIndex = newGuesses.findIndex((g) => g === "");
      if (currentRowIndex !== -1) {
        let allIncorrect = true;
        const newUsedKeys = { ...usedKeys };
        // set is for track no duplicated and correct items
        const greenLetters = new Set<string>();

        currentGuess.split("").forEach((letter, i) => {
          if (WORD[i] === letter) {
            // correct letter in correct spot
            newUsedKeys[letter] = "#4caf50";
            greenLetters.add(letter);
            allIncorrect = false;
          } else if (WORD.includes(letter) && !greenLetters.has(letter)) {
            // correct letter in wrong spot, but not already green
            newUsedKeys[letter] = "#ffeb3b";
            allIncorrect = false;
          } else {
            // incorrect letter
            newUsedKeys[letter] = "#737071";
          }
        });

        setUsedKeys(newUsedKeys);
        if (allIncorrect) {
          setIsDisabled(true);
          setMessage("Not in word list");
        } else {
          newGuesses[currentRowIndex] = currentGuess;
          setGuesses(newGuesses);
          setCurrentGuess("");
          // win scenario
          if (newGuesses.some((guess) => guess === WORD)) {
            enqueueSnackbar("You did it !", { variant: "success" });
            resetGame();
          }
          // game over scenario
          else if (currentRowIndex === MAX_ATTEMPTS - 1) {
            enqueueSnackbar(`Game Over! The word was ${WORD}`, { variant: "error" });
            resetGame();
          }
        }
      }
    } else if (key === "BACKSPACE") {
      if (isDisabled) {
        setIsDisabled(false);
        setMessage("");
      }
      // remove the last element for backspace
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (!isDisabled && /^[A-Z]$/.test(key) && currentGuess.length < 5) {
      // continue typing till 5 letters
      setCurrentGuess((prev) => prev + key);
    }
  };

  // this useEffect is for reading from keyboard ( just letters )
  useEffect(() => {
    const handleKeyboardInput = (event: KeyboardEvent) => {
      const key = event.key.toUpperCase();
      if (/^[A-Z]$/.test(key) || key === "BACKSPACE" || key === "ENTER") {
        handleKeyPress(key);
      }
    };
    window.addEventListener("keydown", handleKeyboardInput);
    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [currentGuess, isDisabled, guesses, usedKeys]);

  return (
    <Container sx={{ mt: 4, textAlign: "center", position: "relative" }}>
      <Box ref={gridRef}>
        {guesses.map((guess, i) => (
          <Grid container spacing={1} key={i} justifyContent="center">
            {[
              ...(i === guesses.findIndex((g) => g === "")
                ? currentGuess.padEnd(5)
                : guess.padEnd(5)),
            ].map((letter, j) => (
              <Grid key={j}>
                <Paper
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: getLetterColor(letter, j, WORD, guess !== ""),
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {letter}
                </Paper>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>

      <Keyboard onKeyPress={handleKeyPress} usedKeys={usedKeys} isDisabled={isDisabled} />

      {message !== "" && (
        <CustomPopper isDisabled={isDisabled} message={message} gridRef={gridRef} />
      )}
    </Container>
  );
};

export default Wordle;
