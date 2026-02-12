import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

interface PasswordInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function PasswordInput({ value, onChange, placeholder }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          paddingRight: '2.5rem', 
          width: '100%',
          boxSizing: 'border-box'
        }}
      />
      <div
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%)',
          cursor: 'pointer',
          color: '#666',
          fontSize: '1.2rem',
          userSelect: 'none',
        }}
        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setShowPassword(!showPassword)
          }
        }}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
  )
}
