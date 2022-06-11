import React, { useEffect, useState } from 'react'
import Row from '../Grid/Row'
import Col from '../Grid/Col'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Button from '../Button'
import Typography from '../Typography'
import { HeadingLevel } from '../../../../enums/common'

import LocationsSelect from '../../../hocs/LocationsSelect'
import { ISelect } from 'interfaces/form'
import { ILocationsSelect } from 'interfaces/hocs'

export default function CVForm() {
    const locationChange = (location: string) => {
        console.log(location)
    }
    const HocLocationsSelect = LocationsSelect(
        { 
            Component: Select,
            onChange: locationChange,
            rest: {
                label:"Location",
                required: true
            } 
        } as ILocationsSelect<ISelect>
    )
    
    return (
        <div className="cv-form shadow-wrapper">
            <Typography level={HeadingLevel.H4} text="Send your CV" className="cv-form__title" aligned="center" />
            <form action="" className="cv-form__form">
                <Row>
                    <Col base={12}>
                        <Input name='name' label="Name" placeholder="Your name" size="small" required={true} />
                    </Col>
                    <Col base={12}>
                        { HocLocationsSelect }
                    </Col>
                    <Col base={12}>
                        <Input name='phone' label="Phone" placeholder="Your phone number" size="small" required={true} />
                    </Col>
                    <Col base={12}>
                        <Input name='email' label="Email" placeholder="Your working email" type="email" size="small" required={true} />
                    </Col>
                    <Col base={12}>
                        <TextArea name='message' label="Сovering letter" placeholder="Your covering letter" size="small" rows={4} />
                    </Col>
                    <Col base={12} className="text-align--center">
                        <Button className="cv-form__btn" name="send" size="small" fullwidth={true} />
                    </Col>
                </Row>
            </form>
        </div>
    )
}

