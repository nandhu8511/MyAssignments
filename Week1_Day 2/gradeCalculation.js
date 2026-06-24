function gradeCalculation(marks)
{

    let grade = '';

    switch (true) {
        case (marks >= 90 && marks <= 100):
            grade = 'A';
            break;

        case (marks >= 75 && marks < 90):
            grade = 'B';
            break;

        case (marks >= 50 && marks < 75):
            grade = 'C';
            break;

        case (marks >= 35 && marks < 50):
            grade = 'D';
            break;

        case (marks >= 0 && marks < 35):
            grade = 'F';
            break;

        default:
            marks = 'Invalid Score';
    }

    return grade;
}

// Call the function    
const result = gradeCalculation(48);
console.log("Grade:", result);