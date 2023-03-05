function kaydet(){
    let username = document.getElementById('user').value;
    let password = document.getElementById('past').value;

    if (username== '') {
        alert ('kullanıcı adı giriniz:')
    }
    else if(password== ''){
        alert('parolanızı giriniz:')
    }
    else{
        alert('Kullanıcı adınız:' + username + '\nParolanız:' + password);
    }

}