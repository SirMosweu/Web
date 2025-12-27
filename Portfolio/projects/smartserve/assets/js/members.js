let members = JSON.parse(localStorage.getItem("members")) || [];
let editIndex = null;

const table = document.getElementById("memberTable");
const modal = document.getElementById("modal");

function render() {
  table.innerHTML = "";
  members.forEach((m, i) => {
    table.innerHTML += `
      <tr class="border-b">
        <td class="p-3">${m.name}</td>
        <td>${m.email}</td>
        <td>${m.role}</td>
        <td class="text-right p-3 space-x-2">
          <button onclick="editMember(${i})" class="text-indigo-600">Edit</button>
          <button onclick="deleteMember(${i})" class="text-red-500">Delete</button>
        </td>
      </tr>
    `;
  });
}

function openForm() {
  modal.classList.remove("hidden");
}

function closeForm() {
  modal.classList.add("hidden");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("role").value = "";
  editIndex = null;
}

function saveMember() {
  const member = {
    name: name.value,
    email: email.value,
    role: role.value
  };

  if (editIndex !== null) {
    members[editIndex] = member;
  } else {
    members.push(member);
  }

  localStorage.setItem("members", JSON.stringify(members));
  closeForm();
  render();
}

function editMember(i) {
  editIndex = i;
  const m = members[i];
  name.value = m.name;
  email.value = m.email;
  role.value = m.role;
  openForm();
}

function deleteMember(i) {
  if (confirm("Delete this member?")) {
    members.splice(i, 1);
    localStorage.setItem("members", JSON.stringify(members));
    render();
  }
}

render();
