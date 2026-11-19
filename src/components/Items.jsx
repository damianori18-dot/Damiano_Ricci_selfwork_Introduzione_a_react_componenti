export default function Items ({children, id}) {
    return (
        <li className="list-group-item" key={id}>
            {children}
        </li>
    )
}