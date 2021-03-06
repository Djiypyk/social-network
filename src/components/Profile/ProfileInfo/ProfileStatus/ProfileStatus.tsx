import React, {useEffect, useState} from "react";

export const ProfileStatus: React.FC<StatusPropsType> = ({updateUserStatus, ...props}) => {
    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if (props.isOwner) setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        updateUserStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b>Status: </b> <span onDoubleClick={activateEditMode}>{status || 'New status.'}</span>
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

//Types
type StatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
}