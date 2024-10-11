import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { api } from "../config/api";

const GoogleLoginButton = () => {
  const handleGoogleLoginSuccess = async (tokenResponse) => {
    const accessToken = tokenResponse.credential;

    try {
      const response = await fetch(`${api}/google/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ access_token: accessToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in");
      }

      const data = await response.json();
      Cookies.set("accessToken", data.access);
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleLoginFailure = (error) => {
    console.error("Google login failed:", error);
  };

  return (
    <GoogleOAuthProvider cclientId="776566559514-jimegjvclu9tmv4p4j6fn13v1gsjrsdm.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={handleGoogleLoginFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
