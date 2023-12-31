import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-2'>
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <div><FontAwesomeIcon icon={faCogs}/>{' '}Project Management Site</div>
                </div>
            </a>
        </div>
    </nav>
  )
}
