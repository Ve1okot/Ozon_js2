const getData = () => {
    return fetch('https://ozon-js-3213a-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}  

export default getData