import React from "react";

import "./Logout.css";
import { auth } from "./firebase";
function handleSignOut() {
  auth.signOut();
}
function Logout() {
  return (
    <div className="button">
      <button onClick={handleSignOut} className="sign-in">
        Sign-out
      </button>
    </div>
  );
}

export default Logout;
