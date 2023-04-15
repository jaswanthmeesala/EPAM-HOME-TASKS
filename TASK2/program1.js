function fun()
{
    let a=document.getElementById("input").value;
    let array=a.split('');
    let m=array.join(',');
    document.getElementById("output").innerHTML=m;
}