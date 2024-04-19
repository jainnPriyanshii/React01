
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UsercontextProvider from './Context/UsercontextProvider'

function App() {


  return (
    <UsercontextProvider>
      <h1>This is Priyanshi</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
