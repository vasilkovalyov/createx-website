import React from 'react'

import ImageComponent from '../plain/Image'
import Typography from '../plain/Typography'

import { IBenefit } from '../../../interfaces/common'
import { HeadingLevel } from '../../../enums/common'

function Benefit({ Image, Text, Title, className }: IBenefit) {
    return (
        <div className={`benefit ${className ? className : ''}`}>
            <ImageComponent Url={Image.Url} Alt={Image.Alt} className="benefit__logo" />
            <Typography level={HeadingLevel.H6} text={Title} className="benefit__title" />
            { Text && <Typography text={Text} className="benefit__text" /> }
        </div>
    )
}

export default Benefit
