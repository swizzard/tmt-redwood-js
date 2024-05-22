import { Link, routes } from '@redwoodjs/router'

export default () => {
  return (
    <div className="mt-5 flex flex-col items-center gap-y-5">
      <div>
        <p>I have too many open tabs.</p>
        <p>I need to close some of them.</p>
        <p>I will forget their contents immediately.</p>
      </div>
      <div>
        <p>
          Hence:{' '}
          <Link className="text-blue-500 hover:font-bold" to={routes.tabs()}>
            TMT
          </Link>
        </p>
      </div>
      <div>
        <p>Sign up with your real email or a fake email it doesn't matter.</p>
        <p>Save tabs&mdash;URLs, notes, and tags.</p>
        <p>
          Tags will be automatically parsed and saved and can be used for
          categorization.
        </p>
        <p>
          This is literally all living on Literally Some DB and run by{' '}
          <a
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            href="https://swizzard.pizza"
            target="_blank"
          >
            Literally Some Guy
          </a>{' '}
          so like don't put nudes or mein kampf in it thanks.
        </p>
      </div>
      <div>
        <Link className="text-blue-500 hover:font-bold" to={routes.home()}>
          Home
        </Link>
      </div>
    </div>
  )
}
