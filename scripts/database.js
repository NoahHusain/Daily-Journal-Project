/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [
        {
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "07/25/2025",
            concept: "Javascript",
            entry: "Learned about javascript data types",
            mood: "mediocre"
        },
        {
            id: 3,
            date: "07/26/2025",
            concept: "React",
            entry: "Learned about react basic functions",
            mood: "confused"
        },
        {
            id: 4,
            date: "07/27/2025",
            concept: "Python",
            entry: "Learned about python data types",
            mood: "happy"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const copyOfData = [...database.entries]
    return copyOfData
}