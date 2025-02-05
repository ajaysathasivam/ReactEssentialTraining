import { useNavigate } from "react-router-dom";
import "./UserPage.scss";
import { useEffect } from "react";
export const UserPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName !== "admin" && userName !== "user") {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div className="container">
      <div className="welcome">
        <p>Welcome to user * *</p>
        <div>
          <button
            onClick={() => {
              localStorage.setItem("userName", null);
              navigate("/");
            }}
          >
             Log out
          </button>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          asperiores expedita, voluptas ad accusantium temporibus ipsam corporis
          odio voluptatem sunt veritatis natus vitae et placeat qui optio
          exercitationem eum ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          asperiores expedita, voluptas ad accusantium temporibus ipsam corporis
          odio voluptatem sunt veritatis natus vitae et placeat qui optio
          exercitationem eum ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          asperiores expedita, voluptas ad accusantium temporibus ipsam corporis
          odio voluptatem sunt veritatis natus vitae et placeat qui optio
          exercitationem eum ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          asperiores expedita, voluptas ad accusantium temporibus ipsam corporis
          odio voluptatem sunt veritatis natus vitae et placeat qui optio
          exercitationem eum ipsum.
        </p>
      </div>
    </div>
  );
};
