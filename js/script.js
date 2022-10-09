function clickClose() {
    let element = document.querySelector('#block-user');
    element.classList.add("hidden");
}

function clickOpen() {
    let element = document.querySelector('#block-user');
    element.classList.remove("hidden");
}

function clickSave() {
    var form = document.getElementById('user-form');
    var userName = document.getElementById('user-name');
    var formData = new FormData(form);

    userName.textContent = formData.get('name')+" " + formData.get('first-name')+" " + formData.get('three-name')+" " + formData.get('date')+" ";
    /*console.log(formData.get('name'));
    for (let [key, value] of formData) {
        //console.log(`${key} - ${value}`)
      }*/
}