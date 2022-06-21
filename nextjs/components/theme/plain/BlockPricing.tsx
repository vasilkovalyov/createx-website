import React from 'react'

import Container from './Container'
import BlockHeading from './BlockHeading'
import IcoMoonIcon from './IcoMoonIcon'
import Typography from './Typography'
import Button from './Button'

import { EnumsIcon } from '../../../enums/icons'
import { IBlockPricing } from '../../../interfaces/blocks'

export default function BlockPricing({ Title, Text, PriceCol, PriceRow }: IBlockPricing) {
  const getValueOfTable = (bool: boolean | null, text: string | null): any | string => {
    if (bool !== null && bool === true) {
      return <IcoMoonIcon icon={EnumsIcon.Check} />
    }
    if (text !== '') {
      return text
    }
    return null
  }
  return (
    <section className="block-pricing">
      <Container className="block-pricing__container">
        <BlockHeading Title={Title} Text={Text} aligned="center" />
        <div className="table-wrapper">
          <table className="table shadow-wrapper">
            <thead className="table__head">
              <tr className="table__head-row">
                <th className="table__head-col text-md">Items</th>
                {PriceCol && PriceCol.length
                  ? PriceCol.map((item) => (
                      <th key={item.id} className="table__head-col">
                        {item.PricePlan && (
                          <Typography text={item.PricePlan} level="h5" className="table__head-heading text-uppercase" />
                        )}
                        {item.PriceCost && <span className="text-md text-color-secondary">{item.PriceCost}</span>}
                      </th>
                    ))
                  : null}
              </tr>
            </thead>
            <tbody className="table__body">
              {PriceRow && PriceRow.length
                ? PriceRow.map((item) => (
                    <tr key={item.id} className="table__body-row">
                      <td className="table__body-col">{item.Title}</td>
                      <td className="table__body-col">{getValueOfTable(item.Available1, item.Text1)}</td>
                      <td className="table__body-col">{getValueOfTable(item.Available2, item.Text2)}</td>
                      <td className="table__body-col">{getValueOfTable(item.Available3, item.Text3)}</td>
                    </tr>
                  ))
                : null}
              <tr className="table__body-row">
                <td className="table__body-col"></td>
                <td className="table__body-col table__body-col-btn-wrapper">
                  <Button size="extra-small" name="send request" outline={true} />
                </td>
                <td className="table__body-col table__body-col-btn-wrapper">
                  <Button size="extra-small" name="send request" outline={true} />
                </td>
                <td className="table__body-col table__body-col-btn-wrapper">
                  <Button size="extra-small" name="send request" outline={true} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
