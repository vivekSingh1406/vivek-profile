import React from 'react'
import './base.css'
import { faLinkedin,faInstagram,faWhatsapp,faXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Base = () => {
  return (
 <footer className="footer">
      <hr className="footer-line" />
      <div className="footer-content">
        <h3 className="footer-name">
          Vivek <span className="highlight">Singh Bais</span>
        </h3>
        <div className="footer-icons">
          <span className="footer-line-yellow"></span>
            <a href="https://www.linkedin.com/in/vivek-singh-905449273/"><FontAwesomeIcon icon={faLinkedin} className='ficon'></FontAwesomeIcon></a>
            <a href="https://github.com/vivekSingh1406"><FontAwesomeIcon icon={faGithub} className='ficon'></FontAwesomeIcon></a> 
            <a href="https://wa.me/919755752534"><FontAwesomeIcon icon={faWhatsapp} className='ficon'></FontAwesomeIcon></a>
            <a href="https://wa.me/919755752534"><FontAwesomeIcon icon={faXTwitter} className='ficon'></FontAwesomeIcon></a>
          <span className="footer-line-yellow"></span>
        </div>
        <p className="footer-copy">
          © Vivek Singh. All Rights reserved.
        </p>
      </div>
    </footer>

  )
}
