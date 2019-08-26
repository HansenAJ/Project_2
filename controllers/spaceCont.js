/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const spaceApi = require('../models/spaceModel.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const spaceRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
spaceRouter.get('/', (req, res) => {
  res.send(spaceApi.getHelloWorldString())
})
//spaceRouter.get('/addFighter', (req,res) => {
spaceRouter.get('/carriers/:id/addFighter', (req, res) => {
  spaceApi.getCarrierEscort(req.params.id).then((carrier) =>{
    res.render('addFighter', {id: req.params.id, carrier})
  })
})

{/* <select name="Carrier List">
{{#each allCarriers}}
  <option value="{{carrierList.id}}">{{carrierList.name}}</option>
{{/each}}
</select> */}

spaceRouter.get('/carriers/:id/addBomber', (req,res) => {
  spaceApi.getCarrierEscort(req.params.id).then((carrier) =>{
    res.render('addBomber', {id: req.params.id, carrier})
  })
})
spaceRouter.get('/addCarrier', (req,res) => {
  res.render('addCarrier')
})

spaceRouter.post('/carriers/:id/addFighter', (req,res) =>{
  spaceApi.addFight(req.body).then(() =>{
    //console.log(req.body)
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.post('/carriers/:id/addBomber', (req,res) =>{
  spaceApi.addBomb(req.body).then(() =>{
    //console.log(req.body)
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.post('/addShip/carrier', (req,res) =>{
  spaceApi.addCarr(req.body).then(() =>{
    //console.log(req.body)
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.get('/allCarriers', (req, res) => {
  spaceApi.getAllCarriers().then((allCarriers) => {
    res.render('allCarriers', {allCarriers});
  })
})

spaceRouter.get('/fighter/:id', (req,res) => {
  spaceApi.getSingleFighter(req.params.id).then((singleFighter) =>{
    console.log(singleFighter)
    res.render('refitFighter', {singleFighter})
  })
})

spaceRouter.get('/bomber/:id', (req,res) => {
  spaceApi.getSingleBomber(req.params.id).then((singleBomber) =>{
    res.render('refitBomber', {singleBomber})
  })
})

//Update This to Return to selected carrier?
spaceRouter.put('/fighter/:id', (req,res) => {
  spaceApi.refitFighter(req.params.id, req.body).then(() =>{
    res.redirect('/space/allCarriers')
  })
})

//Update This to Return to selected carrier?
spaceRouter.put('/bomber/:id', (req,res) => {
  console.log(req.params.id)
  spaceApi.refitBomber(req.params.id, req.body).then(() =>{
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.put('/carriers/:id', (req,res) => { 
  console.log(req.params.id)
  spaceApi.refitCarrier(req.params.id, req.body).then(() =>{
    res.redirect('/space/allCarriers')
  })
})


spaceRouter.get('/carrierEscort/:id', (req, res) =>{
  spaceApi.getCarrierEscort(req.params.id).then((carrierEscort) => {
    spaceApi.getFighters(req.params.id).then((fighterEscort) =>{
      spaceApi.getBombers(req.params.id).then((bomberEscort) =>{
        res.render('carrierEscort', {carrierEscort, carrId: req.params.id, fighterEscort, bomberEscort})
      })
    })
  })
})

spaceRouter.delete('/fighter/:id', (req,res) =>{
  spaceApi.scuttleFighter(req.params.id).then(() =>{
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.delete('/bomber/:id', (req,res) =>{
  spaceApi.scuttleBomber(req.params.id).then(() =>{
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.delete('/carriers/:id', (req,res) =>{
  spaceApi.scuttleCarrier(req.params.id).then(() =>{
    res.redirect('/space/allCarriers')
  })
})


//Test page. Do not impliment
spaceRouter.get("/allFighters", (req,res) =>{
  spaceApi.getFighters().then((allFighters) =>{
    //console.log(allFighters)
    res.render('fighterTest', {allFighters})
  })
})
spaceRouter.get("/allbombers", (req,res) =>{
  spaceApi.getBombers().then((allBombers) =>{
    //console.log(allFighters)
    res.render('BomberTest', {allBombers})
  })
})



/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  spaceRouter
}
