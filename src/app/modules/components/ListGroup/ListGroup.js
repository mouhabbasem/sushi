import React, {useState, useEffect} from 'react'
import ListGroupItem from '../ListGroupItem/ListGroupItem'
import TickMark from '../../../../assets/media/icons/tick-mark.png';
import Info from '../../../../assets/media/icons/info.png';

function ListGroup({item}) {
    const [isReachedMax, setIsReachedMax] = useState(false)
    const [localMax, setLocalMax] = useState(0)
    const [firstTimeNote, setFirstTimeNote] = useState(true)
    const [showNote, setShowNote] = useState(false)
    useEffect(() => {
        if(localMax === item.max) {
            setIsReachedMax(true)
        } else {
            setIsReachedMax(false)
        }
    }, [localMax, item.max])


    return (
        <div className={`list-group ${showNote ? 'show-note' : ''}`}>
            <div className={`list-group-item ${isReachedMax ? 'done' : ''}`}>
                <div className='list-group-item-head'>
                    <div className='list-group-item-head-title'>
                        <strong> {item.name} </strong>
                        <div className='list-group-head-info'>
                            <img src={Info} alt="info" />
                            <span>Item adds in multiples of {item.counter} pieces.</span>
                        </div>
                    </div>
                    
                    <span>Select a minimum and maximum {item.max} pieces.</span>
                    
                    {
                        isReachedMax
                        ?   <img src={TickMark} className='filled-icon' alt="filled" />
                        :   null
                    }
                </div>
                <div className='list-group-item-body'>
                    <ul className='list-group-item-grid'>
                        {
                            item.pieces.map(piecesItem => {
                                return (
                                    <ListGroupItem 
                                        key={piecesItem.id} 
                                        data={piecesItem} 
                                        counter={item.counter} 
                                        max={item.max}
                                        isReachedMax={isReachedMax}
                                        setLocalMax={setLocalMax}
                                        setShowNote={setShowNote}
                                        firstTimeNote={firstTimeNote}
                                        setFirstTimeNote={setFirstTimeNote}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListGroup
