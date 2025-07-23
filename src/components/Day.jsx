import { Tooltip } from '@mui/material'
import { subtractDays } from '../data/fns'
import styles from '../styles.module.scss'
import { allRuns } from '../data/runs'

const Day = ({
    day,
    dayNumber
}) => {
    const date = subtractDays(19 * 7 - dayNumber, new Date("2025-09-29"))
    const run = allRuns.find((all) => all.title === day.title)

    return (
        <p className={styles.day}>
            {date.toDateString()}<br />
            <Tooltip
                title={<>
                    {run?.format?.map(line => <p>{line}</p>)}
                </>}
            >
                {day.title}
            </Tooltip>
        </p>
    )
}

export default Day