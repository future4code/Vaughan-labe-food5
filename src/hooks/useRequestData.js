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
              auth: getAuthToken()
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
