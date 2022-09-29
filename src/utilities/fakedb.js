const addToDB = (time) => {
    const storedBreakTime = {time};
    localStorage.setItem('stored-time', JSON.stringify(storedBreakTime));
}

const getStoredTime = () => {
    let storedBreakTime = {};
    const storedTime = localStorage.getItem('stored-time');
    if(storedTime){
        storedBreakTime = JSON.parse(storedTime)
    }
    return storedBreakTime;
}


export {addToDB, getStoredTime}