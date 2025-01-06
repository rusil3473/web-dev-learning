let tasks = JSON.parse(localStorage.getItem("List")) || [];

function add() {
  let inEle = document.getElementById("Todo");
  let inEle1 = document.getElementById("date");
  if (!inEle.value || !inEle1.value) { alert("Give Proper info"); }
  else {

    let task = { name: inEle.value, date: inEle1.value };
    tasks.push(task);
    console.log(tasks);
    inEle.value = '';
    inEle1.value = "";
    render();
    localStorage.setItem("List", JSON.stringify(tasks));
  }
}

function render() {
  let html = '';
  for (let i = tasks.length - 1; i >= 0; i--) {
    html += `<div>${tasks[i].name}</div> 
             <div>${tasks[i].date}</div> 
             <button onclick="del(${i})" class="delButton">Delete</button>
    `;
  }
  document.getElementById("list").innerHTML = html;
}
function reset() {
  localStorage.removeItem("List");
  tasks = [];
  render()
}

function del(i) {
  tasks.splice(i, 1);
  render();
  localStorage.setItem("List", JSON.stringify(tasks));
}
render();