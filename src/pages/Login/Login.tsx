import { useState } from 'react'
import logo from '../../components/logo-robotic.png'
import { NeuCard } from '../../components/NeuCard/NeuCard'
import { InfoPanel } from '../../components/InfoPanel/InfoPanel'
import { Input } from '../../components/Input/input'
import { Button } from '../../components/Button/button'
import './Login.css'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password)
  }

  return (
    <NeuCard>
      {/* Panel izquierdo */}
      <InfoPanel>
        <img src={logo} alt="Robotic Minds Logo" style={{ width: '180px' }} />
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <li>IDP solicita licencias (elige robots).</li>
          <li>El aprobador aprueba o rechaza.</li>
          <li>TIC valida y activa licencias.</li>
          <li>Reasignación de licencias/cartillas cuando se necesite.</li>
        </ul>
        <p style={{ fontSize: '11px', color: '#888', textAlign: 'center', marginTop: 'auto' }}>
          Copyright © Robotic Minds Industries
        </p>
      </InfoPanel>

      {/* Panel derecho */}
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
            <Input type="password" placeholder="••••••••" value={password} onChange={setPassword} />
          </div>
        </div>

        <Button label="ENTRAR" onClick={handleLogin} />
        <p className="login-form__help">¿Problemas para acceder?</p>
      </div>
    </NeuCard>
  )
}

export default Login