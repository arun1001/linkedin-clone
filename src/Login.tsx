import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "@firebase/auth";
import React, { MouseEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import "./Login.scss";
import {login} from './features/userSlice'
export const Login = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const profilePicRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch()
  const auth = getAuth();
  const register = () => {
    const name = nameRef.current?.value || '';
    const profilePic = profilePicRef.current?.value || '';
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(name);
    if (!name) {
      return alert("Please enter a valid name");
    }
    if (!email) {
      return alert("Please enter a valid email");
    }
    if (!password) {
      return alert("Please enter a valid password");
    }
   createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
     updateProfile(userAuth.user, {displayName: name, photoURL: profilePic}).then((data) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: name,
        photoUrl: profilePic,
      }))
     })
   }).catch((err => alert(err.message)));
  };
  const loginLinkedIn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email) {
      return alert("Please enter a valid email");
    }
    if (!password) {
      return alert("Please enter a valid password");
    }
    signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
    }).catch((err) => alert(err.message))
  };
  return (
    <div className="login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
        alt=""
      />
      <form>
        <input
          type="text"
          ref={nameRef}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          ref={profilePicRef}
          placeholder="Profile pic url (optional)"
        />
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="submit" onClick={(e) => loginLinkedIn(e)}>
          Sign in{" "}
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};
