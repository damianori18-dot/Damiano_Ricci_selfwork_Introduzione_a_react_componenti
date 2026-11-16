export default function Input({onChange, value, id}) {
    return (
        <input
            className="input-style"
            id={id}
            type="text"
            value={value}
            onChange={onChange}
        />
    )
}