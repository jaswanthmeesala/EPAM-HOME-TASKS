function fun()
        {
            let d=document.getElementById("input").value;
            if(d<3)
            {
                document.getElementById("output").innerHTML="Amount you have to pay = "+(d*40);
            }
            else if(d>=3 && d<7)
            {
                document.getElementById("output").innerHTML="Amount you have to pay = "+((d*40)-20);
            }
            else
            {
                document.getElementById("output").innerHTML="Amount you have to pay = "+((d*40)-50);
            }
        }