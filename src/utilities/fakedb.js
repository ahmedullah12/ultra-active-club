const addToDB = (time) => {
    const storedBreakTime = {time};
    localStorage.setItem('stored-time', JSON.stringify(storedBreakTime));
}




export {addToDB}