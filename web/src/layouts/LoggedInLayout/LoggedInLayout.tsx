import { Link, routes, navigate } from '@redwoodjs/router'
import { slide as Menu } from 'react-burger-menu'
import { useAuth } from 'src/auth'
import { useState } from 'react'

type LoggedinLayoutProps = {
  children?: React.ReactNode
}

const LoggedInLayout = ({ children }: LoggedinLayoutProps) => {
  const { logOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const lo = () =>
    logOut({ openUrl: (_url: string) => navigate(routes.home()) })

  return (
    <>
      <div
        id="burgerWrapper"
        className="float absolute inset-y-0 left-0 h-full w-1/6 bg-slate-100 md:hidden"
      >
        <Menu
          isOpen={menuOpen}
          noOverlay={true}
          menuClassName="pt-5 ml-5 bg-slate-100 border border-solid border-slate-500 text-black"
          burgerButtonClassName="w-5 h-full pt-5 pl-5 pb-10 sm:pl-50%"
          customBurgerIcon={<i className="fa fa-bars inline-block w-full"></i>}
          outerContainerId="burgerWrapper"
          onStateChange={(state) => setMenuOpen(state.isOpen)}
        >
          <Link
            className="ml-5"
            to={routes.tabs()}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa fa-house"></i> Home
          </Link>
          <Link
            className="ml-5"
            to={routes.newTab()}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa fa-plus"></i> New Tab
          </Link>
          <Link
            className="ml-5"
            to={routes.tags()}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa fa-tag"></i> Tags
          </Link>
          <a className="ml-5" onClick={lo}>
            <i className="fa fa-door-open"></i> Log Out
          </a>
          <Link
            className="ml-5"
            to={routes.about()}
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa fa-magnifying-glass"></i> About
          </Link>
          <a onClick={() => setMenuOpen(false)} className="ml-5">
            <i className="fa fa-times"></i> Close Menu
          </a>
        </Menu>
      </div>
      <div className="absolute inset-y-0 left-0 hidden h-full w-1/6 bg-slate-100 md:block">
        <div className="mt-20 flex h-16 flex-col items-center justify-center gap-y-2">
          <h1>Too Many Tabs</h1>
          <Link to={routes.tabs()}>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              <i className="fa fa-house"></i> Home
            </button>
          </Link>
          <Link to={routes.newTab()}>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              <i className="fa fa-plus"></i> New Tab
            </button>
          </Link>
          <Link to={routes.tags()}>
            <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
              <i className="fa fa-tag"></i> Tags
            </button>
          </Link>
          <button
            className="rounded bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-600"
            onClick={lo}
          >
            <i className="fa fa-door-open"></i> Log Out
          </button>
        </div>
        <div className="mt-20 flex h-16 flex-col items-center justify-center gap-y-2">
          <Link to={routes.about()}>
            <button className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-700">
              <i className="fa fa-magnifying-glass"></i> About
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute right-0 h-full w-5/6 overflow-y-scroll bg-slate-100 pr-10 pt-5">
        <h1 className="text-2xl font-bold md:hidden">Too Many Tabs</h1>
        {children}
        <div className="float-end h-16 w-full bg-slate-100 text-center">
          <p className="mt-2 block text-center text-sm text-gray-500">
            © 2024 sam raker
          </p>
        </div>
      </div>
    </>
  )
}

export default LoggedInLayout
