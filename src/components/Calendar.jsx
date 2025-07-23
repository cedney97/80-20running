import { useEffect, useState } from 'react'
import { getRunsInOrder } from '../data/days'
import styles from '../styles.module.scss'
import Week from './Week'

const Calendar = () => {
    const [weeks, setWeeks] = useState([])

    useEffect(() => {
        getRunsInOrder()
            .then((weeks) => setWeeks(weeks))
    }, [])

    return (
        <div className={styles.calendar}>
            {
                weeks.map((week, i) => (
                    <Week
                        key={i}
                        week={week}
                        weekNumber={i}
                    />
                ))
            }
        </div>
    )
}

export default Calendar