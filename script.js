studentArray = []
function submit() {
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    // console.log(firstName);

    if (firstName == "" || lastName == "" || email == "" || password == "" ) {
        alert("you no dey see??")
    } else {
        var studentDetails = {
            firstName, lastName, email, password
        }
        document.getElementById('firstName').value = ""
        document.getElementById('lastName').value = ""
        document.getElementById('email').value = ""
        document.getElementById('password').value = ""
        studentArray.push(studentDetails)
        console.log(studentArray);
        displayInfo();
    }
    
}
function displayInfo() {
    studentInfo = ""
    var i
    for ( i = 0; i < studentArray.length; i++) {
        // console.log(studentArray[i].firstName);
        studentInfo += ` <div class="border border-info p-4 mb-3 rounded">
                                    First Name: ${studentArray[i].firstName} <br>
                                    Last Name: ${studentArray[i].lastName} <br>
                                    Email: ${studentArray[i].email} <br>
                                    Password: ${studentArray[i].password} <br>
                                </div>`
        document.getElementById('display').innerHTML = studentInfo
       }
}