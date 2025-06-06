let employeeCount = 0;

function myFunction() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const employeeList = document.getElementById("employeeList");
  const error = document.getElementById("error");
  const countText = document.getElementById("employeeCount");

  // Clear previous error/success
  error.textContent = "";
  error.style.display = "none";

  if (!name || !profession || !age) {
    error.textContent =
      "Error: Please make sure all the fields are filled before adding an employee!";
    error.style.color = "red";
    error.style.display = "block";
    return;
  }

  // Show success
  error.textContent = "Success : Employee Added!";
  error.style.color = "green";
  error.style.display = "block";

  employeeCount++;
  countText.textContent = `You have ${employeeCount} Employee${
    employeeCount > 1 ? "s" : ""
  }.`;

  // Create employee "card"
  const rowDiv = document.createElement("div");
  rowDiv.style.display = "flex";
  rowDiv.style.alignItems = "center";
  rowDiv.style.justifyContent = "space-between";
  rowDiv.style.border = "1px solid white";
  rowDiv.style.borderRadius = "8px";
  rowDiv.style.padding = "10px 25px";
  rowDiv.style.margin = "10px 0";
  rowDiv.style.backgroundColor = "#111";
  rowDiv.style.color = "white";
  rowDiv.style.maxWidth = "700px";

  // Left content
  const leftSpan = document.createElement("span");
  leftSpan.innerHTML = `<b>${employeeCount}.</b> &nbsp; Name : ${name} &nbsp;&nbsp; Profession: ${profession} &nbsp;&nbsp; Age:${age}`;
  leftSpan.style.flex = "1";
  leftSpan.style.paddingRight = "15px";

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete User";
  deleteButton.style.padding = "6px 12px";
  deleteButton.style.borderRadius = "10px";
  deleteButton.style.border = "none";
  deleteButton.style.backgroundColor = "white";
  deleteButton.style.color = "black";
  deleteButton.style.cursor = "pointer";

  deleteButton.addEventListener("click", () => {
    rowDiv.remove();
    employeeCount--;
    countText.textContent = `You have ${employeeCount} Employee${
      employeeCount > 1 ? "s" : ""
    }.`;
  });

  rowDiv.appendChild(leftSpan);
  rowDiv.appendChild(deleteButton);

  employeeList.appendChild(rowDiv);

  // Reset input fields
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";
}
