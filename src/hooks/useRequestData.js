import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthToken } from "../constants/token";

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
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkEwMDVtSEJmeVNrdDdPTjBITGFwIiwibmFtZSI6ImFzdHJvZGV2MiIsImVtYWlsIjoiYXN0cm9kZXZAZnV0dXJlNC5jb20iLCJjcGYiOiIwMDg5NTU5OTk5OSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgQmFuYW5hcywgMiAtIEJhbmFuYWwiLCJpYXQiOjE2NDczNjczMTV9.kMEJC9zIPFoT8LbSGTVyGQ4rJbJOuEQKze9w-28qKJU"
              //auth: getAuthToken()
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
