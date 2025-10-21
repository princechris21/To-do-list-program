const taskinput = document.getElementById("task");
const addbtn = document.getElementById("addbtn");
const list = document.getElementById("list");

addbtn.addEventListener('click', function() {
    const tasktext = taskinput.value.trim();
    if (tasktext !== ""){
        const newtask = document.createElement("li");
        newtask.textContent = tasktext;
        list.appendChild(newtask);
        taskinput.value = "";
    }
});