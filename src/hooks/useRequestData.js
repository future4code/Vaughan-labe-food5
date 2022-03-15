import { useEffect, useState } from "react";
import axios from "axios";

export function useRequestData(url) {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  useEffect(() => {
    getData(url);
    },[url]);


  const getData = (url) => {

    setLoading(true);
    axios
      .get(url, {
          headers: {
              auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjMzMy44ODguNjY2LTQ0IiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IkJhbmFuaW5oYSwgOTgsIDY1IC0gQmFuYW5pbmhhIiwiaWF0IjoxNjQ3MjgyNjIxfQ.YO915QIkhl_oo-TgoxxKnBncYZx0z5Odwzvl5BcjZtM"
            // auth: window.localStorage.getItem("token")
          }
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return [data, isLoading, error, getData];
};