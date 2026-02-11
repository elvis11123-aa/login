import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
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
    <div className='grid-container'>
      {/* Panel izquierdo */}
      <div className='grid-item'>
          <InfoPanel>
        <center><img src={logo} alt="Robotic Minds Logo" style={{ width: '180px' }} /></center>
        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
          <li>Sistema de Gestion de Operaciones y Recursos.</li>
          <li>Acceso a Suites Perzonalizadas por Rol.</li>
          <li>Plataforma de Control Centralizado.</li>
          <li>Portal de Servicios Internos.</li>
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
            <Input type="password" placeholder="••••••••" value={password} onChange={setPassword} />
          </div>
        </div>

        <Button label="ENTRAR" onClick={handleLogin} />
        <p className="login-form__help">¿Problemas para acceder?</p>
      </div>
      </NeuCard>
    </div>
    </div>
  )
}

export default Login