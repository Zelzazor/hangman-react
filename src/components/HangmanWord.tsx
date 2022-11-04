
interface HangmanWordProps {
    word: string;
    guessedLetters: string[];
    isLost: boolean;
}


function HangmanWord({ word, guessedLetters, isLost }: HangmanWordProps) {
    return (
        <div style={{ fontSize: "5rem", textTransform: "uppercase", display: "flex", gap: "1rem" }}>
            {word.split("").map((letter, index) => {
                return <span key={index} style={{ width: "80px", height: "80px", textAlign: "center", borderBottom: "3px solid black" }}>{guessedLetters.includes(letter) || isLost ? (<span style={{color: isLost && !guessedLetters.includes(letter)  ? "red" : "black"}}>{letter}</span>) : ""}</span>
            })}
        </div>
    )
}

export default HangmanWord