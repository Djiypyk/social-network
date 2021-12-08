import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props: any) => {

    let dialogs = [
        {name: 'Alex', id: 1},
        {name: 'Glen', id: 2},
        {name: 'Yana', id: 3},
        {name: 'Gloria', id: 4},
        {name: 'Nikolai', id: 5}
    ]


    let messages = [
        {id: 1, message: 'Hello, it`s me.'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'All you ready?'}
    ]

    let dialogsElements = dialogs
        .map( (d) => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = messages
        .map( (m) =>  <Message message={m.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}

                <div className={styles.message_input}>
                    <textarea placeholder="Write your message"/>
                    <button className={styles.add_button}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;