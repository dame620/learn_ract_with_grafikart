/**
 * @param {string} placeholder
 * @param {string} value 
 * @param {(s: string)=>void} onChange
 */
export function Input({value, placeholder, onChange}){
    return <div>
        <input type="text"
        className="form-control"
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
        />
    </div>
}