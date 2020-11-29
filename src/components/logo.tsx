import Link from 'next/link'

const Logo = () => (
  <Link href="/">
    <a className="flex space-x-2 items-center">
      <div className="bg-gradient-to-br from-jb-green to-jb-purple w-6 h-6 rounded-md" />
      <div className="text-2xl font-bold text-gray-900">Julián Benegas</div>
    </a>
  </Link>
)

export default Logo
