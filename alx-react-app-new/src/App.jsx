import Header from './components/Header';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
      {/* Your components (main app layout) */}
      <Header />
      <WelcomeMessage /> 
      <Counter />
      <UserProfile 
        name="Alice Johnson" 
        age={25} 
        bio="I love coding, hiking, and learning new technologies!" 
      />
      <MainContent />
      <Footer />

     
    </>
  )
}

export default App

