import { GoogleLogout } from "react-google-login";

const clientId = "1084806664064-53fo8kkrt9c9gfql0eo58rkie8nhkdhl.apps.googleusercontent.com"

function Logout() {
    const onSuccess = () => {
        console.log("Log Out Successfully!")
    }
    return (
        <div id="signout">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;