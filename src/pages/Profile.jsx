import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../config/api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
  }, [accessToken, navigate]);

  const fetchUserProfile = async () => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.get(`${api}/users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data);
        console.log("Response data", response.data);
      }
    } catch (error) {
      console.error("Error fetching user profile", error);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="profile-section">
      <h1>User Profile</h1>
      {user ? (
        <div className="profile-details">
          <p>
            <strong>First Name:</strong> {user.name}
          </p>
          <p>
            <strong>Last Name:</strong> {user.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone Number:</strong> {user.phone_number}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default Profile;
