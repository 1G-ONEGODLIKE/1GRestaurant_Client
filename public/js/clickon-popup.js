const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function() {
    const productName = menuItem.querySelector('.card-title').textContent;
    const productPrice = parseFloat(menuItem.querySelector('.price').textContent);
    
    // Fetch the popup.html page content
    fetch("addtocart")
      .then(response => response.text())
      .then(data => {
        // Create a new div element to hold the popup content
        const popupContent = document.createElement('div');
        popupContent.innerHTML = data;
        
        // Find the relevant elements in the popup content
        const popupProductName = popupContent.querySelector('#product-name');
        const popupProductPrice = popupContent.querySelector('#product-price');
        const popupQuantity = popupContent.querySelector('#quantity');
        const popupTotalPrice = popupContent.querySelector('#total-price');
        const decreaseQuantityBtn = popupContent.querySelector('#decrease-quantity-btn');
        const increaseQuantityBtn = popupContent.querySelector('#increase-quantity-btn');

        // Set the values of the relevant elements
        popupProductName.textContent = productName;
        popupProductPrice.textContent = productPrice.toFixed(2);
        popupTotalPrice.textContent = productPrice.toFixed(2);
        
        // Display the popup content in a modal
        const modal = document.getElementById('popup-modal');
        const closeBtn = modal.querySelector('.close');
        const popupContentDiv = modal.querySelector('#popup-content');
        
        popupContentDiv.innerHTML = popupContent.querySelector('#popup').outerHTML;
        modal.style.display = 'block';
        
        closeBtn.addEventListener('click', function() {
          modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
          if (event.target === modal) {
            modal.style.display = 'none';
          }
        });
        
        // Event listener for the quantity input field
        popupQuantity.addEventListener('input', function() {
          const quantity = parseInt(popupQuantity.value);
          const totalPrice = productPrice * quantity;
          popupTotalPrice.textContent = totalPrice.toFixed(2);
        });

        // Event listener for the decrease quantity button
        decreaseQuantityBtn.addEventListener('click', function() {
          let quantity = parseInt(popupQuantity.value);
          if (quantity > 1) {
            quantity--;
            popupQuantity.value = quantity;
            const totalPrice = productPrice * quantity;
            popupTotalPrice.textContent = totalPrice.toFixed(2);
          }
        });

        // Event listener for the increase quantity button
        increaseQuantityBtn.addEventListener('click', function() {
          let quantity = parseInt(popupQuantity.value);
          quantity++;
          popupQuantity.value = quantity;
          const totalPrice = productPrice * quantity;
          popupTotalPrice.textContent = totalPrice.toFixed(2);
        });
      });
  });
});