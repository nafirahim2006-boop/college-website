let notesData = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notesData));
}
function showPage(page) {
    let content = document.getElementById("content");

    if (page === "notes") {
        let html = `
            <h2>Notes 📚</h2>

            <input id="title" placeholder="Enter title"><br><br>
            <input id="subject" placeholder="Enter subject"><br><br>
            <button onclick="addNote()">Add Note</button>
            <hr>
        `;

        notesData.forEach(note => {
            html += `
                <div class="card">
                    <h3>${note.title}</h3>
                    <p>${note.subject}</p>
                </div>
            `;
        });

        content.innerHTML = html;
    }

    else if (page === "announcements") {
        content.innerHTML = "<h2>Announcements 📢</h2>";
    }

    else if (page === "events") {
        content.innerHTML = "<h2>Events 📅</h2>";
    }
}

function addNote() {
    let title = document.getElementById("title").value;
    let subject = document.getElementById("subject").value;

    if (title && subject) {
        notesData.push({ title, subject });
        showPage("notes"); // refresh
    } else {
        alert("Please fill all fields!");
    }
}
function addNote() {
    let title = document.getElementById("title").value;
    let subject = document.getElementById("subject").value;

    if (title && subject) {
        notesData.push({ title, subject });
        saveNotes(); // SAVE
        showPage("notes");
    } else {
        alert("Please fill all fields!");
    }
}
function login() {
    let user = document.getElementById("username").value;

    if (user) {
        localStorage.setItem("user", user);
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("appPage").style.display = "block";
    } else {
        alert("Enter username!");
    }
}

// Auto login
window.onload = function () {
    let user = localStorage.getItem("user");
    if (user) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("appPage").style.display = "block";
    }
};