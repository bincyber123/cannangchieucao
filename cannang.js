// Input
function checkbmi() {
    let can_nang = Number(document.getElementById("weight").value);
    let chieu_cao = Number(document.getElementById("chieu_cao").value);
    let result, bmi;
// Process
    bmi = can_nang / (chieu_cao ^ 2);
    if (bmi < 18.5) {
        result = "Thiếu cân";

    } else if (bmi < 25)
        result = "Bình thường";
    else if (bmi < 30)
        result = "Thua can"
    else result = "obese"
// Output
// alert(result);
    document.getElementById("result").innerHTML = result;


}
