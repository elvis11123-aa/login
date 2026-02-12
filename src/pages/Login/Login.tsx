import { useState } from 'react'
import logo from '../../components/logo-robotic.png'
import { NeuCard } from '../../components/NeuCard/NeuCard'
import { InfoPanel } from '../../components/InfoPanel/InfoPanel'
import { Input } from '../../components/Input/input'
import { Button } from '../../components/Button/button'
import { SupportDialog } from '../../components/SupportDialog/SupportDialog'
import { PasswordInput } from '../../components/Password/PasswordInput'
import './Login.css'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password)
  }

  return (
    <>
    <div className='grid-container'>
      {/* Panel izquierdo */}
      <div className='grid-item'>
          <InfoPanel>
        <center><img src={logo} alt="Robotic Minds Logo" style={{ width: '180px' }} /></center>
        <ul className="info-list">
          <li className="bullet-yellow">
            Sistema de Gestion de Operaciones y Recursos.
          </li>
          <li className="bullet-blue">
            Acceso a Suites Perzonalizadas por Rol.
          </li>
          <li className="bullet-red">
            Plataforma de Control Centralizado.
          </li>
          <li className="bullet-green">
            Portal de Servicios Internos.
          </li>
        </ul>
        <p style={{ fontSize: '11px', color: '#888', textAlign: 'right', marginTop: 'auto' }}>
          Copyright © Robotic Minds Industries
        </p>
        </InfoPanel>  
      </div>
      
      {/* Panel derecho */}
      <div className='grid-item'>
      <NeuCard>
      <div className="login-form">
        <h1 className="login-form__title">Iniciar Sesión</h1>
        <p className="login-form__subtitle">Ingresa tus credenciales para continuar.</p>

        <div className="login-form__fields">
          <div className="login-form__field">
            <label className="login-form__label">Email</label>
            <Input type="email" placeholder="jane@framer.com" value={email} onChange={setEmail} />
          </div>
          <div className="login-form__field">
            <label className="login-form__label">Contraseña</label>
            <PasswordInput
              value={password}
              onChange={setPassword}
                placeholder="••••••••"
            />
          </div>
        </div>

        <Button label="ENTRAR" onClick={handleLogin} />
        <p className="login-form__help" onClick={() => setIsOpen(true)}>¿Problemas para acceder?</p>
      </div>
      </NeuCard>
    </div>
    </div>
    <SupportDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default Login