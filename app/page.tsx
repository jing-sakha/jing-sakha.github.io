import Link from 'next/link'

import About from './components/about'
import Header from './components/header'

export default function Page() {
  return (
    <div className='mx-auto container'>
      <Header />
      <h1>Index Page</h1>
      <About />
      <Link href="/post/1">Post 1</Link>
    </div>
  )
}
