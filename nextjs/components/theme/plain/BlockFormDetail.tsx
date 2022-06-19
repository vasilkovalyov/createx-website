import React from 'react'

import ImageComponent from './Image'
import Container from './Container'
import CtaForm from './Form/CtaForm'

import { IBlockFormDetail } from '../../../interfaces/blocks'
import Col from './Grid/Col'
import Row from './Grid/Row'

export default function BlockFormDetail({ Image }: IBlockFormDetail) {
			
	return (
		<section className="block-form-detail">
			{ Image && Image.Url ? <ImageComponent Url={Image?.Url} Alt={Image?.Alt} className="block-form-detail__image" /> : null }
			<Container className="block-form-detail__container">
				<Row justify="flex-end">
					<Col base={12} lg={6} xl={5}>
						<CtaForm />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

