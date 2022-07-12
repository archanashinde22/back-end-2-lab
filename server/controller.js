const houses = require(`./db.json`)
let gID = 4;

module.exports = {
getHouses : (req,res) => res.status(200).send(houses) ,
deleteHouse : (req,res) => {
    let index = houses.findIndex(house => house.id === +req.params)
    
    houses.splice(index,1)
    res.status(200).send(houses)
    
},
createHouse : (req,res) => { 
    const {address , price, imageURL} = req.body
    let newHouse = {
        id : gID,
        address:address,
        price: +price,
        imageURL:imageURL,
    } 
    houses.push(newHouse);
    gID++;
    res.status(200).send(houses)
},
updateHouse : (req,res) => {
let {id } = req.params
let {type}= req.body
let index = houses.findIndex(house => house.id === +id)

if(type ==='minus' && houses[index].price < 10000){
    res.status(400).send('House price cannot go below 0')
} else if(type ==='minus')
{
    houses[index].price -=10000
    res.status(200).send(houses)

}else if(type ==='plus')
{   console.log(typeof(houses[index].price));
    houses[index].price= houses[index].price + 10000
    res.status(200).send(houses)
}else 
{
    
 res.status(400)


}

}
}