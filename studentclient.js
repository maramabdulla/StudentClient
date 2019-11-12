document.getElementById("get").addEventListener("click",showTable);
let arr=[];
function showTable(){
    document.getElementById('table').innerHTML='';
    let page=document.getElementById("num").value;
    fetch('http://localhost:3000/students?page='+page, {
        method: 'GET',
      
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for(let i=0; i<data.length;i++){
            document.getElementById('table').innerHTML +=' <tr><td>'+data[i].id+'</td><td>'+ data[i].first_name+'</td><td>'+ data[i].last_name+'</td><td>'+data[i].grade+'</td></tr>'
            arr.push(data[i]);
            console.log(arr);
        }
        
       }
   );
    }
   