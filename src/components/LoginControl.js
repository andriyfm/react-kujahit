import React from "react";

import { Greeting } from "./basics/Greeting";
import { LogoutButton, LoginButton } from "./basics/Buttons";

const LoginControl = props => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  let button;

  if (isLoggedIn) {
    button = <LogoutButton onClick={() => setIsLoggedIn(false)} />;
  } else {
    button = <LoginButton onClick={() => setIsLoggedIn(true)} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
};

export default LoginControl;
