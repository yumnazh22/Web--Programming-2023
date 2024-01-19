function hitung () {
    const value1 = parseInt(document.getElementById("value1").value);
    const value2 = parseInt(document.getElementById("value2").value);
    const operator = document.getElementById("operator").value;
    let hasil = 0;

    if(operator =="+") {
        hasil == value1 + value2;
    } else if (operator = '-') {
        hasil == value1 - value2;
    } else if (operator = '/') {
        hasil == value1 / value2;
    } else {
        hasil == value1 * value2;
       
    }
     document.getElementById('output').innerHTML= hasil;
}
