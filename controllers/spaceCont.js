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
  res.render('addFighter', {id: req.params.id})
})
spaceRouter.get('/addBomber', (req,res) => {
  res.render('addBomber')
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

spaceRouter.post('/addShip/bomber', (req,res) =>{
  spaceApi.addBomb(req.body).then(() =>{
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
    console.log("Selected Fighter : " + singleFighter)
    res.render('refitFighter', {singleFighter})
  })
})


//Update This to Return to selected carrier?
spaceRouter.put('/fighter/:id', (req,res) => {
  console.log(req.params.id)
  spaceApi.refitFighter(req.params.id, req.body).then(() =>{
    res.redirect('/space/allCarriers')
  })
})

spaceRouter.get('/bomber/:id', (req,res) => {
  spaceApi.getSingleFighter(req.params.id).then((singleBomber) =>{
    console.log(singleBomber)
    res.render('refitBomber', {singleBomber})
  })
})


spaceRouter.get('/carrierEscort/:id', (req, res) =>{
  spaceApi.getCarrierEscort(req.params.id).then((carrierEscort) => {
    //need to pass 'fighterEscort' and 'bomberEscort'
    spaceApi.getFighters(req.params.id).then((fighterEscort) =>{
        res.render('carrierEscort', {carrierEscort, carrId: req.params.id, fighterEscort})
      })
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
