var index=0;
slider();
function slider(){
    var n=document.querySelectorAll(".img");
    for(var i=0; i<n.length; i++){
        n[i].style.display="none";
    }

    index++;
    if(index>n.length){
        index=1;
    }
    n[index-1].style.display="block";
    setTimeout(slider, 2000);
}
function fun(){

    location.href = "forms.html";
}
document.querySelector(".discussion").addEventListener("click",function(){

  })
  document.querySelector(".bookApp").addEventListener("click",function(){

    // document.getElementById("allForms").style.display = "block";
    location.href = "forms.html";
  })
  document.getElementById("contact").addEventListener("click",function(){

    // document.getElementById("allForms").style.display = "block";
    location.href = "forms.html";
  })
function my1(){
    let temp= document.getElementById("a");
    let ok= document.getElementById("b");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}
function my2(){
    let temp= document.getElementById("c");
    let ok= document.getElementById("d");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my3(){
    let temp= document.getElementById("e");
    let ok= document.getElementById("f");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my4(){
    let temp= document.getElementById("g");
    let ok= document.getElementById("h");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my5(){
    let temp= document.getElementById("i");
    let ok= document.getElementById("j");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my6(){
    let temp= document.getElementById("k");
    let ok= document.getElementById("l");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my7(){
    let temp= document.getElementById("m");
    let ok= document.getElementById("n");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my8(){
    let temp= document.getElementById("o");
    let ok= document.getElementById("p");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}function my9(){
    let temp= document.getElementById("q");
    let ok= document.getElementById("r");
    if(temp.style.display=="none"){
        temp.style.display="block";
        ok.style.display="none"

    }
    else{
        temp.style.display="none"
        ok.style.display="block";
    }
    
   
}

// var btn= document.getElementsByClassName(".navbar");
// var openBtn=document.querySelector(".icons");
// openBtn.addEventListener("click", function(){ btn.style.display="inline";})

var navBar= document.getElementById("nB");
var openbtn= document.querySelector(".openIcon");
openbtn.addEventListener("click", function(){
    navBar.style.height="45vh";
    for(var i=0; i<document.querySelectorAll("#nB p").length; i++){
        document.querySelectorAll("#nB p")[i].style.display="block";
    }
  
})
document.querySelector(".block").addEventListener("mouseover", function(){
    document.querySelector(".block h3").style.display="block";
})
var index=0;
slider();
function slider(){
    var n=document.querySelectorAll(".img");
    for(var i=0; i<n.length; i++){
        n[i].style.display="none";
    }

    index++;
    if(index>n.length){
        index=1;
    }
    n[index-1].style.display="block";
    setTimeout(slider, 2000);
}

document.querySelector(".discussion").addEventListener("click",function(){
    document.querySelector("#askForm").style.display="block";
    document.querySelector(".discussion").style.display="none";
})
// document.querySelector("#submit").addEventListener("click", function(){
//     document.querySelector("#askForm").style.display="none";
//     document.querySelector("#onSubmit").style.display="block";
//     setTimeout(function(){
//         document.querySelector("#onSubmit").style.display="none";
//         document.querySelector(".discussion").style.display="block";
//     }, 5000)
// })


window.onscroll = function(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop >100){
        document.querySelector("#scroll").style.display="block";
    }else{
        document.querySelector("#scroll").style.display="none";
    }
}
document.querySelector("#scroll").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} )
