import React, { useState } from "react";
import Welcome from "../../components/welcome/welcome";
import MessageBox from "../../components/messageBox/messageBox";
import NotLogin from "../../components/notLogin/notLogin";

const initalState = {
  email: "",
};

const Client = ({ usersList, messages, setMessages }) => {
  const [logged, setLogged] = useState(false);
  const [user, setuser] = useState(null);

  const [formState, setFormState] = useState(initalState);

  const handleLogin = (e) => {
    e.preventDefault();
    const findUser = usersList?.find((curr) => curr.email === formState?.email);
    setuser(findUser);
    setLogged(true);
  };
  const handleLogout = () => {
    setuser(null);
    setLogged(false);
  };
  const ChatMessage = () => {
    const id = user?.id;
    const [text, setText] = useState("");
    const findUserMessage = messages?.find(
      (curr) => curr.user_id === parseInt(id)
    );

    const handleSubmit = () => {
      const updateMessage = [...messages];
      const findIdx = updateMessage?.findIndex(
        (curr) => curr.user_id === parseInt(id)
      );
      if (findIdx !== -1) {
        const newMessage = {
          mess: text,
          sendBy: "user",
        };
        (updateMessage[findIdx]["messages"] = [
          ...updateMessage?.[findIdx]?.["messages"],
          newMessage,
        ]),
          setMessages(updateMessage);
      } else {
        const newMess = {
          user_id: parseInt(id),
          messages: [
            {
              mess: text,
              sendBy: "user",
            },
          ],
        };
        setMessages([...updateMessage, newMess]);
      }
    };
    const style = {
      padding: "10px",
      border: "1px solid gray",
      cursor: "pointer",
      borderRadius: "5px",
      margin: "20px auto",
    };
    const userName = usersList?.find(
      (curr) => parseInt(curr.id) === parseInt(id)
    )?.name;
    return (
      <div style={style}>
        <h5>Hello {userName}</h5>
        {findUserMessage?.messages?.length &&
          findUserMessage?.messages?.map((curr, idx) => (
            <div key={idx} style={{ margin: "20px auto" }}>
              {curr.mess} ( {curr.sendBy === "admin" ? "admin" : userName})
            </div>
          ))}

        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  return (
    //  <>
    // {isLogin
    // ?
    //  <div className="row">
    //  <Welcome username={"Jon"}/>
    //  {/* <MessageBox message={[{userName:"jon",message:"message a jhon"}]} whoAmI={whoAmI} /> */}
    //   <div className="col">textBox with send</div>
    //  </div>
    // :
    // <NotLogin/>
    // }
    //  </>

    <>
      {!logged ? (
        <form onSubmit={handleLogin}>
          <h4> Login Form</h4>
          <input
            type="email"
            value={formState?.email}
            onChange={(e) =>
              setFormState((pre) => ({
                ...pre,
                email: e.target.value,
              }))
            }
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      ) : (
        <>
          {" "}
          <button onClick={() => handleLogout()}>Logout</button>
          <ChatMessage />
        </>
      )}
    </>
  );
};

export default Client;
