document.getElementById('setUsernameBtn').addEventListener('click', function() {
    let username = document.getElementById('userInput').value;
    if (username) {
        document.title = `${username}'s Phone Book`;
        alert('Username set to: ' + username);
    }
});

document.getElementById('setImagebtn').addEventListener('click', function() {
    let imageUrl = document.getElementById('imageInput').value;
    if (imageUrl) {
        document.getElementById('proflieImage').src = imageUrl;
        alert('Profile Image Updated')
    }
});

document.getElementById('addPhoneBtn').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value;
    let phone = document.getElementById('phoneInput').value;

    if (name && phone) {
        let table = document.getElementById('phoneTable').getElementsByTagName('tbody')[0];
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        let rowCount = table.row.length;
        cell1.innerHTML = rowCount;
        cell2.innerHTML = name;
        cell3.innerHTML = phone;

        document.getElementById('nameInput').value = '';
        document.getElementById('phoneInput').value = '';
        }
});
