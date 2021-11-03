import React,{useContext,useState, useEffect} from 'react'
import {Loading} from '../components/loading'
import SelectProfileContainer from './profile'
import {FirebaseContext} from '../context/firebase'

export const BrowseContainer = ({slides}) => {
    const [profile, setProfile] = useState({})
    const [ loading, setLoading]= useState(true)
    const {firebase} = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {}

    console.log(user.photoURL)

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
       
    }, [profile.displayName])

    return profile.displayName? (
        loading?( 
        <Loading src={user.photoURL}/>)
        : <Loading.ReleaseBody/>)
        : (<SelectProfileContainer user={user} setProfile={setProfile}/>)
    
        
}

export default BrowseContainer
