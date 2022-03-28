import React from "react";
import styles from './Paginator.module.css'

type PaginatorType = {
    onPageChanged: (page: number) => void
    currentPage: number
}
export const Paginator: React.FC<PaginatorType> = ({onPageChanged, currentPage}) => {
    let pages: number[] = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(p => <span key={p}
                                  onClick={() => onPageChanged(p)}
                                  className={`${styles.normal} ${currentPage === p ? styles.selectedPage : ''}`}>{p}</span>)}
    </div>
}
