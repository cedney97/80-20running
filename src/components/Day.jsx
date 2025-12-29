import { Tooltip } from '@mui/material'
import { subtractDays } from '../data/fns'
import styles from '../styles.module.scss'
import { allRuns } from '../data/runs'
import { endDate } from '../data/days'
import { isMobile } from 'react-device-detect'
import { useDialog } from '../contexts/DialogContext'

const Day = ({
    day,
    dayNumber
}) => {
    const date = subtractDays(19 * 7 - dayNumber, new Date(endDate))
    const run = allRuns.find((all) => all.title === day.title)
    const { openDialog } = useDialog()

    return (
        <p
            className={styles.day}
            onClick={() => openDialog(
                run.title,
                run.breakdown
            )}
        >
            {date.toDateString()}<br />
            {
                !isMobile &&
                <Tooltip
                    title={<>
                        {run?.format?.map(line => <p key={line}>{line}</p>)}
                    </>}
                >
                    {day.title}
                </Tooltip>
            }
        </p>
    )
}

export default Day