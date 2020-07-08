/* Object with methods to render each section's items to the DOM

Main object by David Larsen */ 

const domObject = {
    // Message Component by David Larsen
    messageComponent(messageObject) {
        let editButtonHTML = ""
        
        // Apply edit button HTML only to the current user's messages
        if (messageObject.userId === parseInt(sessionStorage.getItem("currentUser"))) {
            editButtonHTML = `<button type="button" id="editMessage--${messageObject.id}" class="dashboardButton">Edit</button>`
        } 
        
        // HTML to be rendered to the DOM
        return `<section class=messageList__item">
        <span class="List__Item__Input">
        <p><strong><a class ="messagesList__Item__User" href="#friendsRequestAlert">${messageObject.user.username}</a></strong>--${messageObject.message}</p>
        </span>
        <span class="messageButton">
        ${editButtonHTML}
        </span>
        </section>`
    },
   
    //Sisi -start (tasks component representation)
    taskComponent(taskObject) {
        
        const taskHTMLRepresentation = `
        <section class="tasksList__Item">
                    <div class="tasksList__Item__Content">
                        <label for="tasksListCompletedCheckbox">Completed</label>
                        <input type="checkbox" value="false" id="tasksListCompletedCheckbox--${taskObject.id}">
                        <p class="tasksList__Item__DueDate">${taskObject.dueDate}</p>
                        <p class="tasksList__Item__Input">${taskObject.name}</p>
                    </div>
                        
                    <div>
                        <button type="button" id="tasksDeleteButton--${taskObject.id}">Delete Task Button</button>
                    </div>
        </section>
        `
        return taskHTMLRepresentation
    },
   
        
    
    //Sisi- end (task)

    eventComponent(eventObject) {
        const eventElement =
        `
        <section class="eventsList__Item">
            <div class="eventsList__Item__Content">
                <p><strong>Event:</strong>  ${eventObject.name}</p>
                <p><strong>Location:</strong>  ${eventObject.location}</p>
                <p><strong>Date:</strong>  ${eventObject.eventDate}</p>
            </div>
            <div>
                <button type="button" id="eventsDeleteButton--${eventObject.id}">Delete</button>
            </div>    
        </section>
    `
    return eventElement
    },

    //Article HTML Generator
    //Created by Brett Stoudt
    articleComponent(articleObject) {
        const articleElement =
        `
            <section class="articlesList__Item">
                <div class="articlesList__Item__Content">
                    <p><strong>News Title:</strong>  ${articleObject.title}</p>
                    <p><strong>Synopsis:</strong>  ${articleObject.synopsis}</p>
                    <a><strong>Link:</strong>  </a><a href="http://${articleObject.url}" target="_blank">Full Story!</a>
                </div>
                <div>
                    <button type="button" id="articlesDeleteButton--${articleObject.id}">Delete</button>
                </div>    
            </section>
        `
        return articleElement

        
    },

    // Friend component by David Larsen
    friendComponent(friendObject) {
        // HTML for each friend to be rendered to the DOM
        return `<section class = "friendsList__Item">
            <!-- SINGLE USER NAME ..... ADD EMAIL AS STRECH GOAL?-->
            <div class="friend__name">
                <p>${friendObject.user.username}
            <!-- SINGLE FRIENDS DELETE BUTTON -->
            <div>
                <button type="button" class="dashboardButton" id="deleteFriend--${friendObject.id}">Delete Friend</button>
            </div>
            </section>`
    }
}

export default domObject
