const purchaseData = {
    purchaseData: [
        { id: '0', buy: '6201-ZZ', time:'2019-06-22 15:39:02', brand: 'Unlimited',pack:'Bagged',quality:'Ordinary',quantity:'1000',place:'USA',date:'2019-08-12' },
        { id: '1', buy: '6201-ZZ', time:'2019-06-22 15:39:02', brand: 'Unlimited',pack:'Bagged',quality:'Ordinary',quantity:'1000',place:'USA',date:'2019-08-12' },
        { id: '2', buy: '6201-ZZ', time:'2019-06-22 15:39:02', brand: 'Unlimited',pack:'Bagged',quality:'Ordinary',quantity:'1000',place:'USA',date:'2019-08-12' },
    ]
}

export default (state = purchaseData, action) => {
    // if (action.type === 'ggg') {
    //     const newState = JSON.parse(JSON.stringify(state));
    //     return newState;
    // }
    return state;
}