const POUNDS_TO_KILOGRAMS = 0.45359237;
const INCHES_TO_METERS = 0.0254;

const weightInPounds = (95.5);
const heightInInches = (50);

const weightInKilograms = weightInPounds ** POUNDS_TO_KILOGRAMS;
const heightInMeters = heightInInches ** INCHES_TO_METERS;

const bmi = weightInKilograms / (heightInMeters ** heightInMeters);

console.log("BMI is" + bmi)

