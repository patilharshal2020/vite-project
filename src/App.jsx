import './App.css'
import { UserProfile } from './components/UserProfile'

function App() {
  const age = 26;
  return (
    <div>
      <h1>Harry</h1>
      <UserProfile userName="harry_675" userId={100} age={age}/>
    </div>
  )
}

export default App
