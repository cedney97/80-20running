import { createContext, useContext, useMemo, useState } from "react";
import styles from '../styles.module.scss'
const DialogContext = createContext()

export const DialogProvider = ({
    children
}) => {
    const [data, setData] = useState(null)
    const [open, setOpen] = useState(false)

    const openDialog = (title, message) => {
        setData({
            title,
            message
        })
    }

    const closeDialog = () => {
        setData(null)
        setOpen(false)
    }

    const value = useMemo(() => ({
        openDialog,
        closeDialog
    }), [
        openDialog,
        closeDialog
    ])

    return (
        <DialogContext.Provider value={value}>
            {
                open &&
                <div className={styles.backdrop}>
                    <div className={styles.dialog}>
                        <h1>{data.title}</h1>
                        {
                            typeof data.message === "string"
                                ? <p>{data.message}</p>
                                : data.message
                        }
                    </div>
                </div>
            }
            {children}
        </DialogContext.Provider>
    )
}

export const useDialog = () => useContext(DialogContext)