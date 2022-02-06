const addButton = document.querySelector("#btn");
const inputName = document.querySelector("#input-name");
const inputAge = document.querySelector("#input-age");
const table = document.querySelector("#table");

const notNumbers = /[0-9]/g;
const notLetters = /[A-Za-zA-Яа-яЁё]/g;

inputName.oninput = function () {
  this.value = this.value.replace(notNumbers, "");
};

inputAge.oninput = function () {
  this.value = this.value.replace(notLetters, "");
};

const formData = [];

addButton.addEventListener("click", () => {
  if (!inputName.value || !inputAge.value) return;

  const radioGender = document.querySelector("input[type='radio']:checked");

  const newData = {
    name: inputName.value,
    age: inputAge.value,
    gender: radioGender.value,
  };

  formData.push(newData);

  renderingFormData();
  inputName.value = "";
  inputAge.value = "";
});

const renderingFormData = () => {
  let newForm = "";

  if (formData.length === 0) table.innerHTML = "";

  formData.forEach(({ name, age, gender }, index) => {
    newForm += `
	<tr>
	   <td>${name}</td>
	   <td>${age}</td>
	   <td>${gender}</td>
	   <td><button onclick="deleteUser(${index})" class="btn-delete">x</button></td>
	</tr>
 `;

    table.innerHTML = newForm;
  });
};

const deleteUser = (index) => {
  formData.splice(index, 1);
  renderingFormData();
};
