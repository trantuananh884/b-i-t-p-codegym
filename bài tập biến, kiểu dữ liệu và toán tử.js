function tinhtb() {
    let a = +document.getElementById("Vat ly").value;
    let b = +document.getElementById("Sinh hoc").value;
    let c = +document.getElementById("Hoa hoc").value;
    let tb = (a+b+c)/3;
    document.getElementById("ket qua bai 1").innerHTML="diem trung binh la:" +tb;
}
function chuyendoi() {
    let x = +document.getElementById("doC").value;
    let y = (x/5*9)+32;
    document.getElementById("ket qua bai 2").innerHTML="do F la:" +y;

}
function tinhdientich() {
    let r = +document.getElementById("nhap ban kinh1").value;
    let s = r*Math.PI;
    document.getElementById("ket qua bai 3").innerHTML= "dien tich la:" +s;

}