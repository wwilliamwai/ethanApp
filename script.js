const dateDiv = document.getElementById("dates-divider");
const currentMili = Date.now();
let dateString = "";
const getAllDays = (mili) => {
    let count = 0;
    const date = new Date(mili);
    const dateParts = date.toDateString().split(" ");
    if (dateParts[1] !== "Jun" || dateParts[2] !== "12") {
        count = getAllDays(mili - 86400000) - 1;
    } else count = 357;
    dateString += `${dateParts[1]} ${dateParts[2]} ${count}/402<br>`;
    return count;
}
getAllDays(currentMili);
dateDiv.innerHTML += `
<p>${dateString}</p>
`; 