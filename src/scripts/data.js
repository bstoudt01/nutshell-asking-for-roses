
const API = {
    // Sisi User GET and POST calls
   
    //GET function that gets all the user information from database
    getUserLogin() {
        return fetch("http://localhost:8088/users")
            .then((response) => {
                return response.json()
            })
           
    },
    getUsersArray() {
        return this.usersArray
    },
    //POST function that saves object to the API
    saveUserLogin(userObj) {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
    },
    // async/await fetch
    //array to pass the fetched task objects from database 
    userTaskArray: [],

    async fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();
    data.filter(tasks => tasks.userId)
    this.userTaskArray = data
    console.log(this.userTaskArray)
  },

    // Tasha Lane created API fetch calls

    getArticlesData: () => {
        return fetch("http://localhost:8088/articles")
            .then(articles => articles.json())
    },
    getEventsData: () => {
        return fetch("http://localhost:8088/events")
            .then(events => events.json())
    },

    getTasksData: () => {
        return fetch("http://localhost:8088/tasks")
            .then(tasks => tasks.json())
    },
    getFriendsData: () => {
        return fetch("http://localhost:8088/friends")
            .then(friends => friends.json())
    },

    getMessagesData: () => {
        return fetch("http://localhost:8088/messages?_expand=user")
            .then(messages => messages.json())
    },

    newArticlesEntry: (articlesObject) => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(articlesObject),
        });
    },

    newEventsEntry: (eventsObject) => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventsObject),
        });
    },

    newTasksEntry: (tasksObject) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(tasksObject),
        });
    },

    newFriendsEntry: (friendsObject) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friendsObject),
        });
    },
    newMessagesEntry: (messagesObject) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messagesObject),
        });
    },

    // Sisi (delete for task)
    deleteTaskEntry (taskEntryId) {
        return fetch(`http://localhost:8088/tasks/${taskEntryId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    //edit completed property
    updateTaskCompletion (taskEntryId, taskObject) {
        return fetch(`http://localhost:8088/tasks/${taskEntryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(taskObject)
            })
        },

    editMessage: (messageObject, messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        });
    }
}
export default API


