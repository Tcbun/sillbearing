const homeDefaultData = {
    hotProduct: [
        { id: '0', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' },
        { id: '1', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' },
        { id: '2', subject: 'SILL BEARING', model: '6019 ZZ', price: '22.000' }
    ]
}

export default (state = homeDefaultData, action) => {
    // if (action.type === 'ggg') {
    //     const newState = JSON.parse(JSON.stringify(state));
    //     return newState;
    // }
    return state;
}