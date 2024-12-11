const wgtInp = document.getElementById('weight');
const hgtInp = document.getElementById('height');
const ageInp = document.getElementById('age');
const CalcBtn = document.getElementById('calculateBtn');
const ResultCloseBtn = document.getElementById('closeBtn');

let wgtVal = 0;
let hgtVal = 0;
let ageVal = 0;

wgtInp.addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault(); // Prevent negative or invalid input
    }
});

hgtInp.addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault(); // Prevent negative or invalid input
    }
});

ageInp.addEventListener('keydown', function (e) {
    if (e.key === '-' || e.key === 'e') {
        e.preventDefault(); // Prevent negative or invalid input
    }
});

function ValidateWeight(input) {
    const MaxWgt = document.getElementById('maxWgt');
    wgtVal = parseFloat(input.value.trim());

    if (input.value === '') {
        MaxWgt.classList.replace('opacity-100', 'opacity-0');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (input.value === '0' || isNaN(wgtVal)) {
        input.value = '';
        MaxWgt.classList.replace('opacity-0', 'opacity-100');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (wgtVal <= 10 || wgtVal > 300) {
        input.value = input.value.slice(0, 3);
        MaxWgt.classList.replace('opacity-0', 'opacity-100');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
     else {
        MaxWgt.classList.replace('opacity-100', 'opacity-0');

        if (wgtVal > 10 && hgtVal > 100 && ageVal > 2) {
            CalcBtn.classList.remove('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
            CalcBtn.classList.add('opacity-100', 'cursor-pointer', 'pointer-events-default');    
        }
    }
}

function ValidateHeight(input) {
    const MaxHgt = document.getElementById('maxHgt');
    hgtVal = parseFloat(input.value.trim());

    if (input.value === '') {
        MaxHgt.classList.replace('opacity-100', 'opacity-0');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (input.value === '0' || isNaN(hgtVal)) {
        input.value = '';
        MaxHgt.classList.replace('opacity-0', 'opacity-100');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (hgtVal <= 100 || hgtVal > 250) {
        input.value = input.value.slice(0, 3);
        MaxHgt.classList.replace('opacity-0', 'opacity-100');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
     else {
         MaxHgt.classList.replace('opacity-100', 'opacity-0');

         if (wgtVal > 10 && hgtVal > 100 && ageVal > 2) {
            CalcBtn.classList.remove('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
            CalcBtn.classList.add('opacity-100', 'cursor-pointer', 'pointer-events-default');    
        }
     }
}

function ValidateAge(input) {
    const MaxAge = document.getElementById('maxAge');
    ageVal = parseInt(input.value.trim());

    if (input.value === '') {
        MaxAge.classList.replace('opacity-100', 'opacity-0');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (input.value === '0' || isNaN(ageVal)) {
        input.value = '';
        MaxAge.classList.replace('opacity-0', 'opacity-100');

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
    else if (ageVal <= 2 || ageVal > 120) {
        input.value = input.value.slice(0, 3);
        MaxAge.classList.replace('opacity-0', 'opacity-100'); 

        CalcBtn.classList.add('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
        CalcBtn.classList.remove('opacity-100', 'cursor-pointer', 'pointer-events-default');
    }
     else {
        MaxAge.classList.replace('opacity-100', 'opacity-0');

        if (wgtVal > 10 && hgtVal > 100 && ageVal > 2) {
            CalcBtn.classList.remove('opacity-30', 'cursor-not-allowed', 'pointer-events-none');
            CalcBtn.classList.add('opacity-100', 'cursor-pointer', 'pointer-events-default');    
        }
    }
}


const MaleDiv = document.getElementById('maleDiv');
const FemaleDiv = document.getElementById('femaleDiv');
const MaleFemale = document.getElementById('maleFemale');

FemaleDiv.addEventListener('click', function () {
    MaleDiv.classList.remove('bg-[#7165e1]', 'text-white', 'cursor-default');
    MaleDiv.classList.add('text-black', 'cursor-pointer');

    FemaleDiv.classList.add('bg-[#7165e1]', 'text-white', 'pointer-events-none');

    MaleFemale.classList.replace(`bg-[url('../images/men.png')]`, `bg-[url('../images/women.png')]`);
});

MaleDiv.addEventListener('click', function () {
    MaleDiv.classList.add('bg-[#7165e1]', 'text-white', 'cursor-default');
    MaleDiv.classList.remove('text-black', 'cursor-pointer');

    FemaleDiv.classList.remove('bg-[#7165e1]', 'text-white', 'pointer-events-none');

    MaleFemale.classList.replace(`bg-[url('../images/women.png')]`, `bg-[url('../images/men.png')]`);
});


// function ValidInput() {
//     if (wgtVal > 10 && hgtVal > 100 && ageVal > 2) {
//         CalcBtn.classList.remove('opacity-30', 'cursor-not-allowed');
//         CalcBtn.classList.add('opacity-100', 'cursor-pointer');    
//     }
//     else {
//         CalcBtn.classList.add('opacity-30', 'cursor-not-allowed');
//         CalcBtn.classList.remove('opacity-100', 'cursor-pointer');   
//     }
// }
// [wgtInp, hgtInp, ageInp].forEach(input => {
//     input.addEventListener('input', ValidInput);
// })


const resultContainer = document.getElementById('resultContainer');
const bmiAdvice = {
    underweight: [
      {
        icon: "schedule",
        text: "Eat more frequently.",
        bgColor: "bg-blue-500",
      },
      {
        icon: "restaurant",
        text: "Choose nutrient-rich foods.",
        bgColor: "bg-orange-500",
      },
      {
        icon: "fitness_center",
        text: "Exercise to build muscle mass.",
        bgColor: "bg-green-400",
      },
    ],
    normal: [
      {
        icon: "thumb_up",
        text: "Maintain a balanced diet.",
        bgColor: "bg-green-500",
      },
      {
        icon: "emoji_nature",
        text: "Stay active and hydrated.",
        bgColor: "bg-blue-400",
      },
      {
        icon: "bedtime",
        text: "Get adequate sleep daily.",
        bgColor: "bg-indigo-400",
      },
    ],
    overweight: [
      {
        icon: "scale",
        text: "Monitor portion sizes.",
        bgColor: "bg-red-400",
      },
      {
        icon: "directions_walk",
        text: "Engage in daily physical activity.",
        bgColor: "bg-orange-400",
      },
      {
        icon: "local_dining",
        text: "Opt for low-calorie foods.",
        bgColor: "bg-yellow-600",
      },
    ],
  };

CalcBtn.addEventListener('click', function () {
    const BMIRange = document.getElementById('bmiRange');
    const BMIvalueNo = document.getElementById('BmiValueNo');

    const BmiVal = (wgtVal / ((hgtVal / 100) * (hgtVal / 100))).toFixed(1);
    let adviceVal = '';

    if (BmiVal > 50) {
        alert("This BMI doesn't look right.Make sure you the height and weight you entered are correct.");
        // location.reload();
        return;
    }

    BMIvalueNo.textContent = `${BmiVal}`;

    resultContainer.classList.remove('hidden');

    setTimeout(() => {
        resultContainer.classList.remove('opacity-0', 'pointer-events-none', 'scale-50');
        resultContainer.classList.add('opacity-100', 'scale-90');
    }, 50);

    setTimeout(() => {
        const indicator = document.getElementById('indicator');
        const progressBar = document.getElementById('progressBar');
        const ranges = [18.5, 24.9, 29.9, 34.9, 50]; // Adjust max as needed
        
        let position = 0;
        for (let i = 0; i < ranges.length; i++) {
            if (BmiVal <= ranges[i]) {
                position += (BmiVal - (ranges[i - 1] || 0)) / (ranges[i] - (ranges[i - 1] || 0)) * 100 / ranges.length;
                break;
            }
            position += 100 / ranges.length;
        }
        
        indicator.style.left = `${position}%`;

        indicator.classList.remove('opacity-0')
    }, 1250);

    if (BmiVal < 18.5) adviceVal = 'underweight';

    else if (BmiVal < 24.9) adviceVal = 'normal';

    else if (BmiVal < 29.9) adviceVal = 'overweight';

    else if (BmiVal < 34.9) adviceVal = 'obesity class 1';

    else if (BmiVal < 39.9) adviceVal = 'obesity class 2';

    else adviceVal = 'obesity class 3'

    BMIRange.textContent = adviceVal.toUpperCase();

    if (bmiAdvice[adviceVal]) {
        bmiAdvice[adviceVal].forEach((advice, index) => {
            const adviceICN = document.getElementById(`adviceIcn${index + 1}`);
            const adviceEat = document.getElementById(`adviceEat${index + 1}`);
            adviceICN.textContent = advice['icon'];
            adviceICN.classList.add(`${advice['bgColor']}`);
            adviceEat.textContent = advice['text'];

            // adviceICNSec.textContent = advice['icon'];
            // adviceICNSec.classList.add(`${advice['bgColor']}`);
            // adviceEatSec.textContent = advice['text'];

            // adviceICNThird.textContent = advice['icon'];
            // adviceICNThird.classList.add(`${advice['bgColor']}`);
            // adviceEatThird.textContent = advice['text'];
        })
        console.log('if worked');
    }
    else {
        bmiAdvice['overweight'].forEach((advice, index) => {
            const adviceICN = document.getElementById(`adviceIcn${index + 1}`);
            const adviceEat = document.getElementById(`adviceEat${index + 1}`);
            adviceICN.textContent = advice['icon'];
            adviceICN.classList.add(`${advice['bgColor']}`);
            adviceEat.textContent = advice['text'];
        })
    }
})



ResultCloseBtn.addEventListener('click', function () {
    resultContainer.classList.remove('opacity-100', 'scale-90');
    resultContainer.classList.add('opacity-0', 'pointer-events-none', 'scale-50');

    setTimeout(() => {
        resultContainer.classList.add('hidden')
    }, 300);
})