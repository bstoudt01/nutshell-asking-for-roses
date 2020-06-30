import API from './data.js'
import userRegistration from './registration/registration.js'
import renderToDom from "./render.js"
import forms from './forms/allForms.js';
import taskFunctions from '../tasks/taskButtons.js';


userRegistration.clickRegistrationLink();
userRegistration.registrationFormValidator();
userRegistration.registeredUserLogin();


renderToDom.messagesList()
//you are changing this for task rendering (change back to active if not working)
// renderToDom.tasksList()
renderToDom.eventsList()

// forms.renderingTaskForm();
// forms.renderingEventForm();
// forms.renderingArticleForm();

renderToDom.articlesList()




const registrationContainer= document.querySelector("#registrationContainer")
const hiddenDashboard = document.querySelector("#dashboardContainer")
   hiddenDashboard.style.display = "none"
  
//place in main js
   //user requested to log out, reset DOM to registration page
   //***STILL REQUIRED clear user session from browser.***
const userLogOutRequest = document.querySelector(".logOutButton")
userLogOutRequest.addEventListener("click", event => { 
    hiddenDashboard.style.display = "none"
    registrationContainer.style.display = "block"

    
})

//invoke delete functionality for task buttons
taskFunctions.deleteTask();