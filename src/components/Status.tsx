
interface StatusProps {
    numberOfWrongGuesses: number;
    isWon: boolean;
    isLost: boolean;
}


function Status({ numberOfWrongGuesses, isWon, isLost }: StatusProps) {

    return (
        <>
            <div style={{ fontSize: "5rem", marginTop: "2rem" }}>{numberOfWrongGuesses}/6</div>
            {isLost && <div style={{ fontSize: "5rem", marginTop: "2rem" }}>You lost!</div>}
            {isWon && <div style={{ fontSize: "5rem", marginTop: "2rem" }}>You won!</div>}
        </>

    );
}

export default Status