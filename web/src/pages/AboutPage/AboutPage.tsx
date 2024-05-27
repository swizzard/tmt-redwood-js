import { Link, routes } from '@redwoodjs/router'

export default () => {
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
      <div className="ml-5">
        <p>Sign up via email, Google, or GitHub.</p>
        <p>Save URLs, add notes and tags.</p>
        <p>Your tags will be saved and can be used for categorization.</p>
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
        <p>Don't put passwords or mein kampf in it thanks.</p>
        <p>
          I will try very hard to keep it up and running but you can't get mad
          at me if things go awry.
        </p>
      </div>
      <div className="ml-5 mt-5 md:ml-0">
        <p className="bg-slate-100">
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
      <div className="mt-3 h-full w-full bg-slate-100 text-center">
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
