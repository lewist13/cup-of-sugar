const Router = require('express').Router()
const controller = require('../controllers/ItemController')


//Routes go here

Router.get('/all', controller.GetItems)
// http://localhost:3001/api/items/all


Router.get('/:item_id', controller.GetItemById)
// http://localhost:3001/api/items/1

Router.get('/sort/:category', controller.GetItemsByCategory)
// http://localhost:3001/api/items/sort/Appliances


Router.post('/add', controller.CreateItem)
// http://localhost:3001/api/items/add


Router.put('/update/:item_id', controller.UpdateItem)
// http://localhost:3001/api/items/update/1


Router.delete('/delete/:item_id', controller.DeleteItem)
// http://localhost:3001/api/items/delete/2

Router.get('/owner/:owner_id', controller.GetItemByOwner)
// http://localhost:3001/api/items/owner/:owner_id
module.exports = Router



