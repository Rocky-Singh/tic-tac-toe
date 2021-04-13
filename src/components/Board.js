import React, {useState} from 'react'
import './Board.css'
import {Grid} from 'semantic-ui-react'
const Board = () => {
    const initialState = ["","","","","","","","",""];
    const [cellValues, setCellValues] = useState(initialState)
    const [count, setCount] = useState(0)

    const isEqual = (x,y,z) => x===y ? y===z ? true : false : false;
    const isNotEmpty = (x,y,z) => x==='' || y==='' || z==='' ? false : true;

    const winningConditions = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7],
    ]

    const checkWinner = () => {  
        winningConditions.forEach((condition,idx)=>{
            let a = cellValues[condition[0]-1];
            let b = cellValues[condition[1]-1];
            let c = cellValues[condition[2]-1];
            if(isNotEmpty(a,b,c) && isEqual(a,b,c)){
                console.log(a + " Wins")
                setCellValues([...initialState])
            }
        })
    }
    
    const onCellTap = (e) => {
        const idx = e.target.id-1;
        let newCellValues = cellValues
        newCellValues[idx] = newCellValues[idx]==="" ? count%2 ? "0" : "X" : newCellValues[idx]
        setCellValues([...newCellValues])
        setCount(count+1)
        checkWinner()
    }

    return (
        <div className="board">
              <div className="grid-container">
                { cellValues.map((cellValue, idx) => {
                    return(
                        <div 
                        id={idx+1} 
                        className="grid-item" 
                        key={idx} 
                        onClick={onCellTap}> {cellValue} 
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Board
