
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
    // Get friends data. Tasha Lane and David Larsen
    getFriendsData: (currentUserId) => {
        return fetch(`http://localhost:8088/friends?followingId=${currentUserId}&_expand=user`)
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

    // Delete friend entry by David Larsen
    deleteFriendEntry: (friendId) => {
        return fetch(`http://localhost:8088/friends/${friendId}`, {
            method: "DELETE"
        })
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
     //responsible for running after the article delete button is clicked
         //created by Brett Stoudt
     deleteArticleEntry: (id) => {
        return fetch(`http://localhost:8088/articles/${id}`, {
            method: "DELETE",
        }).then(response => response.json())
            .then(response => response)
    },
    //responsible for running after events delete button is clicked
         //created by Brett Stoudt
         deleteEventsEntry: (id) => {
            return fetch(`http://localhost:8088/events/${id}`, {
                method: "DELETE",
            }).then(response => response.json())
                .then(response => response)
        },

    // Sisi (delete for task)
    deleteTaskEntry (taskEntryId) {
        return fetch(`http://localhost:8088/tasks/${taskEntryId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    //edit completed property
    updateTaskCompletion (taskEntryId, taskObj) {
        return fetch(`http://localhost:8088/tasks/${taskEntryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(taskObj)
            })
        },

    // Edit message call by David Larsen
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


