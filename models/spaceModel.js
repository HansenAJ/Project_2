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

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getHelloWorldString
}
