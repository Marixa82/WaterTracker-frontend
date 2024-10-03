import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Container, Button } from 'react-bootstrap'
// import HomePage from './components/pages/HomePage'
// import SignInPage from './components/pages/Sign-In-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Container>
      <h1>Hello, React-Bootstrap with Vite!</h1>
      {/* <SignInPage/>
      <HomePage/> */}

      <div className="row">
        <div className="col-6">
          <form action="">
          <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
</div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-md-4 text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo quibusdam, eos eum nemo perferendis provident! Odio omnis illum delectus assumenda voluptatibus, adipisci, incidunt voluptates nihil explicabo at perferendis magni.</div>
        <div className="col-xl-6 col-md-4 text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo quibusdam, eos eum nemo perferendis provident! Odio omnis illum delectus assumenda voluptatibus, adipisci, incidunt voluptates nihil explicabo at perferendis magni.</div>
        <div className="col-xl-6 col-md-4 text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae illo quibusdam, eos eum nemo perferendis provident! Odio omnis illum delectus assumenda voluptatibus, adipisci, incidunt voluptates nihil explicabo at perferendis magni.</div>
        
      </div>
      
      <Button variant="primary">Click me</Button>
    </Container>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
