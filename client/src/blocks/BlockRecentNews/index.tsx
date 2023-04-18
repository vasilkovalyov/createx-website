import React from 'react'
import cn from 'classnames'

import Typography from '../../components/Typography'
import NewsPost from '../../components/NewsPost'

import { IBlockRecentNews } from './BlockRecentNews.type'

function BlockRecentNews({ heading, items, className }: IBlockRecentNews) {
  return (
    <div className={cn('block-recent-news pt-40 desktop:pt-80 pb-40 tablet:pb-80 desktop:pb-120', className)}>
      <div className="block-recent-news__container container">
        <Typography level="h2" className="block-recent-news__heading mb-32 md:mb-60 text-center">
          {heading}
        </Typography>
        {items && items.length ? (
          <div className="md:flex gap-4 lg:gap-7 mb-24 md:mb-80">
            <div className="md:w-3/5">
              <NewsPost {...items[0]} className="mb-24" />
            </div>
            {items.length > 1 ? (
              <div className="md:w-2/5">
                {items.slice(1).map((item) => (
                  <NewsPost key={item.id} {...item} size="small" className="mb-24" />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default BlockRecentNews
