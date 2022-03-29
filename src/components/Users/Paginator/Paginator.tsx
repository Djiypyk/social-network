import React, {useState} from "react";
import styles from './Paginator.module.css'

type PaginatorType = {
    onPageChanged: (page: number) => void
    currentPage: number
}
export const Paginator: React.FC<PaginatorType> = ({onPageChanged, currentPage}) => {
    const [startPage, setStartPage] = useState<number>(1)

    let pages: number[] = []
    for (let i = startPage; i <= startPage + 9; i++) {
        pages.push(i)
    }


    return <div className={styles.paginator}>
        {startPage === 1 ? null : <button onClick={() => setStartPage(startPage - 10)}>
            &lt;
        </button>}
        {pages.map(p => <span key={p}
                              onClick={() => onPageChanged(p)}
                              className={`${styles.normal} ${currentPage === p ? styles.selectedPage : ''}`}>{p}</span>)}
        <button onClick={() => setStartPage(startPage + 10)}>
            &gt;
        </button>
    </div>
}
