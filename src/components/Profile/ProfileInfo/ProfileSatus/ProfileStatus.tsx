import React from "react";

type StatusPropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<StatusPropsType, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'New status.'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} type="text"
                           value={this.state.status}/>
                </div>
                }
            </div>)
    }
}