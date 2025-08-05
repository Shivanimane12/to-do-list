const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  // Task text
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");

  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering complete toggle
    li.remove();
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Clear input
}
