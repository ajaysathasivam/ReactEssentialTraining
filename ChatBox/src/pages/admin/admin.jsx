import React, { useState } from "react";

const Admin = ({ usersList, messages, setMessages }) => {
  const [chat, setChat] = useState("");

  const style = {
    padding: "10px",
    border: "1px solid gray",
    cursor: "pointer",
    borderRadius: "5px",
    margin: "20px auto",
  };

  const ChatMessage = ({ id }) => {
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
          sendBy: "admin",
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
              sendBy: "admin",
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
        <h5>Chat With {userName}</h5>
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
    <>
      <h4>Admin</h4>
      {usersList?.map((curr, idx) => (
        <div key={idx} style={style} onClick={() => setChat(curr.id)}>
          {curr.name}
        </div>
      ))}

      {chat && <ChatMessage id={chat} />}
      {/* <div className="row align-items-center">
        <div className="col-12">
          <h1 className="my-2">Hello Admin</h1>
        </div>
        {chat?
          <>
          <h1>he</h1>
          </>
        
        
        :usersList?.map((user) => (
          <Userlists
            username={user?.name}
            email={user?.email}
            id={user?.id}
            key={user?.id}
            onclick = {()=>setChat(user?.id)}
          />
        ))}
      </div> */}
    </>
  );
};

export default Admin;
