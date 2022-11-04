
interface KeyboardProps {
    guessLetter: (letter: string) => void;
    guessedLetters: string[];
}

function Keyboard({ guessLetter, guessedLetters }: KeyboardProps) {

    const letters = Array.from({ length: 26 }, (_, index) => String.fromCharCode(index + 97));


    return (
        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", width: "600px", justifyContent: "center" }}>
            {letters.map(letter =>
                <button
                    key={letter}
                    style={{ 
                        width: "50px", 
                        height: "50px", 
                        fontSize: "2rem",
                        cursor: `${guessedLetters.includes(letter) ? "not-allowed" : "pointer"}`,
                    }}
                    onClick={() => guessLetter(letter)}
                    disabled={guessedLetters.includes(letter)}
                >
                {letter.toUpperCase()}
                </button>
            )}
        </div>
    )
}


export default Keyboard