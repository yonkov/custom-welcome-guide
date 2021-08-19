import { useEffect, useState } from 'react';

export const getPosts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
    const response = await fetch('/wp-json/wp/v2/guides');
    const json = await response.json();
    setData(json);
   };
   getData();
  }, []);

  return data;
 };

export default getPosts;