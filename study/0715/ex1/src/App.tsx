import './App.css'

import CardGrid from './components/CardGrid'
import ButtonTest from './pages/ButtonTest'
import Navbar from './components/Navbar'
import LoginForm from './LoginForm'
import ProfileCard from './components/ProfileCard'

export default function App() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <ProfileCard />
      
      <ButtonTest/>

      <CardGrid /> 

      <Navbar/>

      <LoginForm/>

    </main>
  )
}
