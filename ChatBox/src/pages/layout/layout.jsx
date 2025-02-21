import React, { useState } from "react";
import Client from "../client/client";
import Admin from "../admin/admin";

const Layout = () => {
  const [messChats, setMessChats] = useState([
    {
      user_id: 1,
      messages: [
        {
          mess: "Hi",
          sendBy: "admin",
        },
        {
          mess: "hellow",
          sendBy: "user",
        },
      ],
    },
    
  ]);

  const usersList = [
    {
      id: "1",
      name: "Ajay",
      email: "ajay@test.com",
    },
    {
      id: "2",
      name: "Dharshan",
      email: "dharshan@test.com",
    },
  ];
  // style obj
  const inlineStyle = {
    fullHeight: { height: "100vh" },
  };
  return (
    <>
      <div className="container" style={inlineStyle.fullHeight}>
        <div className="row h-100 my-2">
          <div className="col border">
            <Admin usersList={usersList} messages={messChats} setMessages={setMessChats} />
          </div>
          <div className="col border ">
            <Client usersList={usersList} messages={messChats} setMessages={setMessChats}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
