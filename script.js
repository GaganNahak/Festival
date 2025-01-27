const sharebut=document.getElementById("share-bt")
let userInput=document.getElementById("inputva").value;
let mes=`some thing from `+encodeURIComponent(userInput)
sharebut.addEventListener("click",()=>{
    if(navigator.share){
       navigator.share({
         title:"gagan",
        text:mes,
         url:"https://www.google.com" ,
       }).then(()=>{
        console.log("ok")
       }).catch((err)=>{
        console.log(err)
       })
    }else{
        alert("unsupport")
    }
})
