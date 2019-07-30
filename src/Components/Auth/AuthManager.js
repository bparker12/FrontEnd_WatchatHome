import * as firebase from 'firebase/app'
import "firebase/auth"
import APIManger from "../../Modules/APIManager"

const setSessionStorage = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
}

const userToJson = (user) => {
    APIManger.post("users", user)
    .then(newUser => {
        setSessionStorage(newUser)
        return newUser
    })
}

export const registerFunc = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(data => data.user.uid)
    .then(userId => {
        user.id = userId
        delete user.password
        return userToJson(user)
    })
}
