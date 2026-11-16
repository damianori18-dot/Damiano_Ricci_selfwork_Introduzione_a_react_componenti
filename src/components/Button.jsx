export default function Button({onClick, children, type = 'button'}) {
    return (
        <button type={type} className="btn bg-s" onClick={onClick} data-bs-theme='dark'>{children}</button>
    )
}