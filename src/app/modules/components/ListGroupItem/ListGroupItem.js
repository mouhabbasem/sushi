import React, {useState} from 'react'

function ListGroupItem({data, counter, max, isReachedMax, setLocalMax, setShowNote, firstTimeNote, setFirstTimeNote}) {
    const [localCounter, setLocaleCounter] = useState(0)
    const inceraseCounter = () => {
        if (localCounter === max || isReachedMax) {
            return
        }
        setLocaleCounter(prevState => prevState + counter)
        setLocalMax(prevState => prevState + counter)

        if(firstTimeNote) {
            setShowNote(true)
            setTimeout(() => {
                setShowNote(false)
            }, 1500)
        }

        setFirstTimeNote(false)
        
    }

    const deceraseCounter = () => {
        if (localCounter === 0) {
            return
        }
        setLocaleCounter(prevState => prevState - counter)
        setLocalMax(prevState => prevState - counter)

    }
    
    
    return (
        <li>
            <div className='list-group-item-title'>
                <div className='asset-wrap' style={{backgroundImage: "url('https://tapcom-live.ams3.cdn.digitaloceanspaces.com/media/cache/97/a1/97a1661426d180f84b29b7762150c8d0.jpg')"}}></div>
                <p>{data.name}</p>
            </div>
            <div className='list-group-item-price'>

                <div className='app-info-counter'>
                    <div 
                        className={`counter-item ${localCounter === 0 ? 'disable' : ''}`}
                        onClick={deceraseCounter}

                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g id="Group_16354" data-name="Group 16354" transform="translate(13132 9556)"><rect id="Rectangle_6076" data-name="Rectangle 6076" width="20" height="20" transform="translate(-13132 -9556)" fill="none"></rect><path id="Path_8599" data-name="Path 8599" d="M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z" transform="translate(-13134.25 -9558.25)" fill="#212121"></path><path id="Path_8598" data-name="Path 8598" d="M15,12.75H9a.75.75,0,0,1,0-1.5h6a.75.75,0,0,1,0,1.5Z" transform="translate(-13134 -9557.75)" fill="#212121"></path></g></svg>
                    </div>
                    <div className='counter-numb'>{localCounter}</div>
                    <div
                        className={`counter-item ${localCounter === max || isReachedMax ? 'disable' : ''}`}
                        onClick={inceraseCounter}
                    >
                        <svg id="Group_16352" data-name="Group 16352" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect id="Rectangle_6077" data-name="Rectangle 6077" width="20" height="20" fill="none"></rect><path id="Path_8598" data-name="Path 8598" d="M12.25,2.25a10,10,0,1,1-10,10A10.011,10.011,0,0,1,12.25,2.25Zm0,18.462A8.462,8.462,0,1,0,3.788,12.25,8.471,8.471,0,0,0,12.25,20.712Z" transform="translate(-2.25 -2.25)" fill="#212121"></path><path id="Union_21" data-name="Union 21" d="M13109,8901.749V8899.5h-2.252a.75.75,0,0,1,0-1.5H13109v-2.252a.749.749,0,1,1,1.5,0V8898h2.251a.75.75,0,0,1,0,1.5h-2.251v2.248a.749.749,0,1,1-1.5,0Z" transform="translate(-13099.75 -8888.749)" fill="#212121"></path></svg>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ListGroupItem
