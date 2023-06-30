import { useState } from "react"
import ReactMarkdown from 'react-markdown'
import './App.css'


function App() {
  const [text, setText] = useState<string>('')

  return (
    <>
      <h1
        style={{ textAlign: 'center', margin: '2rem 0 2rem 0', fontSize: '3rem' }}
      >
        Markdown Text Editor
      </h1>


      <div className='container'>
        <div className="texts">
          <h3 style={{ textDecoration: 'underline' }}>Write text here</h3>
          <textarea
            className='div left_div'
            value={text}
            style={{ fontSize: '1.2rem', padding: '1rem 0 1rem 0' }}
            onChange={(e) => { setText(e.target.value) }}
          />
        </div>

        <div className="texts">
          <h3 style={{ textDecoration: 'underline' }}>See output here</h3>
          <div className='div right_side'>
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="notes">

      </div>
    </>
  )
}

export default App
