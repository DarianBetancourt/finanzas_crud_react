import React, {useEffect} from 'react';
import GridItem from '../GridItem/GridItem';
import "./Grid.css";

const Grid = ({transactions, handleDelete}) => {

    useEffect(() => {
      console.log(transactions)
    }, [])
    
  return (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>Descripción</th>
                    <th>Valor</th>
                    <th>Tipo</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {transactions?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={handleDelete} />
                ))}
            </tbody>
    </table>

    </div>
  )
}

export default Grid