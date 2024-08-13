import React from 'react'
import { ReactComponent as Github } from '../assets/github.svg'

function Footer() {
  return (
    <footer className='footer'>
      Copyright © 2024 Waleed Ahmad{' '}
      <a href='https://github.com/Waleed-Ahmad-dev' target='_blank'>
        <Github className='icon' />
      </a>
    </footer>
  )
}

export default Footer
