import { Link, Redirect, routes } from '@redwoodjs/router'
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
    <div className="mt-5 flex flex-col items-center gap-y-5 bg-slate-100">
      <button
        className="w-1/6 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={() => signUp()}
      >
        Log In or Register
      </button>
      <div className="w-1/6">
        <Link to={routes.about()}>
          <button
            type="button"
            className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            What?
          </button>
        </Link>
      </div>
    </div>
  )
}
