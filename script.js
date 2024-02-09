$(document).ready(function(){
    const submit = $('#submit');
    const height = $('#height');
    const weight = $('#weight');
    const result = $('.result');

    submit.click(function(e){
        e.preventDefault();
        let heightVal = parseFloat(height.val());
        let weightVal = parseFloat(weight.val());
        
        if(heightVal ===  "" || isNaN(heightVal)){
            result.html("Please enter valid height!");
        }else if(weightVal === "" || isNaN(weightVal)){
            result.html("Please enter valid weight!");
        }else{
            let bmi = (weightVal/((heightVal * heightVal)/10000)).toFixed(2);
            if(bmi < 18.6){
                result.html(`You are underweight ${bmi}`);
            }else if(bmi >= 18.6 || bmi <= 24.9 ){
                result.html(`You are healthy ${bmi}`);
            }else if(bmi > 24.9){
                result.html(`You are overweight ${bmi}`)
            }
        } 
    });
});