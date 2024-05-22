import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

type LoggedOutLayoutProps = {
  children?: React.ReactNode
}

const LoggedOutLayout = ({ children }: LoggedOutLayoutProps) => {
  return (
    <div className="rw-scaffold bg-slate-100">
      <div className="pt-5 text-center">
        <h1 className="text-3xl">Too Many Tabs</h1>
      </div>
      <div className="absolute right-0 h-full w-full bg-slate-100 pr-10 pt-5">
        {children}
      </div>
      <div className="absolute bottom-0 left-0 h-16 w-full bg-slate-100">
        <p className="ml-auto mt-5 block text-center text-sm text-gray-500">
          © 2024 sam raker
        </p>
      </div>
    </div>
  )
}

export default LoggedOutLayout
