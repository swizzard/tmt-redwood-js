import { Link, routes } from '@redwoodjs/router'
import { useAuth } from 'src/auth'

export default () => {
  const { signUp, currentUser } = useAuth()
  return (
    <div className="mt-5 flex flex-col items-center">
      <div>
        <p>I have too many open tabs.</p>
        <p>I need to close some of them.</p>
        <p>I will forget their contents immediately.</p>
        <p>Hence:</p>
      </div>
      <div className="my-5">
        <p>
          <Link
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            to={routes.tabs()}
          >
            TMT
          </Link>
        </p>
      </div>
      <div className="my-5 ml-5">
        <p>
          Do <b>you</b> have too many tabs?
        </p>
      </div>
      <div className="ml-5">
        <p>If so, you can:</p>
        <p>
          <a
            className={`hover:font-bold ${currentUser ? 'text-blue-900' : 'text-green-500'}`}
            onClick={() => signUp()}
          >
            {' '}
            Sign up via email, Google, or GitHub.
          </a>
        </p>
        <p>
          <Link
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            to={routes.newTab()}
          >
            Save URLs
          </Link>
          , add notes and tags.
        </p>
        <p>
          <Link
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            to={routes.tags()}
          >
            Your tags
          </Link>{' '}
          will be saved and can be used for categorization.
        </p>
        <p className="mt-5">
          <b>Warning:</b> <code>Too Many Tabs</code> is provided <i>as is</i>.
        </p>
        <p>
          This is literally all living on Literally Some DB and run by{' '}
          <a
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
            href="https://swizzard.pizza"
            target="_blank"
          >
            Literally Some Guy
          </a>
          .
        </p>
        <p>
          I will try very hard to keep it up and running but you can't get mad
          at me if things go awry.
        </p>
        <p>Don't put passwords or mein kampf in it thanks.</p>
      </div>
      <div className="ml-5 mt-5">
        <p className="bg-slate-100">
          <code>TMT</code> is built with{' '}
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
          . Other icons coutesy{' '}
          <a
            target="_blank"
            href="https://fontawesome.com/"
            className="text-blue-500 visited:text-blue-900 hover:font-bold"
          >
            Font Awesome
          </a>
          .
        </p>
      </div>
      <div className="h-full w-full bg-slate-100 pt-3 text-center">
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
