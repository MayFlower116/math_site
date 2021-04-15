

function change_palette() {
    document.body.classList.toggle("dark_palette")

    const aside = document.querySelector("aside")
    aside.classList.toggle("dark_palette")

    const main_area = document.querySelector("div")
    main_area.classList.toggle("dark_palette")

    textarea.classList.toggle("dark_palette")
    new_note_btn.classList.toggle("dark_palette")

    
    if (color_mode_btn.textContent === "Dark Mode") {
        color_mode_btn.textContent = "Light Mode";
    } else {
        color_mode_btn.textContent = "Dark Mode";
    }
    color_mode_btn.classList.toggle("dark_palette")
    save_btn.classList.toggle("dark_palette")
    cancel_btn.classList.toggle("dark_palette")
}

function cancel_button() {
    save_btn.style.visibility = "hidden";
    cancel_btn.style.visibility = "hidden";
    textarea.style.visibility = "hidden";
}

function new_note_button() {
    if (textarea.style.visibility == "hidden") {
        save_btn.style.visibility = "visible";
        cancel_btn.style.visibility = "visible";
        textarea.style.visibility = "visible";
    }
    else {
        textarea.value = ""
    }
}



let note = {
    title: "note one",
    body: "this is my first note",
};

let notesArray = []

function save_note() {
    // notesArray.push()
    given_title = prompt("Give your note a title.")
    let note = {
        title: given_title,
        body: textarea.value
    }
    notesArray.push(note)

    
    let title_li = document.createElement("li")
    let listed_title = document.createTextNode(given_title)
    title_li.appendChild(listed_title)
    notes_list.appendChild(title_li)
}

function load_note(e) {
    console.log(e.target.innerText)
    let loaded_note = notesArray.find(note => {
        return note.title === e.target.innerText
    })
    console.log(loaded_note)
    textarea.value = loaded_note.body
}

const notes_list = document.getElementById("notes_list")
const textarea = document.querySelector("textarea");
const color_mode_btn = document.getElementById("color_mode")
const cancel_btn = document.getElementById("cancel");
const save_btn = document.getElementById("save");
const new_note_btn = document.getElementById("new_note");

color_mode_btn.addEventListener("click", change_palette);
cancel_btn.addEventListener("click", cancel_button);
new_note_btn.addEventListener("click", new_note_button);
save_btn.addEventListener("click", save_note);
notes_list.addEventListener("click", load_note);




















