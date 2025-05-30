const runsWithDates = [];

const startDate = new Date("2025-05-24T00:00");
const endDate = new Date("2025-09-27T00:00");

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    runsWithDates.push({
        run: "",
        date: new Date(d)  // create a new Date object to avoid reference issues
    });
}

export runsWithDates