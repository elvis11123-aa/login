import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import logo from '../logo-robotic.png'
import './SupportDialog.css'

interface SupportDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function SupportDialog({ isOpen, onClose }: SupportDialogProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="dialog-overlay">
      <div className="dialog-backdrop" onClick={onClose} />
      <DialogPanel className="dialog-panel">
        <center>
          <img src={logo} alt="Robotic Minds Logo" style={{ width: '180px', marginBottom: '20px' }} />
        </center>
        
        <DialogTitle className="dialog-title">Soporte Técnico</DialogTitle>
        
        <p className="dialog-text">
          En caso de que experimente algún problema durante el inicio de sesión o el acceso al sistema, 
          le solicitamos contactar a nuestro equipo de soporte técnico a través del correo{' '}
          <a href="mailto:soporte@roboticminds.com.ec" className="dialog-email">
            soporte@roboticminds.com.ec
          </a>
          , donde recibirá la asistencia necesaria.
        </p>

        <button onClick={onClose} className="dialog-close-btn">
          Cerrar
        </button>
      </DialogPanel>
    </Dialog>
  )
}