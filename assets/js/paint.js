function configureListeners() {
    let images = document.getElementsByTagName('img')


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners  
        images[i].addEventListener('mouseover',(event)=>{
            document.querySelector('#color-name').textContent = getProductInfo(event.target.id).colorName
            document.querySelector('#color-price').textContent = getProductInfo(event.target.id).price
            event.target.style.opacity = 0.5
        }) 
        images[i].addEventListener('mouseout',(event)=>{
            document.querySelector('#color-name').textContent = ""
            document.querySelector('#color-price').textContent = ""
            event.target.style.opacity = 1.0
        })
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price 
            price = "$14.99"
            colorName = "Lime Green"    
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price   
            price = "$11.14"
            colorName = "Brown"     
            break;            
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price   
            price = "$22.99"
            colorName = "Royal Blue"   
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price   
            price = "$13.42"
            colorName = "Red"   
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price    
            price = "$21.98"
            colorName = "White"       
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price    
            price = "$4.99"
            colorName = "Black"        
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price  
            price = "$8.22"
            colorName = "Cyan"   
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price    
            price = "$11.99"
            colorName = "Purple"   
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price  
            price = "$14.99"
            colorName = "Yellow"   
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        //let colorPrice = // select element with corresponding id
        // display price
        
        //let color = // select element with corresponding id
        //display color name
    }

    return {
        price: price,
        colorName: colorName
    }
    
}
