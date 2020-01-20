import { useState, useEffect } from 'react';
import axios from 'axios';

export const useRequestTables = () => {
  const [tables, setTables] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true);
      setTables(['wardrobe', 'fridge', 'shelve']);

      axios.post(`http://localhost:4200/_sql`, {
        "stmt" : "show talbes" 
        })
        .then(res => {
            setLoading(false);
            //setTables(res);
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
        setRows(['red tshirt', 'black tshirt', 'jeans', 'sweatpants', 'black dress']);
  
        axios.post(`http://localhost:4200/_sql`, { "stmt" : `select * from ${table}` })
          .then(res => {
              setLoading(false);
              //setRows(res);
          })
          .catch(err => {
              console.log(err)
            setError(err);
            setLoading(false);
          })
      };
      if (!rows && !error) fetchData();
    });
  
    return [{ rows, loading, error }];
  };