window.onload=()=>{
    let previousinput
    let operation
    let resultdiv_ref=document.querySelector('#result')
    resultdiv_ref.value='0'
        
   
 
    let btns_ref=document.querySelectorAll('input[type=button]')
    btns_ref.forEach(btn=>{
        btn.addEventListener('click', (e)=>{
            if(e.currentTarget.classList.contains('numeric-btns'))
            {   if(resultdiv_ref.value==='0'){
                resultdiv_ref.value=' '
            }
                resultdiv_ref.value+=e.currentTarget.value
            }
            else{
                
                switch (e.currentTarget.value){
                case '=':
                    switch(operation){
                        case '+':
                            resultdiv_ref.value=parseInt(previousinput)+parseInt(resultdiv_ref.value)
                        break;
                        case '-':
                            resultdiv_ref.value=parseInt(previousinput)-parseInt(resultdiv_ref.value)
                        break;
                        case 'x':
                            resultdiv_ref.value=
                            parseInt(previousinput)*parseInt(resultdiv_ref.value)
                        break;
                        case '/':
                            resultdiv_ref.value=parseInt(previousinput)/parseInt(resultdiv_ref.value)
                        break;
                    }
                break;

                case 'C':
                    previousinput=0
                    resultdiv_ref.value=' '
                break;

                default:
                    previousinput=resultdiv_ref.value
                    resultdiv_ref.value=''
                    operation=e.currentTarget.value
                    console.log(previousinput)

                
                
            }
            
        }
        
          
            
        })
    })
}