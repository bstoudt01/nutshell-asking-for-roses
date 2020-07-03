import API from "./data.js"
import renderToDom from "./render.js"
import taskFunctions from '../scripts/tasks/taskButtons.js';
import tasksButtonFunctionality from "./tasks/taskButtonEvents.js";
import createArticleObject from "./createArticle.js"
import createMessageObject from "./createMessage.js"
import createEventObject from "./createEvent.js"
/* File created/refactored by David Larsen
    Original "load dashboard" code by Brett Stoudt
*/

// Hide the login page, show the dashboard
const loadDashboard = () => {
    const registrationContainer = document.querySelector("#registrationContainer")
    const hiddenDashboard = document.querySelector("#dashboardContainer")
    registrationContainer.classList.toggle("hidden")
    hiddenDashboard.classList.toggle("hidden")

    //FRIENDS
    // Queue current user ID
    const currentUserID = parseInt(sessionStorage.getItem("currentUser"))
    // Load individual data components into friends list
    API.getFriendsData(currentUserID)
    .then((friendsList) => renderToDom.friendsList(friendsList))
    .then(() => {
        document.querySelector(".friendsList").addEventListener("click", event => {
            if (event.target.id.startsWith("deleteFriend--")) {
                const friendIdToDelete = event.target.id.split("--")[1]
                API.deleteFriendEntry(friendIdToDelete)
                    .then(() => API.getFriendsData(currentUserID)
                    .then(friendsList => renderToDom.friendsList(friendsList)
                    )
                )
            }
        })
    })

    //MESSAGES
    API.getMessagesData().then(messagesCollection => renderToDom.messagesList(messagesCollection))
    .then(() => {
        // Save new message

        document.querySelector(".messagesSubmitButton").addEventListener("click", event => {
            let messageField = document.getElementById("messagesUserInput")
            let messageId = document.getElementById("messageId")
            const messageToSave = createMessageObject(messageField.value)

            // Check if message is new or edited
            if (messageId.value === "") {

                API.newMessagesEntry(messageToSave)
                    .then(() => API.getMessagesData()
                        .then(messagesCollection => {
                            // Clear the message blank and refresh messages list
                            messageField.value = ""
                            renderToDom.messagesList(messagesCollection)
                        }))

            } else {
                // Edited entry
                API.editMessage(messageToSave, messageId.value)
                    .then(() => API.getMessagesData()
                        .then(messagesCollection => {
                            // Clear the message blank and refresh messages list
                            messageField.value = ""
                            messageId.value = ""
                            renderToDom.messagesList(messagesCollection)
                        })
                    )
            }

        })

        // Edit existing message
        document.querySelector(".messagesList").addEventListener("click", event => {
            if (event.target.id.startsWith("editMessage--")) {
                const entryIdToEdit = event.target.id.split("--")[1]
                fetch(`http://localhost:8088/messages/${entryIdToEdit}`)
                    .then(response => response.json())
                    .then(entry => {
                        document.getElementById("messagesUserInput").value = entry.message
                        document.getElementById("messageId").value = entry.id
                    })
            }
        })
    })

    API.getTasksData().then((array) => {
      renderToDom.tasksList(array)})
      .then(() => {
          tasksButtonFunctionality()
          taskFunctions.taskEvents()
          taskFunctions.editTask()
      })

  
  API.getEventsData().then(eventsCollection => renderToDom.eventsList(eventsCollection));
         //when invoked, this function resets the events popup inputs by referencing the ID and reseting the value, 
    //currently used in events & articles form popup inside the events submit Button and article cancel Button event listeners.
    const clearEventInputs = () => {
      document.querySelector("#newEventName").value = "";
      document.querySelector("#newEventLocation").value = "";
      document.querySelector("#newEventDate").value = "";
    }

  const EventsListDeleteButton = document.querySelector(".eventsList")

    EventsListDeleteButton.addEventListener("click", (event) => {
   
      if (event.target.id.startsWith("eventsDeleteButton--")) {
        console.log("events delete button clicked");
        const eventsIdToDelete = event.target.id.split("--")[1];
        console.log("delete id", eventsIdToDelete);
        API.deleteEventsEntry(eventsIdToDelete)
        .then(API.getEventsData)
        .then((response) => renderToDom.eventsList(response))      
      } 
      
    })
    
     //Events Add Button to load user input form
    const eventsListAddButton = document.querySelector("#eventsAddButton")
    const hiddenEventForm = document.querySelector(".newEventContainer")
    eventsListAddButton.addEventListener("click", (event) => {
      hiddenEventForm.classList.toggle("hidden");
      hiddenEventForm.classList.add('is-open')
      console.log("add Events button clicked");
      })

    //Cancel adding a new Event for the New Event Popup form
    const cancelNewEvent = document.querySelector("#cancelNewEvent")
    cancelNewEvent.addEventListener("click", clickEvent => {
      const hiddenEventForm = document.querySelector(".newEventContainer")
      clearInputs()
      hiddenEventForm.classList.toggle("hidden");
      hiddenEventForm.classList.remove('is-open');
    })
      

    //Event Listener for Events Save Button on New Event Popup Form
    //Created by Brett Stoudt
    const NewEventSave = document.querySelector("#submitNewEvent")
    
    NewEventSave.addEventListener("click", (event) => {
      
      const newEventName = document.getElementById("newEventName").value
      const newEventLocation = document.getElementById("newEventLocation").value
      const newEventDate = document.getElementById("newEventDate").value
      //Article Form Submit Button 
      //Created by Brett Stoudt
        console.log("save button clicked");

        // verify all fields have something entered
        if ((newEventName === "") ||
          //console.log(articleURL)
          (newEventLocation === "") ||
          //console.log(articleTitle)
          (newEventDate === ""))
          //console.log(articleSynopsis)
          { 
            alert ("you forgot something")
            // if all fields have something entered we create a new article entry and POST it to the database
          } 
        else 
          {
            // variable that is equal to the response of a function invoked with paramaters that are set to the value of the html input boxes
              const eventEntrySubmit = createEventObject(newEventName, newEventLocation, newEventDate)
            //pass the new variable through the save "POST request"
            //.then return with a get request, which now includes the object submitted in the post request
            //.then take that response, clear the input fields, 
            //....and return the render object 
            API.newEventsEntry(eventEntrySubmit).then(() => {
              return API.getEventsData()
            })
            .then((allEventObjectsFromAPI) => {
              clearInputs()
              hiddenEventForm.classList.toggle("hidden");
              hiddenEventForm.classList.remove('is-open');
              return renderToDom.eventsList(allEventObjectsFromAPI)
            })   
            
          } 
    
  
    })  
          

  //Articles inital Fetch Request to Populate the Dashboard on inital load
  API.getArticlesData().then(articlesCollection => renderToDom.articlesList(articlesCollection));
            //when invoked, this function resets the events popup inputs by referencing the ID and reseting the value, 
    //currently used in articles form popup inside the events submit Button and article cancel Button event listeners.
    const clearArticleInputs = () => {
      document.querySelector("#newArticleTitle").value = "";
      document.querySelector("#newArticleURL").value = "";
      document.querySelector("#newArticleSynopsis").value = "";
    }

    //Articles Delete Button
    //created by Brett Stoudt
    const articlesListDeleteButton = document.querySelector(".articlesList")

    articlesListDeleteButton.addEventListener("click", (event) => {
   
      if (event.target.id.startsWith("articlesDeleteButton--")) {
        console.log("delete button clicked");
        const articleIdToDelete = event.target.id.split("--")[1];
        console.log("delete id", articleIdToDelete);
        API.deleteArticleEntry(articleIdToDelete)
        .then(API.getArticlesData)
        .then((response) => renderToDom.articlesList(response))      
      } 
      
    })
    //Article Add Button to load user input form
    //Created by Brett Stoudt
    const articlesListAddButton = document.querySelector("#articlesAddButton")
    const hiddenArticlesForm = document.querySelector(".newArticleContainer")
    articlesListAddButton.addEventListener("click", (event) => {
      hiddenArticlesForm.classList.toggle("hidden");
      hiddenArticlesForm.classList.add('is-open')
      console.log("add articles button clicked");
      })

    //Event Listener for Articles Save & Cancel Button on New Article Form
    //Created by Brett Stoudt
    const NewArticleSave = document.querySelector("#submitNewArticle")
    
    NewArticleSave.addEventListener("click", (event) => {
      
      const articleURL = document.getElementById("newArticleURL").value
      const articleTitle = document.getElementById("newArticleTitle").value
      const articleSynopsis = document.getElementById("newArticleSynopsis").value
      //Article Form Submit Button 
      //Created by Brett Stoudt
        console.log("save button clicked");

        // verify all fields have something entered
        if ((articleURL === "") ||
          //console.log(articleURL)
          (articleTitle === "") ||
          //console.log(articleTitle)
          (articleSynopsis === ""))
          //console.log(articleSynopsis)
          { 
            alert ("you forgot something")
            // if all fields have something entered we create a new article entry and POST it to the database
          } 
        else 
          {
            // variable that is equal to the response of a function invoked with paramaters that are set to the value of the html input boxes
              const articleEntrySubmit = createArticleObject(articleURL, articleTitle, articleSynopsis)
            //pass the new variable through the save "POST request"
            //.then return with a get request, which now includes the object submitted in the post request
            //.then take that response, clear the input fields, 
            //....and return the render object 
            API.newArticlesEntry(articleEntrySubmit).then(() => {
              return API.getArticlesData()
            })
            .then((allArticleObjectsFromAPI) => {
              clearArticleInputs()
              hiddenArticlesForm.classList.toggle("hidden");
              hiddenArticlesForm.classList.remove('is-open');
              return renderToDom.articlesList(allArticleObjectsFromAPI)
            })   
            
          } 
    
  
    })  
  //Article Form Cancel Button
  const cancelNewArticle = document.querySelector("#cancelNewArticle")
  cancelNewArticle.addEventListener("click", clickEvent => {
    clearArticleInputs()
    const hiddenArticlesForm = document.querySelector(".newArticleContainer")
    hiddenArticlesForm.classList.toggle("hidden");
    hiddenArticlesForm.classList.remove('is-open');
    })
  
  
}

export default loadDashboard