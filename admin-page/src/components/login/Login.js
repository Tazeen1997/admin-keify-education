import React, {useState} from 'react'
import './Login.css';

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [checked,setChecked] = useState(false);
    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [successMsg,setSuccessMsg] = useState("");
    const [allEntry,setAllEntry] = useState([]);
    const submitForm = (e) =>{
        e.preventDefault();
        const newEntry ={email,password,checked};
       setAllEntry([...allEntry,newEntry]);
        //checking if email is empty
        if(email!==''){
           //check some other condition
           const emailRegex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
             if(emailRegex.test(email)){
                   setEmailError('');
                   if(email==='admin@demo.com'){
                    setEmailError('');
                     if(password!=='demo'){

                     }
                     else{
                         setPasswordError('Password does not match with the email address');
                     }
                   }else{
                       setEmailError('Email does not match with our database')
                   }
             }else{
                 setEmailError('Invalid Email');
             }
        }else{
            setEmailError('Email is Required');
        }
     
      //checking if password is empty
      const passwordRegex=/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g;
      if(password!==''){
        if(passwordRegex.test(password)){
            setPassword('');
           if(password.length>8&&password.length<12){
                   setPassword('');
           }else{
               setPasswordError('Password must contain min 8 and maximum 12 charecters');
           }
        }else{
            setPasswordError('Password should contain 1 Lower case,1 upper case and 1 symbol');
        }
      }else{
          setPasswordError('Password is Required');
      }
       setEmail("");
       setPassword("");
       setChecked(false);
    }
    const handleEmailChange =(e)=>{
        setSuccessMsg('');
        setEmailError('');
        setEmail(e.target.value);
    }
    const handlePasswordChange =(e)=>{
        setSuccessMsg('');
        setPasswordError('');
        setPassword(e.target.value);
    }
    return (
        <div className='main__container'>
            <div className='login__container'>
                <h2>LOGIN</h2>
                <form  onSubmit={submitForm}>
                <div className="icon">
                <i class="fal fa-envelope" aria-hidden="true"></i>
              <input type="text" placeholder="Enter Your Email" className="name"
               name="email" id="email" autoComplete="off" value={email}
               onChange={handleEmailChange}/>
             
               {emailError&&<div className='error-msg'>{emailError}</div>}

                </div>
                <div className="icon">
                <i class="fas fa-lock-alt"></i>
               <input type="password" placeholder="Enter Your Password" className="name " 
               name="password" id="password"  autoComplete="off" value={password}
               onChange={handlePasswordChange}/>
                <span className="password__eye"><i class="fal fa-eye"></i></span>
              {passwordError&&<div className='error-msg'>{passwordError}</div>}
              
                </div>
                 <div className="login__checkbox">
                     <label className="custom__checkbox">
                    <input type="checkbox" value="Remember Me" id="remember me"  name="remember me"
                    name="checked" id="checked" value={checked}
                    onChange={(e)=>setChecked(true)}/>
                    <span className="checkmark"></span>
                    </label>
                    <label htmlFor="remember me">Remember Me</label>
                    <p className="forget__link">Forget Password</p>
                </div>         
                                    
                <div>
                    <button type="submit">Log In</button>
                </div>
                <div className="login__checkbox">
                    <p>Or<span className="website__link">visit website</span></p>
                    <p className="forget__link register__link">Sign Up!</p>
                </div>   
                </form>
            </div>
        </div>
    )
}

export default Login
