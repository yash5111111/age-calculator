function calculateAge() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').innerText = "Please enter a valid date.";
        return;
    }

    let today = new Date();
    let birthDate = new Date(year, month - 1, day); // Months are zero-based in JavaScript

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `Your age is ${age} years.`;
}
