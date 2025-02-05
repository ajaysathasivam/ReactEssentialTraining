// import { useNavigate } from "react-router-dom";
// import "./AdminPage.scss";
// import { useEffect, useState } from "react";
// const AdminPage = () => {
//   const [data, setData] = useState([]);
//   const [nofiMes, setError] = useState("");
//   const [updateFlag, setUpdateFlag] = useState(false);
//   const navigate = useNavigate();
//   const [editUser, setEditUser] = useState(null);
//   // protect route from user can direct access and redirect to root page
//   useEffect(() => {
//     const userName = localStorage.getItem("userName");
//     if (userName !== "admin") {
//       navigate("/");
//     }
//   }, [navigate]);
//   // fetch data form server initially
//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("http://localhost:3000/users");
//       if (res.ok) {
//         const data = await res.json();
//         setData(data);
//       }
//     }
//     fetchData();
//   }, []);
//   // Delete particular user data using id
//   async function handleDel(id) {
//     const method = {
//       method: "delete",
//     };
//     const res = await fetch(`http://localhost:3000/users/${id}`, method);
//     if (res.ok) {
//       setError("Record deleted successfully");
//       setData((pre) => pre?.filter((curr) => curr.id !== id));
//     }
//   }
//   const handleEditUser = (userName, id) => {
//     setEditUser({
//       username: userName,
//       id: id,
//     });
//     setUpdateFlag(true);
//   };
//   async function updateUser() {
//     console.log(editUser.userName, "user");
//     const method = {
//       method: "PUT",
//       body: JSON.stringify(editUser),
//     };
//     const res = await fetch(
//       `http://localhost:3000/users/${editUser.id}`,
//       method
//     );
//     if (res.ok) {
//       setError("Record updated successfully");
//       console.log("success");
//       setUpdateFlag(false);
//       setData((prev) =>
//         prev.map((curr) =>
//           curr.id === editUser.id
//             ? { ...curr, username: editUser.username }
//             : curr
//         )
//       );
//       localStorage.setItem("userName", editUser.username);
//     }
//   }
//   // trigger when onchange
//   const handleChange = (e, id) => {
//     const {  value } = e.target;
//     setEditUser((pre) => ({ ...pre, username: value, id: id }));
//   };
//   return (
//     <div className="container">
//       {nofiMes ? <div>{nofiMes}</div> : null}
//       <div className="welcome">
//         <p>Welcome to Admin * *</p>
//         <div>
//           <button
//             onClick={() => {
//               localStorage.setItem("userName", null);
//               navigate("/");
//             }}
//           >
//             Log out
//           </button>
//           <button
//             onClick={() => {
//               navigate("/newuser");
//             }}
//           >
//             New user?
//           </button>
//           <button
//             onClick={() => {
//               navigate("/user");
//             }}
//           >
//             Check User Page
//           </button>
//         </div>
//       </div>
//       {!!data?.length &&
//         data?.map((obj, idx) => (
//           <div className="userDetails-container" key={idx}>
//             <div>
//               {!updateFlag ? <p>{obj?.username}</p> : null}
//               {updateFlag ? (
//                 <input
//                   type="text"
//                   onChange={(e) => handleChange(e, obj.id)}
//                   name={`username[${idx}]`}
//                   value={editUser?.[obj?.username]}
//                   id={idx}
//                 />
//               ) : null}
//             </div>
//             <div>
//               {updateFlag ? (
//                 <button onClick={() => updateUser()}>Update</button>
//               ) : (
//                 <button onClick={() => handleEditUser(obj?.username, obj.id)}>
//                   Edit
//                 </button>
//               )}
//               <button onClick={() => handleDel(obj.id)}>Delete</button>
//             </div>
//           </div>
//         ))}
        
//     </div>
//   );
// };
// export default AdminPage;


import { useNavigate } from "react-router-dom";
import "./AdminPage.scss";
import { useEffect, useState } from "react";

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [nofiMes, setError] = useState("");
  const navigate = useNavigate();
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName !== "admin") {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/users");
      if (res.ok) {
        const data = await res.json();
        setData(data);
      }
    }
    fetchData();
  }, []);

  async function handleDel(id) {
    const method = {
      method: "delete",
    };
    const res = await fetch(`http://localhost:3000/users/${id}`, method);
    if (res.ok) {
      setError("Record deleted successfully");
      setData((pre) => pre?.filter((curr) => curr.id !== id));
    }
  }

  const handleEditUser = (user) => {
    setEditUser({ ...user }); // Set the current user to be edited
  };

  async function updateUser() {
    const method = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editUser),
    };
    const res = await fetch(`http://localhost:3000/users/${editUser.id}`, method);
    if (res.ok) {
      setError("Record updated successfully");
      setEditUser(null); // Reset edit mode
      setData((prev) =>
        prev.map((curr) =>
          curr.id === editUser.id ? { ...curr, username: editUser.username } : curr
        )
      );
      localStorage.setItem("userName", editUser.username);
    }
  }

  const handleChange = (e) => {
    setEditUser((prev) => ({ ...prev, username: e.target.value }));
  };

  return (
    <div className="container">
      {nofiMes ? <div>{nofiMes}</div> : null}
      <div className="welcome">
        <p>Welcome to Admin * *</p>
        <div>
          <button
            onClick={() => {
              localStorage.setItem("userName", null);
              navigate("/");
            }}
          >
            Log out
          </button>
          <button
            onClick={() => navigate("/newuser")}>New user?</button>
          <button
            onClick={() => navigate("/user")}>Check User Page</button>
        </div>
      </div>
      {!!data?.length &&
        data.map((obj) => (
          <div className="userDetails-container" key={obj.id}>
            <div>
              {editUser?.id === obj.id ? (
                <input
                  type="text"
                  onChange={handleChange}
                  value={editUser?.username || ""}
                />
              ) : (
                <p>{obj.username}</p>
              )}
            </div>
            <div>
              {editUser?.id === obj.id ? (
                <button onClick={updateUser}>Update</button>
              ) : (
                <button onClick={() => handleEditUser(obj)}>Edit</button>
              )}
              <button onClick={() => handleDel(obj.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AdminPage;

