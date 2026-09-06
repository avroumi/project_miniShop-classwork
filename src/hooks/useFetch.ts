import axios from "axios"
import { useEffect, useState } from "react"



  

const useFetch = <T ,>(url: string) => {
    const [data,setData] = useState<T| null>(null)
    const [loading,setLoading] = useState(true)
    const [error ,setError] = useState<string| null>(null)

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get<T>(url);
      setData(response.data);
    } catch (error) {
      setError("Something wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [url]);

return {
  data,
  error,
  loading,
};



}

export default useFetch