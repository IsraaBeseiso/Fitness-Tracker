const router = require('express').Router();
const workout = require('../main/workout.js');
const Workout = require('../models/workout.js');

router.post('/api/workouts', (req, res) => {
  workout.create({})
  .then((dbWorkout) => {
res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.get('/api/workouts/:id', ({ body, paras }, res) => {
Workout.findByIdAndUpdate(
  params.id,
  { $push: { exercise: body } }
  { new: true, runValidators: true}
)
.then(dbWorkout) => {
  res.json(dbWorkout);
})
.catch((err) => {
  res.json(err);
});
});

router.get('/api/workouts', (req, res) => {
  workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
  .catch((err) => {
    res.json(err);
  });
});

router.get('/api/workouts/rang', (req,res) => {
workout.aggregate([
  {
    $addFields: {
      totalDuration: {
        $sum: '$exercise.duration',
      },
    },
  },
])
.sort({ _id: -1 })
.limit(7)
.then({dbWorkout} => {
  console.log(dbWorkout);
  res.json(dbWorkouts);
})
.catch((err) => {
  res.json(err);
});
});

router.delete('/api/workouts', ({ body }, res) => {
  workout.findByIdAndDelete(body.id)
  .then(() => {
    res.json(true);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
