export default function FloatingActionButton({onClick}: {onClick: React.MouseEventHandler<HTMLButtonElement>}) {

    return (
        <button style={{position: "fixed", bottom: 0, right: 0, margin: "50px", zIndex: 99999, background: "blue", fontSize: "1rem", borderRadius: "5px", border: "none", padding: "15px"}} onClick={onClick}>
            Copy markdown to Clipboard
        </button>
    )
}