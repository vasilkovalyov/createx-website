import React from 'react'

import ImageComponent from './Image'
import Typography from './Typography'

import { ITestimonial } from '../../../interfaces/common'

export default function ClientTestimonial({ Image, Text, Name, Position }: ITestimonial) {
	return (
		<div className="client-testimonial">
			{ Image && Image.Url && <ImageComponent Url={Image.Url} Alt={Image.Alt} className="client-testimonial__image" /> }
			<Typography text={Text} className="client-testimonial__text" />
			<Typography text={Name} className="client-testimonial__author font-bold" />
			{ Position && <Typography text={Position} className="client-testimonial__position text-xs text-color-secondary" /> }
		</div>
	)
}
