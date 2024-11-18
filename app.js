var usernameData = false;
function inputValid() {
    var username = document.getElementById('username');
    if (username.value.length < 3) {
        username.nextElementSibling.innerText = 'atleast 3 char required'
        username.nextElementSibling.style.display = 'block'
        return;
    }
    username.nextElementSibling.style.display = 'none';

}
function checkPass() {

    var password = document.getElementById('password');
    if (password.value.length < 5) {
        password.nextElementSibling.innerText = ' password should be of 5 chars'
        password.nextElementSibling.style.display = 'block'
        return;
    }
    password.nextElementSibling.style.display = 'none'
}
function checkCityName() {
    var CityName = document.getElementById('CityName');
    if (CityName.value.length < 4) {
        CityName.nextElementSibling.innerText = ' City Name Must Of 4 Chars '
        CityName.nextElementSibling.style.display = 'block'
        return;
    }
    CityName.nextElementSibling.style.display = 'none'

}

function submitData(e) {
    e.preventDefault();
    if (username.value.length >= 3 && password.value.length >= 5 && CityName.value.length >= 4) {
        usernameData = true;
    }
    if (!usernameData) return;

    console.log(username.value);

    var is_contain_username = 0;
    for (var i = 0; i < usersData.length; i++) {
        if (usersData[i].username === username.value) {

            function displayData() {
                var ShowStatusDiv = document.getElementsByClassName("ShowStatus")[0];
                // var mainParentDiv = document.getElementsByClassName("mainParent")[0];
                ShowStatusDiv.style.display = "block";
                // mainParentDiv.style.height = "450px";
                var nameSp = document.getElementsByClassName("nameSp")[0];
                var markSp = document.getElementsByClassName("markSp")[0];
                var gradeSp = document.getElementsByClassName("gradeSp")[0];
                var statusSp = document.getElementsByClassName("statusSp")[0];

                nameSp.innerText = usersData[i].studentName;
                markSp.innerText = usersData[i].marks
                gradeSp.innerText = usersData[i].grade;
                statusSp.innerText = usersData[i].status;

            }
            displayData();
            console.log("hellow");
            is_contain_username = 1;
            break;
            
        }
        
    }
    if (!is_contain_username) {
        alert("UserName does'nt exist");
        return;
    }
    
    username.value = '';
    password.value = '';
    CityName.value = '';
    usernameData = false;
    
    console.log("stop")
}
function closeData(){
    ShowStatusDiv = document.getElementsByClassName("ShowStatus")[0];
    ShowStatusDiv.style.display = "none";
}
var usersData = [
    {
        username: 'abc1',
        password: '123456',
        studentName: 'Younas',
        marks: ' 65',
        grade: " A",
        status: " Pass",
    },
    {
        username: 'abc2',
        password: '123456',
        studentName: 'Saboor',
        marks: ' 70',
        grade: " A",
        status: " Pass",
    },
    {
        username: 'abc3',
        password: '123456',
        studentName: "Ismaeel",
        marks: ' 80',
        grade: " A+",
        status: " Pass",
    },
    {
        username: 'abc4',
        password: '123456',
        studentName: 'Zubair',
        marks: ' 60',
        grade: " A",
        status: " Pass",
    },
    {
        username: 'abc5',
        password: '123456',
        studentName: 'Shareef',
        marks: ' 50',
        grade: " B",
        status: " Fail",
    },
];
