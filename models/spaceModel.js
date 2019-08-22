const mongoose = require('./connection.js')

const CarrierSchema = new mongoose.Schema({
  name: String,
  fighterNum: Number,
  bomberNum: Number
 })

 const FighterSchema = new mongoose.Schema({
  name: String,
  carrierDock: String,
  carrierID: String
 })

 const BomberSchema = new mongoose.Schema({
  name: String,
  carrierDock: String
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
    // let fightFind = FighterCollection.find(carrierID)
    // let bombFind = BomberCollection.find(carrierID)
    // return fightFind, bombFind
    return CarrierCollection.findById(carrierID)
  }

const refitFighter = (id, toUpdate) =>{
    //THIS NEEDS EVERYTHING
    console.log("id = " + id)
    console.log("ToUpdate = " + toUpdate)
    return FighterCollection.findByIdAndUpdate(id, toUpdate)
  }

  const scuttleFighter = (id) => {
    //Same as 'find', but for deleting.
    return FighterCollection.findByIdAndDelete(id);
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
  scuttleFighter
}
