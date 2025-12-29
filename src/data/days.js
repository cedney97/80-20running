import { allRuns } from './runs';
import runsText from './runs.txt'

const NUM_RUNS = 18 * 7

export const endDate = new Date("2026-04-12T00:00");

const readRunsFile = async () => {
    const res = await fetch(runsText)
    return await res.text()
}

export const getRunsInOrder = async () => {
    console.log(endDate)
    const runsRaw = await readRunsFile()
    const runsSplit = runsRaw.split("\n")
    let weeks = []
    let week = []
    let weekNumber = 0
    let i = NUM_RUNS
    for (let run of runsSplit) {
        run = run.trim()
        if (!run) {
            if (typeof week === "string") {
                weeks.push({ title: week })
            } else {
                weeks.push({ runs: [...week], weekNumber })
            }
            week = []
            continue
        }
        if (run.match(/--.+--/g)) {
            week = run
            continue
        }
        if (run.match(/Week \d+/g)) {
            weekNumber = Number(run.split(" ").splice(-1)[0])
            continue
        }

        const orSplit = run.split(" or ")
        run = orSplit[0]
        let alternative = orSplit.length > 1 ? orSplit[1] : null

        let fullRun = allRuns.find((r) => r.title === run)
        if (!fullRun) {
            fullRun = {
                title: run
            }
        }
        let date = new Date(endDate)
        date.setDate(endDate.getDate() - i)
        week.push({
            ...fullRun,
            alternative,
            date
        })
        i--
    }
    weeks.push({ runs: [...week], weekNumber })

    return weeks
}