// This code assumes you're using Netlify Forms to handle submissions
// You can replace this with a backend API call if needed

document.addEventListener("DOMContentLoaded", function () {
    // Check if there is any previous data (could be saved in localStorage or a backend)
    const submittedData = JSON.parse(localStorage.getItem("submittedPreferences")) || [];

    // Display existing preferences
    const tableBody = document.querySelector("#preferences-table tbody");
    submittedData.forEach(preference => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${preference.name}</td>
            <td>${preference.preference1}</td>
            <td>${preference.preference2}</td>
            <td>${preference.preference3}</td>
            <td>${preference.preference4}</td>
            <td>${preference.preference5}</td>
        `;
        tableBody.appendChild(row);
    });

    // Handle form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.querySelector("#name").value;
        const preference1 = document.querySelector("#preference1").value;
        const preference2 = document.querySelector("#preference2").value;
        const preference3 = document.querySelector("#preference3").value;
        const preference4 = document.querySelector("#preference4").value;
        const preference5 = document.querySelector("#preference5").value;

        // Add to the submitted data list
        const newPreference = {
            name,
            preference1,
            preference2,
            preference3,
            preference4,
            preference5
        };
        submittedData.push(newPreference);
        localStorage.setItem("submittedPreferences", JSON.stringify(submittedData));

        // Update the table
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${preference1}</td>
            <td>${preference2}</td>
            <td>${preference3}</td>
            <td>${preference4}</td>
            <td>${preference5}</td>
        `;
        tableBody.appendChild(row);

        // Clear the form
        form.reset();
    });
});
