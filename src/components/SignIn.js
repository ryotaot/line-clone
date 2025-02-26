import React from "react";
import { Button } from "@mui/material";

const SignIn = () => {
  const SignInWithGoogle = () => {
    // Google認証を行う処理
  };

  return (
    <div>
      <Button onClick={SignInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
};

export default SignIn;
