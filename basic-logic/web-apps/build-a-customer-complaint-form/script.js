const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintCheckboxes = complaintsGroup.querySelectorAll('input[type="checkbox"]');
const otherComplaint = document.getElementById("other-complaint");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionRadios = solutionsGroup.querySelectorAll('input[type="radio"]');
const otherSolution = document.getElementById("other-solution");
const solutionDescription = document.getElementById("solution-description");
const form = document.querySelector("form");

// Logic to check each field and return an object of boolean results
function validateForm() {
  const nameRegex = /.+/;
  const emailRegex = /^.+@.+\..+$/;
  const orderRegex = /^2024\d{6}$/;
  const productRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  const quantityRegex = /^[1-9]\d*$/;
  const descRegex = /^.{20,}$/;

  const results = {
    "full-name": nameRegex.test(fullName.value),
    "email": emailRegex.test(email.value),
    "order-no": orderRegex.test(orderNo.value),
    "product-code": productRegex.test(productCode.value),
    "quantity": quantityRegex.test(quantity.value),
    "complaints-group": Array.from(complaintCheckboxes).some(cb => cb.checked),
    "complaint-description": true,
    "solutions-group": Array.from(solutionRadios).some(radio => radio.checked),
    "solution-description": true
  };

  if (otherComplaint.checked) {
    results["complaint-description"] = descRegex.test(complaintDescription.value);
  }
  if (otherSolution.checked) {
    results["solution-description"] = descRegex.test(solutionDescription.value);
  }

  return results;
}

function isValid(validationObject) {
  return Object.values(validationObject).every(value => value === true);
}


const setBorder = (element, valid) => {
  element.style.borderColor = valid ? "#10b981" : "#ef4444";
};


[fullName, email, orderNo, productCode, quantity].forEach(el => {
  el.addEventListener("change", () => {
    const status = validateForm();
    setBorder(el, status[el.id]);
  });
});

// checkbox and radio button groups
complaintsGroup.addEventListener("change", () => {
  const status = validateForm();
  setBorder(complaintsGroup, status["complaints-group"]);
});

solutionsGroup.addEventListener("change", () => {
  const status = validateForm();
  setBorder(solutionsGroup, status["solutions-group"]);
});

//conditional description fields
complaintDescription.addEventListener("change", () => {
  const status = validateForm();
  setBorder(complaintDescription, status["complaint-description"]);
});

solutionDescription.addEventListener("change", () => {
  const status = validateForm();
  setBorder(solutionDescription, status["solution-description"]);
});

//when "Other" options are toggled
otherComplaint.addEventListener("change", () => {
    const status = validateForm();
    setBorder(complaintDescription, status["complaint-description"]);
});

otherSolution.addEventListener("change", () => {
    const status = validateForm();
    setBorder(solutionDescription, status["solution-description"]);
});

// Form submission
form.addEventListener("submit", (e) => {
  const status = validateForm();
  
  if (!isValid(status)) {
    e.preventDefault();

    setBorder(fullName, status["full-name"]);
    setBorder(email, status["email"]);
    setBorder(orderNo, status["order-no"]);
    setBorder(productCode, status["product-code"]);
    setBorder(quantity, status["quantity"]);
    setBorder(complaintsGroup, status["complaints-group"]);
    setBorder(complaintDescription, status["complaint-description"]);
    setBorder(solutionsGroup, status["solutions-group"]);
    setBorder(solutionDescription, status["solution-description"]);
  }
});
