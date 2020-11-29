import Logo from 'components/logo'
import Search from 'components/search'
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi'

const socialLinks = [
  {
    id: 'email',
    icon: <FiMail />,
    href: 'mailto:julianbenegas99@gmail.com'
  },
  {
    id: 'github',
    icon: <FiGithub />,
    href: 'https://github.com/julianbenegas'
  },
  {
    id: 'twitter',
    icon: <FiTwitter />,
    href: 'https://twitter.com/julianbenegas8'
  }
]

const tags = ['Contemplations', 'Programming']

const HomePage = () => {
  return (
    <div className="flex">
      <aside className="bg-muted p-10 flex flex-col justify-between h-screen w-80">
        <nav className="space-y-6">
          <Logo />
          <Search />
          <div>
            <p className="uppercase text-xs font-medium text-gray-800">Tags</p>
            <div className="space-y-2 mt-3">
              {tags.map((t) => (
                <button
                  key={t}
                  className="block px-2 py-1 rounded-md text-sm bg-teal-50 text-teal-700 border border-teal-400"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <div className="flex space-x-6 justify-center">
          {socialLinks.map((s) => (
            <a
              href={s.href}
              target="_blank"
              rel="noopener"
              key={s.id}
              title={s.id}
              className="text-2xl text-gray-600 hover:text-gray-900 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </aside>
      <main>Tree</main>
    </div>
  )
}

export default HomePage
