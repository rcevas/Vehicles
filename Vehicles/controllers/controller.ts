let car: Car;


let platePattern: RegExp = /[0-9]{4}[A-Za-z]{3}$/;

function createCar(){

    let carPlate: string = document.getElementById('plate').value;
    let carBrand: string = document.getElementById('brand').value;
    let carColor: string = document.getElementById('color').value;    

    if(carPlate != "" && carBrand != "" && carColor != "" ){
        if(platePattern.test(carPlate)){
            document.getElementById('car1-plate').innerHTML = carPlate;
            document.getElementById('car1-brand').innerHTML = carBrand;
            document.getElementById('car1-color').innerHTML = carColor;
            $("#wheelsInfo").removeClass("d-none");
            $("#wheels").removeClass("d-none");
            car=new Car(carPlate,carBrand,carColor);
            
        }else{
            alert('Please enter a valid plate (0000AAA)');
        }
    }else{
        alert('Please fill the form!!!');
    }     
}
 
function createWheels(){ 

    for(let i = 1; i<=4; i++ ){
        let dr: number = document.getElementById('dr'+i).value;
        

        if(dr >= 0.4 && dr <= 2){            
            document.getElementById('wdr' +i).innerHTML = dr;
            $("#rueda" +i).removeClass("d-none");
            
        }else{
            
            alert('Please enter a valid diameter at the wheel n°' + i + ' (>=0.4 and <=2)');
        }                      
    } 
    
    for(let i = 1; i<=4; i++ ){

        let mr: string = document.getElementById('mr'+i).value;         
        
        if((mr != "" && dr != ""){            
            document.getElementById('wmr' +i).innerHTML = mr;    
        }else{
            alert('Please fill the form');
        }                 
    }        
}



    
   