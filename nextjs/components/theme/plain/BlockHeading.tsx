import React from 'react'
import cn from 'classnames'

import Typography from './Typography'
import { HeadingLevel } from '../../../enums/common'
import { AlignContentType } from '../../../types/common'

function BlockHeading({ Title, Text, headingLevel = HeadingLevel.H2, aligned }: { Title: string, Text?: string, headingLevel: HeadingLevel, aligned: AlignContentType}) {
	const alignedContent = cn({
		'block-heading--center text-align--center': aligned === 'center',
		'block-heading--right text-align--right': aligned === 'right',
	})
			
	return (
		<div className={`block-heading ${alignedContent}`}>
			<Typography level={headingLevel} text={Title} className="block-heading__title" />
			{ Text && <Typography text={Text} className="block-heading__text" /> }
		</div>
	)
}

export default BlockHeading
