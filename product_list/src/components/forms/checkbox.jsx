/**
 * @param {string} label 
 * @param {checked} bolean
 * @param {s: string=> void} onChange
 */

export function Checkbox({label, checked, onChange, id}){
    return <div className="form-check">
        <input type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={e=>onChange(e.target.checked)}
        id={id}
        />
        <label className="form-ckeck-label" htmlFor={id}>{label}</label>
    </div>
}