import { createContext, useEffect, useState } from 'react';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db, auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const MyBlogContext = createContext()

const MyBlogProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([]);
    const [loggedInUser, setloggedInUser] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'))
    
            setUsers(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        ...doc.data()
                    }
                }
            }))
        }
        getUsers()
    }, [])

    useEffect(() => {
        const getPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'articles'))
         
            setPosts(querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: {
                        body: doc.data().body,
                        brief: doc.data().brief,
                        category: doc.data().category,
                        postLength: doc.data().postLength,
                        bannerImage: doc.data().bannerImage,
                        title: doc.data().title,
                        postedOn: doc.data().postedOn,
                        author: doc.data().author,

                    }
                }
            }))
        }
        getPosts()
    }, [])

    const addUserToFirebase = async user => {
        await setDoc(doc(db, 'users', user.email), {
            email: user.email,
            name: user.displayName,
            imageUrl: user.photoURL,
            followerCount: 5
        })
        console.log(user, 'firebase send data')
    }

    const handleUserAuth = async () => {
        const userData = await signInWithPopup(auth, provider);
        const user = userData.user
        console.log(user, 'user-data')

        // Check if the user is an admin
        if (user.email === 'eriancoet@gmail.com') {
            setloggedInUser(user);
            addUserToFirebase(user);
            console.log(user, 'loggedInUser')
        } else {
            console.log('Sorry, only admin can log in.')
        }
    }

    return (
        <MyBlogContext.Provider value={{ posts, users, handleUserAuth, loggedInUser }}>
             {children}
        </MyBlogContext.Provider>
    )
}

export  { MyBlogContext, MyBlogProvider }
