const createValuesArray = data =>  {
    let arr = [];
    data.map(item => {
        return arr.push(item.amount);
    });

    return arr;
};

export default createValuesArray;