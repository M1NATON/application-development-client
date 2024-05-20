import {useAppSelector} from "../hooks/redux.ts";
import Profile from "../components/profile/Profile.tsx";
import Auth from "../components/profile/Auth.tsx";

const ProfilePage = () => {

    const {user} = useAppSelector(state => state.user)


    return (
        <div className={'mt-40'}>
            <div className="container">
                {
                    user ? (
                        <Profile/>
                    ) : (
                        <Auth/>
                    )
                }
            </div>
        </div>
    );
};

export default ProfilePage;