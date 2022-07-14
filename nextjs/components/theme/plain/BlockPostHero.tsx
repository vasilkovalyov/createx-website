import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import IcoMoonIcon from './IcoMoonIcon'

import { getBaseDateFormat } from 'utilities/dateFormatting'
import { EnumsIcon } from 'enums/icons'
import { IBlockPostHero } from 'interfaces/blocks'

export default function BlockPostHero({ Title, Category, Date }: IBlockPostHero) {
  return (
    <section className="block-post-hero bg-color-grey-extra-light">
      <Container className="block-post-hero__container">
        <BlockHeading Title={Title} headingLevel="h1" />
        <ul className="post-details list-reset text-xs text-color-secondary">
          {Category || Date ? (
            <>
              {Category && <li className="post-details__item font-bold color-primary">{Category}</li>}
              {Date && (
                <li className="post-details__item post-details__item--date flex flex-align-center">
                  <IcoMoonIcon icon={EnumsIcon.Clock} />
                  {getBaseDateFormat(Date)}
                </li>
              )}
            </>
          ) : null}
        </ul>
      </Container>
    </section>
  )
}
