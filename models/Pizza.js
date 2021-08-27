const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: (createAtVal) => dateFormat(createAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// create the Pizza model using PizzaSchema
const Pizza = model('Pizza', PizzaSchema);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

// export the Pizza model
module.exports = Pizza;

