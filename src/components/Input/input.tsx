import './Input.css'

interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (val: string) => void
}

export function Input({ type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="neu-input"
    />
  )
}
