import React from 'react'
import cn from 'classnames'
import Typography from '../Typography'
import { IWorkStep } from './WorkStep.type'

function WorkStep({ number, heading, text, className }: IWorkStep) {
  return (
    <div className={cn('work-step', className)}>
      <Typography level="h2" className="text-gray-400 mb-16">
        {number}
      </Typography>
      <Typography level="h6" className="font-bold text-md mb-8">
        {heading}
      </Typography>
      <Typography className=" text-gray-700 text-md">{text}</Typography>
    </div>
  )
}

export default WorkStep
