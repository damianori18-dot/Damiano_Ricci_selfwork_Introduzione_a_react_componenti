import Items from "./Items";
export default function List({children}) {
    return (
        <ul className="d-flex justify-content-center gap-3">
            {children}
        </ul>
    );
}

List.Items = Items