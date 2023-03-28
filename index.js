// fetch('https://reqres.in/api/232').then((response) => {
//     console.log(response)
//     if(response.ok){
//         return response.json()
//     }else{
//         throw new Error('Loi roi nha')
//     }
// }).then((response)=>
// {
//     console.log(response.data)
// })

axios.get('https://reqres.in/api/23').then(res=>{
    console.log(res.data.data)
}).catch((err)=>{
    console.warn(err)
})