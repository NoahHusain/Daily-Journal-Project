import { Entries } from "./scripts/Entries.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}

import { ??? } from "./Entries.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}