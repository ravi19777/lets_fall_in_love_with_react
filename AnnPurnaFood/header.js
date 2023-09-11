import { useState } from 'react';
import logo from './images/logo.png';

import './index.css';

const Header = () =>
{

    const [signin,setSignin] = useState("Sign in");

    // const signinfunction = () =>
    // {
    //     if(signin === "Sign in")
    //     {
    //         setSignin("Sign out");
    //     }
    //     else
    //     {
    //         setSignin("Sign in");
    //     }
    // }

    return(
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="link-container">
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Food</a>
                        </li>
                        <li>
                            <a href="">Cities</a>
                        </li>
                        <li>
                            <a href="">Cart</a>
                        </li>
                        <li onClick={(e) =>
                            {
                                e.preventDefault();
                                signin === "Sign in" ? setSignin("Sign out") : setSignin("Sign in");
                            }}>
                            <a href="">{signin}</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Header;