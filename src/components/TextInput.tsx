export default function TextInput({name, description, value, onChange}: {name: string, description: string,value: string, onChange: React.ChangeEventHandler<HTMLInputElement>}) {
    const id = name.toLowerCase().replaceAll(" ", "-")
    
    return (
        <div style={{marginBottom: "1rem"}}>
            <label style={{display: "block"}} htmlFor={id}>{name}</label>
            <small style={{display: "block", marginBottom: "0.5rem"}}>{description}</small>
            <input  style={{width: "100%", padding: "0.375rem 0.75rem", fontSize: "1rem", lineHeight: 1.5, borderRadius: "0.25rem", border: "1px solid #ced4da" }} name={id} id={id} type="text" value={value} onChange={onChange}/>
        </div>
    )
}