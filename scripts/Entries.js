/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = ???
    const allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
        <ul class="jsEntry">
        <li class="jsData"><h3>${entry.concept}</h3></li>
        <li class="jsData">${entry.date}</li>
        <li class="jsData">${entry.entry}</li>
        <li class="jsData">${entry.mood}</li>
        </ul>
        `
    }

    return allEntriesAsHTML
}