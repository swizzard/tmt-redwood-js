import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>Too Many Tabs</h1>
      {currentUser ? <LoggedInHome /> : <LoggedOutHome />}
    </>
  )
}

export default HomePage

function LoggedInHome() {
  const { currentUser, logOut } = useAuth()
  return (
    <>
      <p>Welcome back</p>
      <p>{JSON.stringify(currentUser)}</p>
      <button onClick={() => logOut()}>Log Out</button>
    </>
  )
}

function LoggedOutHome() {
  const { signUp } = useAuth()
  return (
    <>
      <p>You are not logged in</p>
      <button onClick={() => signUp()}>Sign Up</button>
    </>
  )
}
