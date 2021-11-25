import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props: any) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    className={styles.content_profile_img}
                    alt = 'Background Image'
                />
            </div>
            <div>
                <div className={styles.content_about_user}>
                    <div>
                        <img
                            className={styles.avatar}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU"
                            alt="Avatar Icon"
                        />
                    </div>
                    <div>
                        <h1>Name FirstName</h1>
                        <p>Country: Belarus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
