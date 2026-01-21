import './App.css'
import { SignInButton, SignedOut, SignedIn, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to the application</h1>
      <SignedOut>
      <SignInButton mode='modal'>
        <button>Login</button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton mode='modal'/>
      </SignedIn>

      <UserButton />
    </>
  )
}

export default App
