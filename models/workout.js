const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                }
            }
        ]
    },

)

workoutSchema.virtual("totalDuration").get(function () {

    return.this.exercises.recue((total, exercise) => {
        return total + exercise.duration
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;