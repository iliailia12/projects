const monthNames = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"];
let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("daysContainer");

    monthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    daysContainer.innerHTML = "";

    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (let date = 1; date <= lastDate; date++) {
        daysContainer.innerHTML += `<div>${date}</div>`;
    }
}

document.getElementById("prevMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});



document.getElementById("addEvent").addEventListener("click", () => {
    const eventInput = document.getElementById("eventInput");
    const eventList = document.getElementById("eventList");
    
    if (eventInput.value) {
        const li = document.createElement("li");
        li.textContent = eventInput.value;
        eventList.appendChild(li);
        eventInput.value = "";
    }
});


renderCalendar();
