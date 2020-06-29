import domObject from "./domobject.js"

/* Object which renders data to each section of the Dashboard

Object outline and messagesList method by David Larsen */

const renderToDom = {

    // Render the list of messages in the chat window
    messagesList() {
        // **TEST DATA - delete later
        const messagesArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **

        // Sort list of messages by date and render each message to the DOM
        messagesArray.sort((message1, message2) => new Date(message2.date) - new Date(message1.date))
        console.log(messagesArray) // Remove this line later
        messagesArray.forEach(message => {
            const messageHTML = domObject.messageComponent(message)
            document.querySelector(".messagesList").innerHTML += messageHTML
        })
    },

    tasksList() {
        // **TEST DATA - delete later
        const tasksArray = [{
            name: "test1",
            date: "2020-06-05"
        }, {
            name: "test2",
            date: "2020-05-04"
        }, {
            name: "test3",
            date: "2020-06-21"
        }]
        // **
        const completeTasks = tasksArray.map(task => return task.completed = true)
        const incompleteTasks = tasksArray.map(task => return task.completed = false)

        tasksArray.sort((task1, task2) => new Date(task2.date) - new Date(task1.date))
        console.log(tasksArray) // Remove this line later
        tasksArray.forEach(task => {
            const taskHTML = domObject.taskComponent(task)
            document.querySelector(".tasksList").innerHTML += taskHTML
        })

    },

    eventsList(eventsArray) {
            // **TEST DATA - delete later
            const eventsArray = [{
                name: "test1",
                date: "2020-06-05"
            }, {
                name: "test2",
                date: "2020-05-04"
            }, {
                name: "test3",
                date: "2020-06-21"
            }]
            // **

            eventsArray.sort((event1, event2) => new Date(event2.date) - new Date(event1.date))
            console.log(eventsArray) // Remove this line later
            eventsArray.forEach(event => {
                const eventHTML = domObject.eventComponent(event)
                document.querySelector(".eventsList").innerHTML += eventHTML
            })
    },

    articlesList(articlesArray) {

    },

    friendsList(friendsArray) {

    }
}
export default renderToDom