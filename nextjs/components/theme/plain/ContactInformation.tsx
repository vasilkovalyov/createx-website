import React from 'react'
import cn from 'classnames'

import { IContactInformation } from '../../../interfaces/common'

export default function ContactInformation({
  Theme = 'dark',
  className,
  Address,
  Email,
  Phone,
  Schedule,
}: IContactInformation) {
  const themeColor = cn({
    'contact-information--light': Theme === 'light',
    'contact-information--dark': Theme === 'dark',
  })

  return (
    <div className={`contact-information ${themeColor} ${className ? className : ''}`}>
      <ul className="contact-information__list list-reset">
        {Address && (
          <li className="contact-information__item">
            <span className="contact-information__title">Address: </span>
            <address className="contact-information__description">{Address}</address>
          </li>
        )}
        {Phone && (
          <li className="contact-information__item">
            <span className="contact-information__title">Call: </span>
            <a href={`tel:${Phone}`} className="contact-information__description">
              {Phone}
            </a>
          </li>
        )}
        {Email && (
          <li className="contact-information__item">
            <span className="contact-information__title">Email: </span>
            <a href={`mailto:${Email}`} className="contact-information__description">
              {Email}
            </a>
          </li>
        )}
        {Schedule && (
          <li className="contact-information__item">
            <span className="contact-information__title">Schedule: </span>
            <span className="contact-information__description">{Schedule}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
