import React, { useEffect } from "react";

const FetchCall = () => {
  useEffect(() => {
    async function fetchData(url) {
      const link = url;
      const response = await fetch(link);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
      }
    }
    fetchData("http://localhost:3000/users");
  }, []);
};

