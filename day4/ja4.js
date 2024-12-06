function calculateBonus(yearsOfExperience, performanceScore, salary) {
    if (yearsOfExperience > 5 && performanceScore > 8) {
        return salary * 0.20;
    } else if (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) {
        return salary * 0.10;
    } else if (yearsOfExperience <= 3) {
        return salary * 0.05;
    } else {
        return 0;
    }
}
let yearsOfExperience = 4;
let performanceScore = 9;
let salary = 50000;
let bonus = calculateBonus(yearsOfExperience, performanceScore, salary);
console.log(`Bonus: ${bonus}`);