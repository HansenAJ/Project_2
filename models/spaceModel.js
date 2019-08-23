const mongoose = require('./connection.js')

const CarrierSchema = new mongoose.Schema({
  name: String,
  armor: String
 })

 const FighterSchema = new mongoose.Schema({
  name: String,
  carrierDock: String,
  carrierID: String,
  engine: String
 })

 const BomberSchema = new mongoose.Schema({
  name: String,
  carrierDock: String,
  carrierID: String
 })

const FighterCollection = mongoose.model('SpaceFighter', FighterSchema)
const BomberCollection = mongoose.model('SpaceBomber', BomberSchema)
const CarrierCollection = mongoose.model('SpaceCarrier', CarrierSchema)

function getHelloWorldString() {
  return 'Ready To Launch!'
}

const addFight = (craftInput) => {
  console.log("Mod DB : " + craftInput)
    return FighterCollection.insertMany([ craftInput]);
}
const addBomb = (craftInput) => {
  console.log("Mod DB : " + craftInput)
    return BomberCollection.insertMany([ craftInput]);
}
const addCarr = (craftInput) => {
  console.log("Mod DB : " + craftInput)
    return CarrierCollection.insertMany([ craftInput]);
  }

const getAllCarriers = () => {
  return CarrierCollection.find()
}

const getFighters = (carrierId) => {
  //console.log(carrierId)
  return FighterCollection.find({carrierID: carrierId})
}

const getSingleFighter = (id) =>{
  //console.log(id)
  return FighterCollection.findById(id)
}

const getBombers = (carrierId) => {
  //console.log(carrierId)
  return BomberCollection.find({carrierID: carrierId})
}

const getSingleBomber = (id) =>{
  //console.log(id)
  return BomberCollection.findById(id)
}

const getCarrierEscort = (carrierID) => {
    return CarrierCollection.findById(carrierID)
  }

const refitCarrier = (id, toUpdate) =>{
    return CarrierCollection.findByIdAndUpdate(id, toUpdate)
  }

const refitFighter = (id, toUpdate) =>{
    return FighterCollection.findByIdAndUpdate(id, toUpdate)
  }

  const refitBomber = (id, toUpdate) =>{
    return BomberCollection.findByIdAndUpdate(id, toUpdate)
  }

  const scuttleCarrier = (id) => {
    //Same as 'find', but for deleting.
    return CarrierCollection.findByIdAndDelete(id);
  }

  const scuttleFighter = (id) => {
    //Same as 'find', but for deleting.
    return FighterCollection.findByIdAndDelete(id);
  }

  const scuttleBomber = (id) => {
    //Same as 'find', but for deleting.
    return BomberCollection.findByIdAndDelete(id);
  }

module.exports = {
  getHelloWorldString,
  addFight,
  addBomb,
  addCarr,
  getAllCarriers,
  getCarrierEscort,
  getFighters,
  getSingleFighter,
  getBombers,
  getSingleBomber,
  refitFighter,
  refitBomber,
  refitCarrier,
  scuttleFighter,
  scuttleBomber,
  scuttleCarrier
}
