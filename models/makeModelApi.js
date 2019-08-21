const makeApi = (craftType) => {
    return {
        craftType: craftType,

        addCraft: function(craftInput) {
            //return <DB String>.insertMany([ <Data to input> ])
            console.log("Mod Type : " + craftType)
            console.log("Mod DB : " + craftInput)
            return this.craftType.insertMany([ craftInput])
            //return FighterCollection.insertMany([ craftInput])
         }       
    }
}