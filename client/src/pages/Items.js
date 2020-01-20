import React from 'react';
import { useParams } from "react-router-dom";
import { useRequestTableContent } from '../api/hooks';

const Items = () => {
  const { tableName } = useParams();
  const [{ content, loading, error }] = useRequestTableContent(tableName);
  let cols = null;
  let rows = null;

  if (content) {
    cols = content.cols;
    rows = content.rows;
  }

  if (loading) {
    return <p>loading...</p>
  }

  if (error) {
    return <p>Error loading table: {tableName}</p>
  }

  return (<>
            <h1>Items in {tableName}</h1>
            <table>
              <thead>
              <tr>
                { cols && cols.map(col => (
                  <th key={`table-${tableName}-column-${col}`}>{col}</th>
                ))}
              </tr>
              </thead>
              <tbody>
                { rows && rows.map(item => (
                  <tr key={`table-${tableName}-${item[0]}`}>
                    { item.map(itemCol => (
                      <td key={`table-${tableName}-${item[0]}-${itemCol}`}>
                        {itemCol}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </>);
};

export default Items;