import React from 'react';
import { useParams } from "react-router-dom";
import { useRequestTableRows } from '../api/hooks';

const Items = () => {
  const { tableName } = useParams();
  const [{ rows, loading, error }] = useRequestTableRows(tableName);
  
  return (<>
            <h1>Items in {tableName}</h1>
            <ul>
              { rows && rows.map(item => (
                <li key={`item-intable-${tableName}-${item}`}>{item}</li>
              )) }
            </ul>
          </>);
};

export default Items;