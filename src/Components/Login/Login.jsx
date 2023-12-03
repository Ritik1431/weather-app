import { GoogleLogin } from 'react-google-login';
import './Log.scss'
const clientId = "1084806664064-53fo8kkrt9c9gfql0eo58rkie8nhkdhl.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user : ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("LOGN FAILED! res: ", res);
    }
    return (
        <div id='signin'>
            <GoogleLogin 
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy='single_host_origin'
                isSignedIn={true}
                className="google-login-button"
            />
        </div>
    )
}

export default Login;