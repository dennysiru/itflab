function setUsername() {
  // Check Empty Fields
  const username = document.getElementById("username").value;
  const usernamePreview = document.getElementById("usernamePreview");

  // Check Empty Fields
  if (username !== "") {
    usernamePreview.textContent = username;
    return;
  }

  // Error message
  alert("Please enter a username");
}

function setProfile() {
  // Check Empty Fields
  const profile = document.getElementById("profile").value;
  const profilePreview = document.getElementById("profilePreview");

  // Check Empty Fields
  if (profile !== "") {
    profilePreview.src = profile;
    //Clear the input field
    profile.value = "";
    return;
  }
  // Error message
  alert("Please enter a profile picture");
}

let i = 1;
function addPhoneNumber() {
  // Check Empty Fields
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");

  // Check Empty Fields
  if (name.value && phone.value) {
    // Get Table
    const row = document.getElementById("phoneTable").insertRow();
    // Insert new cells
    [++i, name.value, phone.value].forEach(
      (text) => (row.insertCell().textContent = text)
    );
    // Clear input fields
    name.value = phone.value = "";
  } else {
    // Error message
    alert("Please enter both name and phone number");
  }
}
