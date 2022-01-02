import styles from './NewsField.module.css'

const NewsField = (props: any) => {
    return (
        <div>
            <div className={styles.newsPost}>
                <p>Happy New 2022 Year!!!</p>
                <img src="https://www.hearttoheart.org/wp-content/uploads/2012/12/secret-santa-rules.jpg?w=243" alt="Santa Klaus"/>
            </div>
        </div>
    )
}

export default NewsField;