const mongoose = require('./connection.js')

const CarrierSchema = new mongoose.Schema({
  name: String,
  fighterNum: Number,
  bomberNum: Number
 })

 const FighterSchema = new mongoose.Schema({
  name: String,
  carrierDock: String
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

module.exports = {
  getHelloWorldString,
  addFight,
  addBomb,
  addCarr
}
