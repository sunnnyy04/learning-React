import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/userContextProvider"

function App() {


  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
