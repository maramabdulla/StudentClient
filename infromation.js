document.getElementById("but").addEventListener("click",showInfromation);
function showInfromation(){
    let id1=document.getElementById("numid").value;
    fetch('http://localhost:3000/students/'+id1, {
    method: 'GET',
  
})
.then(res => res.json())
.then(data =>{
   
    document.getElementById("forms").innerHTML ='';
    document.getElementById("forms").innerHTML ='<input value="'+ data.first_name + '"> <input value="'+ data.last_name + '"> <input value="'+ data.grade + '">';

    
}
);

}