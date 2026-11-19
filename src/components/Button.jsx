export default function Button({onClick, children, bg}) {
    return (
        <button type="submit" className={"btn " + bg} onClick={onClick} data-bs-theme='dark'>{children}</button>
    )
}