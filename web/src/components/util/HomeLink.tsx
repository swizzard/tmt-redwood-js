import { Link, routes } from '@redwoodjs/router'

export default function HomeLink() {
  return (
    <Link to={routes.tabs()} className="rw-button rw-button-green">
      Home
    </Link>
  )
}
