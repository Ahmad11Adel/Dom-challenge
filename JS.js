
document.body.style.margin= '0px' ;




let my = document.createElement('div');
my.style.background='grey';
document.body.appendChild(my);
my.style.height='80%';

    
    

for( var i=1; i<=12;i++){
    let appenddiv = document.createElement('div');
    appenddiv.appendChild(document.createElement('span'));
    appenddiv.children[0].textContent= i  ;
    my.appendChild(appenddiv);
    appenddiv.append('product');



    appenddiv.style.cssText='  padding: 20px;  text-align: center; margin: 10px;  display: inline-block;  background-color: white; box-sizing: border-box; width: 31%; ';

    appenddiv.children[0].style.cssText='font-size: 40px; display: block; margin-top: 10px; margin-bottom: 10px; height:76px ';



}


let footer = document.createElement('footer');
footer.innerText=('copy rights 2021');
footer.style.cssText='background-color: green; color:white; font-size: 26px; padding: 20px; text-align: center; '

document.body.appendChild(footer);






