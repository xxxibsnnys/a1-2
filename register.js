function apply(){
    let cName=document.getElementById('companyName').value;
    let name=document.getElementById('name').value;
    let contract=document.getElementById('contract').value;
    let count=document.getElementById('chair').value;
    let bSize=document.getElementById('boothSize').value;
    console.log(bSize);


    if(cName=="" || name=="" || contract=="" ){
        alert("please enter your information!");
    }
    else if(count>10 || count<1){
        alert("the number of chairs must between 1 and 10")
    }
    else if(bSize==0){
         alert("please select your booth size")
     }
    else{
        alert("successful");
    }

}