function handleSearch(){
    // loading animation starts
    loadingAnimationToggle(true);
    const searchInputElement = document.getElementById('search-input-filed');
    const searchInputValue = searchInputElement.value
    loadPhone(searchInputValue);
}
function loadingAnimationToggle(isLoading){
 const loaderAnimation = document.getElementById("loader-animation");
 if(isLoading){
    loaderAnimation.classList.remove("hidden");
 }
 else{
    loaderAnimation.classList.add("hidden");
 }
}


const loadPhone = async(searchText) => {
   const res = await fetch(`
      https://openapi.programming-hero.com/api/phones?search=${searchText}
      `)
    // const res = await fetch(` 
   //     https:openapi.programming-hero.com/api/phones?search=${searchText} 
   // `);
    console.log("Server Response: ",res);
     const serverData = await res.json();
     displayPhone(serverData.data);
}; 

const displayPhone = (data) => {
    console.log(data);
        const cardContainer = document.getElementById("card-section");
        cardContainer.innerHTML = "";
       data.forEach(Phone => {
            const productCard = document.createElement("div");
        productCard.classList.add("card"); 

        productCard.innerHTML = `
        <div class="card-image">
                <img src=${Phone.image} alt="Motorola-image"/>
             </div>
             <h3 class="card-title">${Phone.phone_name}</h3> 
             <P class="card-description">
                Motorola smartphones offer excellent value for money, combining powerful hardware with sleek design.
             </P>
             <div class="card-price">
                <span>$</span>
                <span id="card-item-price">570</span>
                
             </div>
             <div class="card-button">
                <button class="btn">Show Details</button>

             </div>
        `;

        cardContainer.appendChild(productCard);
       }) 
       // loadingg animation ends here
       loadingAnimationToggle(false);
    };