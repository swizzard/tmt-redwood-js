import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

type LoggedinLayoutProps = {
  children?: React.ReactNode
}

const LoggedInLayout = ({ children }: LoggedinLayoutProps) => {
  const { logOut } = useAuth()
  return (
    <div className="rw-scaffold">
      <div className="absolute inset-y-0 left-0 h-full w-1/6">
        <div className="mt-10 flex h-16 flex-col items-center justify-center gap-y-2">
          <Link to={routes.tabs()}>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              Home
            </button>
          </Link>
          <button
            className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-600"
            onClick={() => logOut()}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="absolute right-0 w-5/6 pr-10 pt-5">{children}</div>
    </div>
  )
}

export default LoggedInLayout