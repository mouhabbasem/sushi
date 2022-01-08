import React, {useState} from 'react'
import ListGroup from '../components/ListGroup/ListGroup'
import DownArrow from '../../../assets/media/icons/down-arrow.png';
import backGround from '../../../assets/media/icons/background.png';
import $ from 'jquery'; 
var savedBoxData = {
    id: 2,
    name: 'Large Box (30 Pieces)',
    price: 300.00,
    data: [
        {
            name: 'Nigiri Sushi',
            max: 12,
            counter: 3,
            id: 1,
            pieces: [
                {
                    id: 1,
                    name: 'Shrimp',

                },
                {
                    id: 2,
                    name: 'Salamon',

                },
                {
                    id: 3,
                    name: 'Tuna',

                },
                {
                    id: 4,
                    name: 'Octopus',

                }
            ]
        },
        {
            name: 'Ura Maki',
            max: 12,
            counter: 3,
            id: 2,
            pieces: [
                {
                    id: 1,
                    name: 'California',

                },
                {
                    id: 2,
                    name: 'Shrimp Tempura',

                },
                {
                    id: 3,
                    name: 'Togarashi',

                },
                {
                    id: 4,
                    name: 'Spider',

                }
            ]
        },
        {
            name: 'Ura Temaki',
            max: 6,
            counter: 2,
            id: 3,
            pieces: [
                {
                    id: 1,
                    name: 'Ikura',

                },
                {
                    id: 2,
                    name: 'Tuna Temaki',

                },
                {
                    id: 3,
                    name: 'Eel Temaki',

                },
                
            ]
        }
    ]
}
function RatesInfoWrap() {
    const [counter, setCounter] = useState(1)
    const [sushiData, setSushiData] = useState([
        {
            id: 1,
            name: 'Large Box (30 Pieces)',
            price: 300.00,
            data: [
                {
                    name: 'Nigiri Sushi',
                    max: 12,
                    counter: 4,
                    id: 1,
                    pieces: [
                        {
                            id: 1,
                            name: 'Shrimp',
        
                        },
                        {
                            id: 2,
                            name: 'Salamon',
        
                        },
                        {
                            id: 3,
                            name: 'Tuna',
        
                        },
                        {
                            id: 4,
                            name: 'Octopus',
        
                        }
                    ]
                },
                {
                    name: 'Ura Maki',
                    max: 12,
                    counter: 3,
                    id: 2,
                    pieces: [
                        {
                            id: 1,
                            name: 'California',
        
                        },
                        {
                            id: 2,
                            name: 'Shrimp Tempura',
        
                        },
                        {
                            id: 3,
                            name: 'Togarashi',
        
                        },
                        {
                            id: 4,
                            name: 'Spider',
        
                        }
                    ]
                },
                {
                    name: 'Ura Temaki',
                    max: 6,
                    counter: 2,
                    id: 3,
                    pieces: [
                        {
                            id: 1,
                            name: 'Ikura',
        
                        },
                        {
                            id: 2,
                            name: 'Tuna Temaki',
        
                        },
                        {
                            id: 3,
                            name: 'Eel Temaki',
        
                        },
                        
                    ]
                }
            ]
        },
        
    ])


    const inceraseCounter = () => {
        if (counter === 3) {
            return
        }
        setCounter(prevState => prevState + 1)
        setSushiData(prevState => [...prevState, {...savedBoxData, id: counter + 1}])
    }

    const deceraseCounter = () => {
        if (counter === 1) {
            return
        }
        setCounter(prevState => prevState - 1)
        sushiData.splice(-1)
        setSushiData(sushiData)
        if(sushiData.length === 1) {
            $('.list-group-wrapper-body').slideDown()
        }
    }

    const handleAccord = (e) => {
        $(e.target).closest('.list-group-wrapper').find('.list-group-wrapper-body').slideToggle()
        $(e.target).closest('.list-group-wrapper').find('.list-group-wrapper-head').toggleClass('active')
    }

    return (
        <div className="app-data-info">
            <div className="app-info-head" style={{backgroundImage: "url("+ backGround +")"}}></div>
            <div className="app-info-body">
                <div className="app-info-main-head">
                    <div className='app-info-main-title'>
                        <strong>Large Box (30 Pieces)</strong>
                        <span>Please pick your pieces.</span>
                    </div>
                    <div className='app-info-counter-wrapper'>
                        <div className='app-info-counter'>
                            <div 
                                className={`counter-item ${counter === 1 ? 'disable' : ''}`} 
                                onClick={deceraseCounter}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g id="Group_16354" data-name="Group 16354" transform="translate(13132 9556)"><rect id="Rectangle_6076" data-name="Rectangle 6076" width="20" height="20" transform="translate(-13132 -9556)" fill="none"></rect><path id="Path_8599" data-name="Path 8599" d="M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z" transform="translate(-13134.25 -9558.25)" fill="#212121"></path><path id="Path_8598" data-name="Path 8598" d="M15,12.75H9a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z" transform="translate(-13134 -9557.75)" fill="#212121"></path></g></svg>
                            </div>
                            <div className='counter-numb'>{counter}</div>
                            <div
                                className={`counter-item ${counter === 3 ? 'disable' : ''}`} 
                                onClick={inceraseCounter}
                            >
                                <svg id="Group_16352" data-name="Group 16352" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect id="Rectangle_6077" data-name="Rectangle 6077" width="20" height="20" fill="none"></rect><path id="Path_8598" data-name="Path 8598" d="M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z" transform="translate(-2.25 -2.25)" fill="#212121"></path><path id="Union_21" data-name="Union 21" d="M13109,8901.749V8899.5h-2.252a.75.75,0,0,1,0-1.5H13109v-2.252a.749.749,0,1,1,1.5,0V8898h2.251a.75.75,0,0,1,0,1.5h-2.251v2.248a.749.749,0,1,1-1.5,0Z" transform="translate(-13099.75 -8888.749)" fill="#212121"></path></svg>
                            </div>
                        </div>
                        <div className='app-info-price'>
                            <span>KWD {300 * sushiData.length}</span>
                        </div>
                    </div>
                </div>

                <div className='app-info-main-body'>
                    {
                        sushiData.map((item, index) => {
                            return (
                                <div className='list-group-wrapper' key={item.id}>
                                    {
                                        sushiData.length > 1
                                        ?   <div className='list-group-wrapper-head active' onClick={handleAccord}>
                                                <div className='list-group-wrapper-head-title'>
                                                    <p>{item.name}</p>
                                                    <span className='list-group-wrapper-counter'>{index + 1}</span>
                                                </div>
                                                <img src={DownArrow} alt="asset" className='active-icon' />
                                            </div>
                                        :   null
                                    }
                                    <div className='list-group-wrapper-body'>
                                        {
                                            item.data.map(x => {
                                                return (
                                                    <ListGroup key={x.id} item={x} />
                                                )
                                            })
                                        }
                                    </div>
                                    
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RatesInfoWrap
