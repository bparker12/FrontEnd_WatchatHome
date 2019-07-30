import * as firebase from 'firebase/app'
import "firebase/auth"
import APIManger from "../../Modules/APIManager"

//this sets the sessionStorage with the info pulled from json or firebase
export const setSessionStorage = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
}

//this allows the registered user to take the user info and post it to the database
const userToJson = (user) => {
    APIManger.post("users", user)
    .then(newUser => {
        setSessionStorage(newUser)
        return newUser
    })
}

export const loginFunc = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(data => data.user.uid)
    .then(userId => APIManger.get("users",userId)
    .then(user => {
          setSessionStorage(user)
          return user
        })
    )
}


//this function pushes up the registration info to firebase, then takes the ID that firebase generates and returns, and uses it to push into session storage. Also deletes the password before it is stored in sessionStorage
export const registerFunc = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(data => data.user.uid)
    .then(userId => {
        user.id = userId
        delete user.password
        return userToJson(user)
    })
}
