const sharebut=document.getElementById("share-bt")
const userInput=document.getElementById("inputva").value;
const mes=`some thing from `+ userInput
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
