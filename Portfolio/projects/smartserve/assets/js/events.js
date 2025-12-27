let events = JSON.parse(localStorage.getItem("events")) || [];
let editIndex = null;

const list = document.getElementById("eventList");

function render() {
  list.innerHTML = "";
  events.forEach((e, i) => {
    list.innerHTML += `
      <div class="bg-white p-4 rounded shadow flex justify-between">
        <div>
          <h4 class="font-semibold">${e.title}</h4>
          <p class="text-sm text-gray-500">${e.date}</p>
        </div>
        <div class="space-x-2">
          <button onclick="editEvent(${i})" class="text-indigo-600">Edit</button>
          <button onclick="deleteEvent(${i})" class="text-red-500">Delete</button>
        </div>
      </div>
    `;
  });
}

function saveEvent() {
  const event = {
    title: title.value,
    date: date.value
  };

  editIndex !== null ? events[editIndex] = event : events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
  closeForm();
  render();
}
