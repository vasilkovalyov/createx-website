import React from 'react'

import Typography from './Typography'
import Button from './Button'
import IcoMoonIcon from './IcoMoonIcon'

import Row from './Grid/Row'
import Col from './Grid/Col'

import { IPosition } from '../../../interfaces/common'
import { EnumsIcon } from '../../../enums/icons'

export default function Position({ Title, Link, Location, TypeWork }: IPosition) {
  return (
    <div className="position">
      <Row justify="space-between" alignItems="center">
        <Col base={12} sm={6} md={10} lg={8}>
          <div className="position__body">
            <ul className="position__description list-reset">
              <li className="position__description-item">
                <IcoMoonIcon className="position__description-icon" icon={EnumsIcon.Pin} />
                <span className="position__description-text text-xs">{Location}</span>
              </li>
              <li className="position__description-item">
                <IcoMoonIcon className="position__description-icon" icon={EnumsIcon.Clock} />
                <span className="position__description-text text-xs">{TypeWork.split('_').join(' ')}</span>
              </li>
            </ul>
            <Typography level="h6" text={Title} className="position__title" />
          </div>
        </Col>
        <Col base={12} sm={5} md={6} lg={4}>
          <div className="position__btn-wrapper">
            <Button name="Apply now" url={Link?.url} type="outline" className="position__btn" size="small" />
          </div>
        </Col>
      </Row>
    </div>
  )
}
