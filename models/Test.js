const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    // step 1
    Wick: String,
    Fragrance: String,
    Volume: String,
    FragranceSupplier: String,
    UseDyeColor: String,
    UseDyeStabilizer: String,
    WaxMeltingTemperature: String,
    BlendingTemperature: String,
    PouringTemperature: String,
    CoolingTime: String,
    ContainerType: String,
    ContainerSupplier: String,
    ContainerSize: String,

    // step 3
    ColdFragrance: String,
    VisibleFrosting: String,
    PercentageMeltedtoEdge: String,
    DepthofMeltPool: String,
    AmountofSmoking: String,
    Notes: String,
    PercentageMeltedtoEdge2: String,
    DepthofMeltPool2: String,
    AmountofSmoking2: String,
    Notes2: String,
    PercentageMeltedtoEdge3: String,
    DepthofMeltPool3: String,
    AmountofSmoking3: String,
    Notes3: String,
    PercentageMeltedtoEdge4: String,
    DepthofMeltPool4: String,
    AmountofSmoking4: String,
    Notes4: String,

    // Step 4
    MainNote: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Test', testSchema);
