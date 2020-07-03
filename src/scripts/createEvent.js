//Module creates single news article objects from user input in new article form 
//and saves to database.

const createEventObject = (name, location, eventDate) => {
    return {
       "userId": parseInt(sessionStorage.getItem("currentUser")),
        name,
        location,
        eventDate,
    }
}

export default createEventObject