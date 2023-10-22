// const popUpForm = document.querySelector(".form-popup");
// const button = document.querySelector("#form");

// button.addEventListener("click", () => {
//   popUpForm.style.display = "block";
// });


// Get references to the button and form elements
const showFormButton = document.getElementById('open-form');
const formContainer = document.getElementById('form');
const dataForm = document.getElementById('dataForm');

const dataInput = document.getElementById('dataInput');
const linkInput = document.getElementById('linkInput');
const imgInput = document.getElementById('imgInput');
const costInput = document.getElementById('costInput');

const filename = document.getElementById('filename'); 

const sticky = document.getElementById('sticky');
const infoContainers = document.getElementById('infoContainers');
infoContainers.className = 'all-stickies';

// Add an event listener to the button to show the form when clicked
showFormButton.addEventListener('click', function () {
    showFormButton.style.display = 'none';
    formContainer.style.display = 'block';
});

// Add an event listener to the form for submission
dataForm.addEventListener('submit', function (e) {
   infoContainers.className = 'all-stickies';

    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the user's input
    const inputData = dataInput.value;
    const inputLink = linkInput.value;
    const inputImg = imgInput.files[0];
    const inputCost = costInput.value;
    const inputImgSource = URL.createObjectURL(inputImg);

//    const inputImgSouce = `file://${inputImg}`;

    // You can do something with the data here, like store it or display it
    const newcontainer = document.createElement('div');
    newcontainer.className = 'result';
    // //newcontainer.className = 'sticky';

    // console.log(inputData);
    // add text ekement 
    const textElem = document.createElement('span');
    textElem.textContent = inputData;
    newcontainer.appendChild(textElem);

    const lineBreak = document.createElement('br');
    newcontainer.appendChild(lineBreak);

    // link elment
    const linkElement = document.createElement('a');
    linkElement.href = inputLink;
    linkElement.textContent = "visit page";
    newcontainer.appendChild(linkElement);
    
    const lineBreak2 = document.createElement('br');
    const lineBreak3 = document.createElement('br');
    newcontainer.appendChild(lineBreak2);
    newcontainer.appendChild(lineBreak3);

    // image leement
    const imageElement = document.createElement('img');
    imageElement.src = inputImgSource;
    imageElement.className = 'up-img';
    imageElement.textContent = "";
    newcontainer.appendChild(imageElement);

    const lineBreak4 = document.createElement('br');
    newcontainer.appendChild(lineBreak4);
    // cost element
    // add text ekement 
    const costElem = document.createElement('span');
    costElem.textContent = inputCost;
    newcontainer.appendChild(costElem);


    // kjsdfhkjdhfkjsdhfkj


    console.log(inputImgSource);

   // newcontainer.textContent = inputData;

    //filename.textContent = `Selected file: ${inputImg ? inputImg.split("\\").pop() : "No file selected"}`;
    console.log(infoContainers.childElementCount);

    if (infoContainers.childElementCount == 1) {
        infoContainers.appendChild(newcontainer);
        console.log("it passed true for equal one")
        console.log(infoContainers.childElementCount);
        console.log(infoContainers.childElementCount == 1);
    }
    else{
        infoContainers.insertBefore(newcontainer, infoContainers.children[1]);
        console.log("insert beqfore no bueno")
        console.log(infoContainers.childElementCount);
    }
    
    dataInput.value = '';
    linkInput.value = '';
    imgInput.value = '';
    costInput.value = '';


    // Optionally, clear the input field
    formContainer.style.display = 'none';
    showFormButton.style.display = 'block'; // block just means that the value ti
});
