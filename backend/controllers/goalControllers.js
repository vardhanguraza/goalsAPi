const asyncHandler = require('express-async-handler');

// @desc Get goals
// @route GET /api/goals
// @acess Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
})

// @desc Post goals
// @route POST /api/goals
// @acess Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please send a text message")
    }
    res.status(200).json({ message: 'Set goals' });
})

// @desc Put goals
// @route PUT /api/goals/{id}
// @acess Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` });
})

// @desc Delete goal
// @route DELETE /api/goal/{id}
// @acess Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` });
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}