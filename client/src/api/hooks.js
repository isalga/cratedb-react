import { useState, useEffect } from 'react';
import axios from 'axios';

const api_url = `http://localhost:4200/_sql`;

export const useRequestTables = () => {
  const [tables, setTables] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);
      // Next line mocking how a correnct response would lock. Should be removed in final implementation
      setTables([['wardrobe'], ['fridge'], ['shelve']]);

      axios.post(api_url, {
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
    if (!tables && !error) fetchData();
  });

  return [{ tables, loading, error }];
};

export const useRequestTableRows = (table) => {
    const [rows, setRows] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
  
        setLoading(true);
        // Next line mocking how a correnct response would lock. Should be removed in final implementation
        setRows([[1,'red tshirt'], [2,'black tshirt'], [3,'jeans'], [4,'sweatpants'], [5,'black dress']]);
  
        axios.post(api_url, {
          "stmt" : `select * from ${table}`
          })
          .then(res => {
              setLoading(false);
              setRows(res.data.rows);
          })
          .catch(err => {
            setError(err);
            setLoading(false);
          })
      };
      if (!rows && !error) fetchData();
    });
  
    return [{ rows, loading, error }];
  };