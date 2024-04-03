let sample = document.createElement("div")
sample.setAttribute("class","main")

setTimeout(() => {
   sample.innerHTML=10; 
   setTimeout(() => {
    sample.innerHTML=9;
    setTimeout(() => {
        sample.innerHTML=8;
        setTimeout(() => {
            sample.innerHTML=7;
            setTimeout(() => {
                sample.innerHTML=6;
                setTimeout(() => {
                    sample.innerHTML=5;
                    setTimeout(() => {
                        sample.innerHTML=4;
                        setTimeout(() => {
                            sample.innerHTML=3;
                            setTimeout(() => {
                                sample.innerHTML=2;
                                setTimeout(() => {
                                    sample.innerHTML=1;
                                    setTimeout(() => {
                                        sample.innerHTML="<p>Happy Independence Day</p>"; 
                                     }, 1000); 
                                 }, 1000); 
                             }, 1000); 
                         }, 1000); 
                     }, 1000); 
                 }, 1000); 
             }, 1000); 
         }, 1000); 
     }, 1000); 
 }, 1000);
}, 1000);

document.body.append(sample)

