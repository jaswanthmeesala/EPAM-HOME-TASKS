let operation;
function op(op)
{
    operation=op;
}
function fun()
{
    let value1=parseInt(document.getElementById("val1").value);
    let value2=parseInt(document.getElementById("val2").value);
    switch(operation)
    {
        case '+': document.getElementById("output").innerHTML="Result = "+(value1+value2);
                break;
        case '-': document.getElementById("output").innerHTML="Result = "+(value1-value2);
                break;
        case '*': document.getElementById("output").innerHTML="Result = "+(value1*value2);
                break;
        case '/': document.getElementById("output").innerHTML="Result = "+(value1/value2);
                break;
    }
}