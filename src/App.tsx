import { useState } from 'react'
import { Modal } from './components/Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="center">
        <div style={{ marginTop: '20px' }}>
          <h3>useClickAnywhere Hook Demo</h3>
          <p>Click the button below to open a modal. The modal will close when you click outside of it.</p>
          <button
            type="button"
            className="counter"
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: '#646cff', marginTop: '10px' }}
          >
            Open Modal
          </button>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="useClickAnywhere Demo"
      >
        <p>This modal uses the <code>useClickAnywhere</code> custom hook.</p>
        <p>Click anywhere outside this modal to close it.</p>
        <p>You can also click the "Close" button or the × in the top right.</p>
        <p>The hook detects clicks anywhere on the document and closes the modal if the click is outside.</p>
      </Modal>
    </>
  )
}

export default App
