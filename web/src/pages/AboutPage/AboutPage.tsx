import { Link, routes } from '@redwoodjs/router'

export default () => {
  return (
    <div className="mt-5 flex flex-col items-center gap-y-5">
      <div>
        <p>I have too many open tabs.</p>
        <p>I need to close some of them.</p>
        <p>I will forget their contents immediately.</p>
        <p>Hence:</p>
      </div>
      <div>
        <p>
          <Link
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            to={routes.tabs()}
          >
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
        <p>
          Built with{' '}
          <a
            target="_blank"
            href="https://redwoodjs.com"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
          >
            RedwoodJS
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://tailwindcss.com"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
          >
            TailwindCSS
          </a>
          . DB hosted on{' '}
          <a
            target="_blank"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            href="https://railway.app/"
          >
            Railway
          </a>
          . Frontend hosted on{' '}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
          >
            Netlify
          </a>
          . Favicon is the <span className="font-mono">bookmark-tabs</span>{' '}
          emoji via{' '}
          <a
            target="_blank"
            href="https://favicon.io/emoji-favicons/bookmark-tabs"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
          >
            favicon.io
          </a>
          .
        </p>
      </div>
      <div>
        <Link
          className="text-blue-500 visited:text-blue-900 hover:font-bold"
          to={routes.home()}
        >
          Home
        </Link>
      </div>
    </div>
  )
}
