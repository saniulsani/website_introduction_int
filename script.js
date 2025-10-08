const fetchBtn = document.getElementById("fetchBtn");
const infoBtn = document.getElementById("infoBtn");
const userList = document.getElementById("userList");
const infoList = document.getElementById("infoList");

// Generate random color
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}

//

// Button 2: Show static info
infoBtn.addEventListener("click", () => {
  const newColor = randomColor();
  infoBtn.style.backgroundColor = newColor;
  infoBtn.textContent = "Info Shown!";

  // Static info
  const info = [
    {name: "Md Saniul Islam Sony", course: "BSc Computer Science", university: "American International University-Bangladesh" },
    {name: "John Doe", course: "Cybersecurity", university: "MIT" },
    {name: "Jane Smith", course: "Web Development", university: "Stanford University" }
  ];

  // Display info
  infoList.innerHTML = "";
  info.forEach(person => {
    const li = document.createElement("li");
    li.textContent = ` Name: ${person.name}, Course: ${person.course}, University: ${person.university}`;
    infoList.appendChild(li);
  });
});
