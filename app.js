// Getting DOM elements 
const generateButton = document.getElementById("generate-btn");
const workoutName = document.getElementById("workout-name");
const workoutDescription = document.getElementById("workout-description");
const exerciseList = document.getElementById("exercise-list");

// Events 
generateButton.addEventListener("click", generateWorkout);
 

// Create an array of workout objects (Workout Data)
const workouts = [
    {
        name: "Lower Body Strength",
        description: "Build stronger legs with compound lower-body exercises.",
        exercises: [
            "squats - 3 sets of 8",
            "Deadlift - 3 sets of 5",
            "Walking Lunges - 3 sets of 12",
            "Calf Raises - 3 sets of 10"
        ]
    },

    {
        name: "Upper Body Strength",
        description: "Build strength across your chest, back, and arms.",
        exercises: [
            "Bench Press - 3 sets of 8",
            "Barbell Row - 3 sets of 10",
            "Push-Ups 3 sets of 12",
            "Dumbbell Curls - 3 sets of 10"
        ]
    },

    {
        name: "Full Body Workout",
        description: "Train every muscle group in one awesome session.",
        exercises: [
            "squats - 3 sets of 8",
            "Bench Press - 3 sets of 10",
            "Deadlift - 3 sets of 5",
            "Standing Press - 3 sets of 10",
            "Barbell Rows - 3 sets of 10"
        ]
    },

    {
        name: "Bodyweight Conditioning",
        description: "Improve your conditioning without equipment",
        exercises: [
            "Bodyweight Squats - 3 sets of 8",
            "Push Ups 3 sets of 10",
            "Sprints - 3 sets of 20 seconds",
            "Jumping Jacks - 3 sets of 10"
        ]
    },
];

// Functions
function generateWorkout() {
    // Select a random workout
    // Selecting a random index from the workouts array
    const randomIndex = Math.floor(Math.random() * workouts.length);

    // Selecting the random workout by accessing the random index of the workouts array
    const randomWorkout = workouts[randomIndex];

    // Select the name and the description of the workout and change it inside the html document
    workoutName.innerText = randomWorkout.name;
    workoutDescription.innerText = randomWorkout.description;
    exerciseList.innerText = "";

    // Then we need to iterate over the exercises array to fill the list 
    for (i=0; i<randomWorkout.exercises.length; i++) {
        const exerciseLi = document.createElement("li");
        exerciseLi.classList.add("exercise-item");
        exerciseLi.innerText = randomWorkout.exercises[i];
        exerciseList.appendChild(exerciseLi);    
    }
}
