var usernameData = false;
function inputValid() {
    var username =  document.getElementById('username');
    if (username.value.length < 3) {
        username.nextElementSibling.innerText = 'atleast 3 char required'
        username.nextElementSibling.style.display = 'block'
        return;
    }
    username.nextElementSibling.style.display = 'none';

}
function checkPass(){
    
    var password = document.getElementById('password');
      if(password.value.length < 5){
        // console.log(password.nextElementSibling)
        password.nextElementSibling.innerText = ' password should be of 5 chars'
        password.nextElementSibling.style.display = 'block'
        return;
      }
      password.nextElementSibling.style.display = 'none'
}
function checkCityName(){
    var CityName = document.getElementById('CityName');
      if(CityName.value.length < 4 ){
        CityName.nextElementSibling.innerText = ' City Name Must Of 4 Chars '
        CityName.nextElementSibling.style.display = 'block'
        return;
      }
        CityName.nextElementSibling.style.display = 'none'

    }

    function submitData(e) {
    if( username.value != '' && password.value != '' && CityName.value != '' ){
            usernameData = true; 
            
        }

        e.preventDefault();
    
    if (!usernameData) return

    
    var i = 0;
    while (i < usersData.length) {
        if (usersData[i].username === username.value) {
            // alert(password);
            console.log("hellow")
            for( var key in usersData){
                alert( "Your Marks Is : " + usersData[key].marks)
                return;
            }
            return;
        }
        i++;
    }
    username.value = ''; 
    password.value = '';
    CityName.value = '';
    usernameData = false;
}


var usersData = [
    {
        username: 'abc1',
        password: '123456',
         marks   :  '65'
    },
    {
        username: 'abc2',
        password: '123456',
         marks   :  '70'
    },
    {
        username: 'abc3',
        password: '123456',
        marks   :  '80'
    },
    {
        username: 'abc4',
        password: '123456',
         marks   :  '60'
    },
    {
        username: 'abc5',
        password: '123456',
         marks   :  '50'
    }

]