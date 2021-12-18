const postData = () => {
    // return fetch('http://localhost:3000/goods/25', {
    //     method: 'DELETE',
    // })
    // .then(res => res.json())

    return fetch('http://localhost:3000/goods', {
        method: 'POST',
        body: JSON.stringify({
            title: "Gothic 2",
            price: 1490,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/JSON; charset=utf-8',
        },
    })
    .then(res => res.json())
}  

export default postData