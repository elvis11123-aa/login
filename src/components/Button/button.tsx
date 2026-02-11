import './button.css'

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export function Button({ label, onClick, type = 'button', disabled = false }: ButtonProps) {
  return (
    <button className="btn-primary" type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}