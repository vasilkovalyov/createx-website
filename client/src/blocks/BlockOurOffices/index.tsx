import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

import Typography from '../../components/Typography'

import { IBlockOurOffices, IOffice } from './BlockOurOffices.type'

function BlockOurOffices({ heading, text, items, className }: IBlockOurOffices) {
  return (
    <div className={cn('block-our-office bg-gray-100 py-40 md-py-60 lg-py-80', className)}>
      <div className="block-our-office__container container">
        <Typography level="h2" className="block-our-office__heading mb-24 text-center">
          {heading}
        </Typography>
        {text ? (
          <Typography className="block-our-office__text text-lg text-center mb-20 tablet:mb-60">{text}</Typography>
        ) : null}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items && items.map((item) => <Office key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  )
}

function Office({ address, email, heading, id, phone, schedule }: IOffice) {
  return (
    <div className="our-office">
      <Typography level="h4" className="our-office__heading mb-24">
        {heading}
      </Typography>
      <Typography className="our-office__address mb-24">{address}</Typography>
      <ul>
        {phone ? (
          <li>
            <Typography level="span" className="text-gray-600 inline-block mr-4">
              Call:
            </Typography>
            <Link href={`tel:${phone}`} className="hover:text-primary">
              {phone}
            </Link>
          </li>
        ) : null}
        {email ? (
          <li>
            <Typography level="span" className="text-gray-600 inline-block mr-4">
              Email:
            </Typography>
            <Link href={`tel:${email}`} className="hover:text-primary">
              {email}
            </Link>
          </li>
        ) : null}
        {schedule ? (
          <li>
            <Typography level="span" className="text-gray-600 inline-block mr-4">
              Schedule:
            </Typography>
            <Typography level="span">{schedule}</Typography>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default BlockOurOffices
