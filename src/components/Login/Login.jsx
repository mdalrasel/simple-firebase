import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] =useState()
    const auth = getAuth(app);
    console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn =() =>{
        signInWithPopup( auth, googleProvider)
        .then(result =>{
            const loggedInUser =result.user;
            setUser(loggedInUser)
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }
    const handleGithubSingIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const loggedInUser =result.user;
            setUser(loggedInUser)
        })
        .catch(error =>{
            console.log('error', error.message)
        })
    }
    
    const handleGoogleSingOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="text-center mt-5">
            {   
                user?
                < button onClick={handleGoogleSingOut} className="border-2 border-red-900 px-4 py-2 text-red-700 ml-3"> Sign out</button>:
                <div className="space-x-4">
                    < button onClick={handleGoogleSingIn} className="border-2 border-red-900 px-4 py-2 text-red-700"> Google Login</button>
                    < button onClick={handleGithubSingIn} className="border-2 border-red-900 px-4 py-2 text-red-700"> Github login </button>
                   
                </div>
            }
           
            {user && <div>
                <h2>User: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img  src={user.photoURL} alt="" />
            </div>}
        </div>

    );
};

export default Login;