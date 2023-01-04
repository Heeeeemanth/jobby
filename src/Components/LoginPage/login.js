import '../LoginPage/login.css'


const LoginPage = () => {

    return <>
<div className='bg-container'>
<form className='inner-login-container' >
<img className='loginpagelogo' src='https://assets.ccbp.in/frontend/react-js/logo-img.png' alt='https://assets.ccbp.in/frontend/react-js/logo-img.png'/>
<div className='username'>
    <label className='userlabel' for='username'>USERNAME</label>
    <input className='username-bar' id='username' type='text' placeholder='Username'/>
</div>
<div className='password'>
    <label className='passwordlabel' for='password'>PASSWORD</label>
    <input className='Passsword-bar' id='password' type='password' placeholder='Password'/>
</div>
<button className='loginBtn'>Login</button>
</form>
</div>
    </>
}

export default LoginPage