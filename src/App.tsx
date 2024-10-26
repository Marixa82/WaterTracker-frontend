// import { Button } from 'react-bootstrap'
// import WelcomePage from './pages/Welcome/WelcomePage'
import { useAppDispatch } from './hooks/hook'
import { useAuth } from './hooks/useNavigationHook'
import { Suspense,useEffect } from 'react'
import { authOperations } from './redux/auth'
import Container from './components/Container/Container'
import { AppBar } from './components/NavigationApi/AppBar'
import Loader from './components/Loader/Loader'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './components/constants/appRoutes'

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const {isRefreshing} = useAuth();

  useEffect(()=>{
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  return isRefreshing ? (<p>Refreshing user...</p>) : (
    <Container >  
      <div><AppBar/></div> 
      <main>
        <Suspense fallback={<Loader/>}>
        <Routes>
{appRoutes.map(({path, element})=>(
  <Route key={path} path={path} element={element}/>
))}
        </Routes>
        </Suspense>
        
        </main>   
     
      
    </Container>
  )
}

export default App

{/* <WelcomePage/>

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

<Button variant="primary">Click me</Button> */}

