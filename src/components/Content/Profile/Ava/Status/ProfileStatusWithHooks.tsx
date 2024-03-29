import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    let [editMode, setEditMode] = useState<boolean>(false);
    let [status, setStatus] = useState<string>(props.status)

    //статус синхронизируется с пропсами лишь после полной отрисовки страницы
    //благодаря юз эффекту у нас теперь не будет пустой строки в режиме редактироания

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    //ставим в массив зависимостей статус, приходящий нам из пропсов и меняемый  редьюсерами в глобальном стейте

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const setProfileStatus = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}><h3>{props.status || 'Set your status...'}</h3></span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={setProfileStatus} value={status} onBlur={deactivateEditMode} autoFocus/>
                </div>
            }
        </>
    );
}
