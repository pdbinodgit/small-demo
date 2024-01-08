const first_name=document.getElementById('firstName');
const last_name=document.getElementById('lastName');
const user_name=document.getElementById('username');
const password=document.getElementById('password');
const form=document.getElementById('form');


function add(){
   
    const formdata=new FormData(form);
    fetch('http://localhost:8081/user/save',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(Object.fromEntries(formdata)),
    })
    .then(Response=>Response.json())
    .then(data=> {
        console.log(data);
    })
    .catch(error=>{
        console.error('error',error);
    });

}


const handleSubmit=()=>{

    form.addEventListener('button',(e)=>{
        e.preventDefault();
    });

   

    if(first_name.value==''||last_name.value==''||user_name.value==''||password.value==''){
        alert("all fields are required.");
    }else{
        add();
        
        first_name.value='';
        last_name.value='';
        user_name.value='';
        password.value='';
    }

}
console.log("***@@*");
getData();
function getData(){

    fetch('http://localhost:8081/user/get',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        },        
})
.then(Response=>Response.json())
.then(result=>{
  
    // if (result.status === 'OK' && result.data && Array.isArray(result.data)){
     
        result.data.forEach(element => {
      
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));

    td1.innerHTML=element.firstName;
    console.log(td1);
    td2.innerHTML=element.lastName;
    td3.innerHTML=element.username;
    td4.innerHTML=element.password;

    document.getElementById('table_id').appendChild(tr);
    });
// }
});
}
