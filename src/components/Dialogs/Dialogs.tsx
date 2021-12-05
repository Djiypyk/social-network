import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props: any) => {


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <DialogItem name={'Alex'} id={1}/>
                <DialogItem name={'Glen'} id={2}/>
                <DialogItem name={'Julia'} id={3}/>
                <DialogItem name={'Gloria'} id={4}/>
                <DialogItem name={'Nikolai'} id={5}/>

            </div>
            <div className={styles.messages}>
                <Message message={'Hello, it`s me.'}/>
                <Message message={'Hello!'}/>
                <Message message={'All your ready?'}/>
                <div className={styles.message_input}>
                    <textarea placeholder="Write your message"/>
                    <button className={styles.add_button}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;