import {
    useState,
    createContext,
    useEffect,
} from "react";

export const ProfilesContext = createContext();

export default function ProfilesProvider(props) {
    const [profiles, SetProfiles] = useState([]);
    const [currentUser, SetCurrentUser] = useState([]);

    useEffect(() => {
        SetProfiles(() => {
            if (JSON.parse(sessionStorage.getItem('profiles')))
                return JSON.parse(sessionStorage.getItem('profiles'));
            else return []
        })
        SetCurrentUser(() => {
            if (sessionStorage.getItem('currentUser'))
                return JSON.parse(sessionStorage.getItem('currentUser'))
            else return null
        })
    }, [])

    const AddProfile = (profile) => {
        if (!CheckIfExists(profile) && CheckPasswordAndPasswordConfirmation(profile)) {
            SetProfiles((currentProfiles) => [...currentProfiles, profile]);
            sessionStorage.setItem('profiles', JSON.stringify(profiles))
            return true;
        }
        else
            return false;
    }

    const CheckPasswordAndPasswordConfirmation = (profile) => {
        if (profile.password === profile.passwordConfirmation)
            return true
        else return false
    }

    const CheckIfCurrentUser = () => {
        if (currentUser !== null) return true
        else return false
    }

    const CheckIfExists = (profile) => {
        if (profiles.some(tempProfile => profile.email === tempProfile.email))
            return true;
        else return false;
    }

    const RemoveProfile = (profile) => {
        const allUsers = profiles.filter(item => item.email !== profile.email)
        SetProfiles(allUsers);
        sessionStorage.setItem('profiles', JSON.stringify(allUsers))
    }

    const UpdateProfile = (event, profile, oldUser) => {
        event.preventDefault();
        SetCurrentUser(profile);
        //sessionstorge
        let allUsers = profiles.map(item => {
            if (item.email === oldUser.email)
                item = profile
            return item
        })
        SetProfiles(allUsers)
        sessionStorage.setItem('profiles', JSON.stringify(allUsers))
    }

    const FindProfile = (profile) => {
        return profiles.find((item) => item.email === profile.email)
    }

    const FindProfileByEmailAndPassword = (email, password) => {
        SetCurrentUser(profiles.find((profile) => profile.email === email && profile.password === password));
        return profiles.find((profile) => profile.email === email && profile.password === password)
    }

    return (
        <ProfilesContext.Provider value={{ profiles, currentUser, SetProfiles, SetCurrentUser, AddProfile, FindProfile, UpdateProfile, FindProfileByEmailAndPassword, RemoveProfile, CheckPasswordAndPasswordConfirmation, CheckIfCurrentUser }}>
            {props.children}
        </ProfilesContext.Provider>
    )
}
