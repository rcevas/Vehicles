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
    let error = 0;

    for(let i = 1; i<=4; i++ ){
        let dr = document.getElementById('dr'+i).value;
        let mr: string = document.getElementById('mr'+i).value; 

        if((dr < 0.4 || dr > 2) || (mr == "" || dr == "")){  
            error++;
            alert('Please fill the form or enter a valid diameter at the wheel n°' + i + ' (>=0.4 and <=2)');           
        }
    }
    for(let i = 1; i<=4; i++ ){
        let dr = document.getElementById('dr'+i).value;
        let mr: string = document.getElementById('mr'+i).value; 
        if(error == 0){
            document.getElementById('wmr' +i).innerHTML = mr;           
            document.getElementById('wdr' +i).innerHTML = dr;
            $("#carInfo").addClass("d-none");
            $("#wheelsInfo").addClass("d-none");
            $("#rueda" +i).removeClass("d-none");
            $("#newCar").removeClass("d-none");
            
            let wheels = new Wheel(mr, Number(dr));
            car.addWheel(wheels);
        }
    } 
    console.log(car);          
}

    
   