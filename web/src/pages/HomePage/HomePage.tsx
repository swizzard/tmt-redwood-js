import { Redirect, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const HomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Metadata title="Home" description="Home page" />

      {currentUser ? <LoggedInHome /> : <LoggedOutHome />}
    </>
  )
}

export default HomePage

function LoggedInHome() {
  return <Redirect to={routes.tabs()} />
}

function LoggedOutHome() {
  const { signUp } = useAuth()
  return (
    <div className="rw-scaffold">
      <div className="mt-5 flex flex-col">
        <div className="ml-auto mr-auto flex flex-col text-center">
          <h1 className="text-3xl">Too Many Tabs</h1>
        </div>
        <div className="rw-button-group">
          <button
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => signUp()}
          >
            Log In or Register
          </button>
        </div>
      </div>
    </div>
  )
}
