import React, {useEffect, useState} from "react";

type StatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<StatusPropsType> = (props) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || 'New status.'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} type="text"
                       value={status}/>
            </div>
            }
        </div>)
}
