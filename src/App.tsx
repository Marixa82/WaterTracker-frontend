// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './App.styled'
// import { BackgroundContainer } from './App.styled'
import { Button } from 'react-bootstrap'
import WelcomePage from './pages/Welcome/WelcomePage'
// import HomePage from './components/pages/HomePage'
// import SignInPage from './components/pages/Sign-In-page'

const App: React.FC = () => {
  
  return (
    < >      
      <WelcomePage/>

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
   
      
    </>
  )
}

export default App
