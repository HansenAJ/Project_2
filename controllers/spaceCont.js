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

spaceRouter.get('/addFighter', (req,res) => {
  res.render('addFighter')
})
spaceRouter.get('/addBomber', (req,res) => {
  res.render('addBomber')
})
spaceRouter.get('/addCarrier', (req,res) => {
  res.render('addCarrier')
})

spaceRouter.post('/addShip/fighter', (req,res) =>{
  spaceApi.addFight(req.body).then(() =>{
    res.redirect('/space')
  })
})
spaceRouter.post('/addShip/bomber', (req,res) =>{
  spaceApi.addBomb(req.body).then(() =>{
    res.redirect('/space')
  })
})
spaceRouter.post('/addShip/carrier', (req,res) =>{
  spaceApi.addCarr(req.body).then(() =>{
    console.log(req.body)
    res.redirect('/space')
  })
})

spaceRouter.get('/allCarriers', (req, res) => {
  spaceApi.getAllCarriers().then((allCarriers) => {
    res.render('allCarriers', {allCarriers});
  })
  //console.log(allIssues)
})

spaceRouter.get('/carrierEscort/:id', (req, res) =>{
  spaceApi.getCarrierEscort(req.params.id).then((carrierEscort) => {
    //need to pass 'fighterEscort' and 'bomberEscort'
    spaceApi.getFighters(req.params.id).then((fighterEscort) =>{
        res.render('carrierEscort', {carrierEscort, carrId: req.params.id, fighterEscort})
      })
    })
  })

// spaceRouter.get('/carriers/:id', (req, res) =>{
//   spaceApi.getCarrier(id).then((id) => {
//     spaceApi.getFighters(fighterList).then((fighterList) => {
//       spaceApi.getBombers(bomberList).then((bomberList) => {
//         res.render('singleCarrier', id, fighterList, bomberList)
//       })
//     })
//   })
// })


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  spaceRouter
}
