import React from 'react'

import Typography from './Typography'
import ContactInformation from './ContactInformation'

import { IOfficeAddress } from '../../../interfaces/common'

export default function OfficeAddress({ Title, Address, Email, Phone, Schedule }: IOfficeAddress) {
  return (
    <div className="office-address">
      <Typography level="h4" text={Title} className="office-address__title" />
      {Address && <address className="office-address__address">{Address}</address>}
      <ContactInformation Phone={Phone} Email={Email} Schedule={Schedule} />
    </div>
  )
}
