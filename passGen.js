var password = document.getElementById('password')
var text_to_copy = document.getElementById("textcopy").innerHTML;
    function genPassword() {
        var chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var passwordLength = 12
        var password = ''
        for (var i = 0; i <= passwordLength; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length)
            password += chars.substring(randomNumber, randomNumber + 1)
        }
        document.getElementById('password').value = password
    }
    function copyPassword() {
        var copyText = document.getElementById('password')
        copyText.select()
        copyText.setSelectionRange(0, 999)
        // document.execCommand('copy')
       

if (!navigator.clipboard){
    // use old commandExec() way
} else{
    navigator.clipboard.writeText(text_to_copy).then(
        function(){
            alert("yeah!"); // success 
        })
      .catch(
         function() {
            alert("err"); // error
      });
}  
    }