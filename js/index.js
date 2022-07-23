// Función para obtener el subtotal de los valores

function multiplicar(quantity, price, subtotals) {
    var quantity = document.querySelectorAll('.quantity');
    var price = document.querySelectorAll('.price');
    var subtotals = document.querySelectorAll('.subtotal');
    
    
    for(var i = 0; i < quantity.length; i++){ 
      subtotals[i].value = quantity[i].value * price[i].value;
     }
  
  //  Función para obtener el total de los valores

    for (var i = 0; i < subtotals.length; i++){ 
      var total = 0;
      const itemTotal = document.querySelector('.itemTotal')
      subtotals.forEach((i) => {
        let elemPrice = Number(i.value);
        total += elemPrice;
      })

        let totalPriceElem = document.querySelectorAll('.elemPrice');

        document.getElementById('total').innerHTML = totalPriceElem;
  
        console.log(total);
    }
  
    return total

}
  
//  Función para actualizar los precios

const productPrices = [
  {'name': 'Base', 'price': 2000 },
  {'name': 'Gloss', 'price': 1200 },
  {'name': 'Mascara', 'price': 2000},
  {'name': 'Labial', 'price': 1500},
]

const updatedProductPrices = productPrices.map((e) => e.price* 1.15)
console.log(updatedProductPrices);
