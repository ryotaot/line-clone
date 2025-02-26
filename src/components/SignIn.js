import React from "react";
import { Button } from "@mui/material";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

const SignIn = () => {
  const SignInWithGoogle = () => {
    // Google認証を行う処理
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div>
      <Button onClick={SignInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
};

export default SignIn;
