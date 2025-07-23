import styles from '../styles.module.scss'
import Day from './Day'

const Week = ({
    week
}) => {
    const fakeWeek = !!week.title

    const className = fakeWeek
        ? styles.weekSmall
        : styles.week

    return (
        <div className={className}>
            {
                fakeWeek
                    ? week.title
                    : week.runs.map((day, i) => <Day key={i} dayNumber={week.weekNumber * 7 + i} day={day}></Day>)
            }
        </div>
    )
}

export default Week