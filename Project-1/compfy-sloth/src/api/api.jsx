import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data", {
          signal: controller.signal,
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();

    // Cleanup to abort the request
    return () => controller.abort();
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}

export default FetchData;
