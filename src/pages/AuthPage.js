import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/login-register.css';

const AuthPage = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const { user, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                toast.error(error.message); // Display error message using React-Toastify
            } else {
                const { user, error: accountError } = await supabase
                    .from('accounts')
                    .insert([{ username, email, password, role: 'user' }]);

                if (accountError) {
                    toast.error(accountError.message); // Display error message using React-Toastify
                } else {
                    console.log('User signed up successfully:', user);
                    navigate('/');
                }
            }
        } catch (error) {
            console.error('Error signing up:', error.message);
            toast.error('An error occurred during sign-up. Please try again.'); // Display error message using React-Toastify
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            // Fetch user data based on username
            const { data: userData, error: userError } = await supabase
                .from('accounts')
                .select('email, password')
                .eq('username', username)
                .single();

            if (userError || !userData) {
                toast.error('Invalid username or password.');
            } else {
                // Use Supabase's signIn method with retrieved email and password
                const { data: { user }, error } = await supabase.auth.signInWithPassword({
                    email: userData.email,
                    password,
                });

                if (error) {
                    toast.error(error.message);
                } else {
                    console.log('User signed in successfully:', user);
                    // Redirect to dashboard or home page after successful sign-in
                    navigate('/'); // Change the route as per your app's navigation
                }
            }
        } catch (error) {
            console.error('Error signing in:', error.message);
            toast.error('An error occurred during sign-in. Please try again');
        }
    };

    return (
        <>
            <div className={`authpage ${isSignUpMode ? 'sign-up-mode' : ''}`} id="particles">
                <div className="forms-container" id="webcoderskull">
                    <div className="signin-signup">
                        {/* Sign-in form */}
                        <form onSubmit={handleSignIn} className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        {/* Sign-up form */}
                        <form onSubmit={handleSignUp} className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={() => setIsSignUpMode(true)}>
                                Sign up
                            </button>
                        </div>
                        <img src="" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={() => setIsSignUpMode(false)}>
                                Sign in
                            </button>
                        </div>
                        <img src="" className="image" alt="" />

                        {/* ToastContainer for displaying Toast notifications */}
                        <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
