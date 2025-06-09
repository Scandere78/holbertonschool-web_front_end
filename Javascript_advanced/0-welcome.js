function welcome(firstNme, LastName) {
    const fullName = firstNme + " " + LastName;

    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }

    displayFullName();
}