let display=document.querySelector('.display');
let clearBtn=document.querySelector('.clearBtn');
let isEqualsTo=document.querySelector('.isEqualsTo');
function appendText(text){
      
       if(display.innerText==='0'||display.innerText==="Infinity"||display.innerText==="ERROR"){
              display.innerText=text;
              return;
       }
display.innerText=`${display.innerText}${text}`;
}
function removeTextOfDisplay(){
       display.innerText='0';
}
function calculate(){
       
       try{
               if(display.innerText=='143'){
              display.innerText="I Love You my wife 🐼";
              return;
        }
display.innerText=eval(display.innerText);
}catch(error){
display.innerText='ERROR';
}
}