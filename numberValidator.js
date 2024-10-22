const userInputElt = document.getElementById("user-input");
const resultElt = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn").addEventListener("click", () => numberCheck()); 
const clearBtn = document.getElementById("clear-btn").addEventListener("click", () => clearResults());

const numberCheck = () => {
  const userInput = userInputElt.value.trim();
  if (!userInput) {
    alert('Please provide a phone number');
    return;
  }

  const validPatterns = [
    /^1?\s?\d{3}[-\s]\d{3}[-\s]\d{4}$/,            // 1 555-555-5555 or 555-555-5555
    /^1?\s?\(\d{3}\)\s?\d{3}[-\s]\d{4}$/,          // 1 (555) 555-5555 or (555) 555-5555
    /^1?\s?\d{10}$/,                               // 5555555555
    /^1?\s?\d{3}\s\d{3}\s\d{4}$/                   // 1 555 555 5555
  ];

  let isValid = validPatterns.some(pattern => pattern.test(userInput));

  if (isValid) {
    resultElt.textContent = `Valid US number: ${userInput}`;
  } else {
    resultElt.textContent = `Invalid US number: ${userInput}`;
  }
   userInput.value = "";
};

const clearResults = () => {
  resultElt.textContent = '';
};
