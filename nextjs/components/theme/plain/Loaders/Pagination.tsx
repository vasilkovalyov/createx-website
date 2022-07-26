import React, { useState, useCallback } from 'react'
import cn from 'classnames'
import IcoMoonIcon from '../IcoMoonIcon'
import { EnumsIcon } from 'enums/icons'

interface IClickMetaData {
  start: number
  pageSize?: number
}

export interface IPagination<T> {
  total: number
  page: number
  pageSize: number
  pageCount: number
  onClick: (pageNum: number, meta: T) => void
  onNextPage?: (pageNum: number, meta: T) => void
  onPrevPage?: (pageNum: number, meta: T) => void
}

export default function PaginationMemo({ page = 1, pageCount, pageSize, onClick }: IPagination<IClickMetaData>) {
  const [currentPage, setCurrentPage] = useState<number>(page)

  const getUpdatedStartWithNumber = useCallback((pageNum: number) => pageNum * pageSize - pageSize, [currentPage])

  const handleClick = (pageNum) => {
    setCurrentPage(pageNum)
    onClick &&
      onClick(pageNum, {
        start: getUpdatedStartWithNumber(pageNum),
        pageSize,
      })
  }

  const handleClickNextPage = () => {
    const page = currentPage + 1
    setCurrentPage(page)
    onClick &&
      onClick(page, {
        start: getUpdatedStartWithNumber(page),
        pageSize,
      })
  }

  const handleClickPrevPage = () => {
    const page = currentPage - 1
    setCurrentPage(page)
    onClick &&
      onClick(page, {
        start: getUpdatedStartWithNumber(page),
        pageSize,
      })
  }

  return (
    <div className="pagination">
      <ul className="pagination__list list-reset flex flex-justify-center">
        <li className="pagination__item">
          <button
            className={cn('pagination__btn pagination__btn--prev', { disabled: currentPage === 1 })}
            onClick={() => handleClickPrevPage()}
          >
            <IcoMoonIcon icon={EnumsIcon.ArrowLeft} />
          </button>
        </li>

        {pageCount && pageCount > 0 ? (
          <>
            {Array.from(Array(pageCount)).map((pageItem, index) => (
              <li className="pagination__item pagination__page" key={index}>
                <button
                  className={cn('pagination__btn pagination__btn--page', { active: index + 1 === currentPage })}
                  onClick={() => handleClick(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </>
        ) : null}
        <li className="pagination__item">
          <button
            className={cn('pagination__btn pagination__btn--next', { disabled: currentPage === pageCount })}
            onClick={() => handleClickNextPage()}
          >
            <IcoMoonIcon icon={EnumsIcon.ArrowRight} />
          </button>
        </li>
      </ul>
    </div>
  )
}
