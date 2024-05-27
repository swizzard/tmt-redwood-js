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
      <div className="absolute right-0 h-full w-full bg-slate-100 pt-5 md:pr-10">
        {children}
        <div className="float-end h-16 w-full bg-slate-100 text-center">
          <p className="mt-2 block text-center text-sm text-gray-500">
            © 2024 sam raker
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoggedOutLayout
