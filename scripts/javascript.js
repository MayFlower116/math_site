

// // // // // // // Features
// Dark/Light theme button
// // Toggle between two colour schemes
// // toggle between "dark theme" and "light theme" text on button
//
// Cancel button
// // press to hide text area, save button, and cancel button
//
// New Note button
// // Causes text area, save button, and cancel button to appear
// // clear text area
//
// save button
// // show alert asking for note title
// // add new notesArray object with title and current text
// // add list item to sidebar with title of saved notesArray object
//
// Selecting saved notes
// // Click on sidebar item to load text from that note into text area
//





// // // // // // // // //
// // // // // // // // // dark/light theme button
// // // // // // // // //


// function theme_button(body)
// // triggers on theme button being clicked
// // toggles between light/dark theme
// // changes text for button between 'light' and 'dark'
    // if (body.class_name = dark) {
            //body.class_name = light
            //other_stuff.class_name = light
            //theme_button.text = 'light theme'
        //}
     // else {
            //body.class_name = dark
            //other_stuff.class_name = dark
            //theme_button.text = 'dark theme'
        //}

// function theme_button()
// // triggers on theme button being clicked
// // alternate idea for toggling between light/dark theme
// //this concept relies on having a light theme written, then the attributes of that light theme are overwritten by later CSS giving a dark theme. Then, we just toggle the dark theme on and off, then the css it is overwriting takes hold when it is inactive. The CSS dictates the button's text value.
    //toggle.darkthemeCSS

// // // // // // // // //
// // // // // // // // // save button
// // // // // // // // //


// // 
// function save_button()
// // triggered when the 'save button' is pressed
// // goes through all the steps needed for save button, calling each related function in sequence (consider it a "main" function, but for the save button speciically)
    // title = note_title()
    // note_to_array()
    // note_to_li()



//function note_title(notesArray)
// // Creates popup asking user to name note ("title")
    // do 
        // title = 'untitled ${number in array}'
        // // Sets default title to "untitled [notesArray entry num]" 
        // title = prompt("enter a title or something", title)
    // while (title length is greater than 0 AND title != existing title)
    // // prevents title-less notes and same-title notes.
    // // title match prevention would likely be done through a loop of some kind, possibally in a separate function called the moment the check is needed.
    // return title


//function note_to_array(title, notesArray, textEntry)
// // Saves note to the array with given title and the text currently in the text area


// sidebar_list = [[title, content]]
//function note_to_li()
// // creates a list item (li) in the sidebar consisting displaying the title of the note (which can be clicked on in a later function)
// // sidebar list items will be kept in a list object and appended to as needed.
    // new_sidebar_item = title, text_area
    // sidebar_list.append(new_item)


// // // // // // // // //
// // // // // // // // // cancel button
// // // // // // // // //


// function cancel_button()
// // hides several buttons and clears text
    //toggle hiddenCSS
    // // items to be hidden will have a special class assigned to them (in addition to whatever other class), which will either make them nonexistant, or reduce their size to 0px/0px (if possible).




// // // // // // // // //
// // // // // // // // // new note button
// // // // // // // // //


// function new_note
// // d
    //if (hiddenCSS == off) {
        //toggle hiddenCSS
        // // see Cancel_Button notes above for meaning of hiddenCSS
        // // Causes hiddenCSS to be toggled, only if it is off.
    //}
    //else {
        //textArea.content = ''
        // // wipes text from the textbox input area.
    //}


// // // // // // // // //
// // // // // // // // // Load saved note (sidebar items)
// // // // // // // // //

// function load_note(clicked_title)
// // triggers upon one of the sidebar titlesbeing clicked
// // looks through each note in array to find one with matching title, then returns the text
    //for (items in array) {
        //if title == notesArray.title {
            //textArea.content = notesArray.content
            //break
        //}
    //}
/**/



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
    let note = {
        title: prompt("Give your note a title."),
        body: textarea.value
    }
    notesArray.push(note)
    console.log(notesArray);
    
}

// var notesArray = [];
// const list = document.querySelector

const textarea = document.querySelector("textarea");
const color_mode_btn = document.getElementById("color_mode")
const cancel_btn = document.getElementById("cancel");
const save_btn = document.getElementById("save");
const new_note_btn = document.getElementById("new_note");

color_mode_btn.addEventListener("click", change_palette);
cancel_btn.addEventListener("click", cancel_button);
new_note_btn.addEventListener("click", new_note_button);
save_btn.addEventListener("click", save_note);




















