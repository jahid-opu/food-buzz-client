import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)

}

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleClick = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { userName: displayName, email }
                console.log(signedInUser)
                setLoggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log((errorMessage));
            });

    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token',idToken);
            history.replace(from);
        }).catch(function (error) {
            // Handle error
        });

    }
    return (
        <div className = "login-area">
            <button className="btn btn-primary" onClick={handleClick}>Continue with Google</button>
        </div>
    );
};

export default Login;