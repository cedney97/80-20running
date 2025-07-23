import Calendar from './components/Calendar'
import styles from './styles.module.scss'

function App() {
    return (
        <div className={styles.page}>
            <h1>80/20 Running Calendar</h1>
            <Calendar />
        </div>
    )
}

export default App
