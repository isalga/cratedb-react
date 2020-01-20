import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

export const useRequestTables = () => {
  const [tables, setTables] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      axios.post(API_URL, {
        "stmt" : "show tables" 
        })
        .then(res => {
            setLoading(false);
            setTables(res.data.rows);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        })
    };
    if (!tables) fetchData();
  });

  return [{ tables, loading, error }];
};

export const useRequestTableContent = (table) => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
  
        axios.post(API_URL, {
          "stmt" : `select * from ${table}`
          })
          .then(res => {
              setLoading(false);
              setContent(res.data);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          })
      };
      fetchData();
    }, [table]);
  
    return [{ content, loading, error }];
  };