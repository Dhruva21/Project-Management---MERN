import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <footer className="text-center mt-auto">
          <hr /> 
          <p>&copy; {new Date().getFullYear()} Dhruva's Web App. All Rights Reserved.</p>
          <p>
            Source code for contributing available on{' '} <FontAwesomeIcon icon={faCode} />{' '}
            <a href="https://github.com/Dhruva21/Project-Management---MERN" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
    </footer>
  )
}

export default Footer