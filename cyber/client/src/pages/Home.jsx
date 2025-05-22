import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <p>This is a simple React application.</p>

        <Link to='/about'>About</Link>
    </div>
  )
}
