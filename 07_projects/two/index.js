const form = document.querySelector('form');

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    

    if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give valid height, not ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give valid height, not ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `<span>BMI is ${bmi}</span>`;
        if (bmi < 18.6) {
            result.innerHTML = `<span>You are Under Weight, BMI: ${bmi}</span>`
        } else if (bmi > 24.9) {
            result.innerHTML = `<span>You are Over Weight, BMI: ${bmi}</span>`
        } else {
            result.innerHTML = `<span>You have Normal Weight, BMI: ${bmi}</span>`
        }
    }

})