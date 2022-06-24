import React, { useState } from 'react'
import cn from 'classnames'
import Typography from '../plain/Typography'

import { IAccordion } from '../../../interfaces/common'

function Accordion({ Text, Title, className, isOpen = false }: IAccordion) {
  const [toggle, setToggle] = useState<boolean>(isOpen)

  return (
    <div className={cn('accordion', className, toggle ? 'accordion--active' : '')}>
      <div className="accordion__title-wrapper" onClick={() => setToggle(!toggle)}>
        <Typography level="h4" text={Title} className="accordion__title" />
      </div>
      <div className="accordion__body">
        {Text && <Typography text={Text} className="accordion__text text-color-secondary" />}
      </div>
    </div>
  )
}

export default Accordion
