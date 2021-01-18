const mongoose = require("mongoose");
const schema = mongoose.schema;
const workoutSchema = new Schema({
  day:{
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter an exercise name',
      },
      duration: {
        type: Number,
        required: 'Enter an exercise duration in min',
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports =workout;