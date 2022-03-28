import styles from './Header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = ({isAuth, login}) => {

    return (
        <header className={styles.header}>
            <img
                src="https://sun9-31.userapi.com/impf/c851320/v851320586/c83b6/lRSQvmthIEU.jpg?size=604x427&quality=96&sign=fc31f757c09f541f5589942c1ab2720e&c_uniq_tag=GGPRrg1v7UKcLlzjpUPlvHvPdJgD0OMimQ8-mkLKsO0&type=album"
                alt='Logotype'
            />
            <div className={styles.login_block}>
                {isAuth
                    ? <span>{login}</span>
                    : <NavLink to={'/login'}> Login</NavLink>
                }
            </div>
        </header>
    )
}
