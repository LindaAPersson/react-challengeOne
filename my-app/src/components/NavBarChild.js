import React from "react";

function NavBarChild(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text"></input>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password"></input>
                        <input type="submit" onClick={props.handleClick}></input>

                    </form>

                </div>
            ) : (
                <div>
                    <p>Please sign in</p>
                    <button onClick={props.handleClick}>Sign in</button>
                </div>
            )}
        </div>
    );
}

export default NavBarChild;