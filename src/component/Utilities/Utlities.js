const totalTime = () =>{
    const times = totalDuration();
}

// const addToCart = (time) =>{
//     const totalDuration = document.getElementById(name);
//     const durarion = phoneName.innerText;
//     //saveDataToLS();
//     updateDataToLS(time);
// }

// const saveDataToLS = () =>{
//     let cart = {};
//     const savedCart = localStorage.getItem('cart');
//     if(savedCart){
//        cart = JSON.parse(savedCart);
//     }
//     return cart;
// }

// const updateDataToLS = (time) =>{
//     const upcart = saveDataToLS();
//     const intPrice = parseInt(price);
//     const modelPrice = upcart[name]
//     console.log(upcart);
//     if(!modelPrice){
//         upcart[name] = intPrice;
//     }
//     else{
//         const newPrice = modelPrice + intPrice;
//         upcart[name] = newPrice;
//     }
//     localStorage.setItem('cart', JSON.stringify(upcart));
// }

// const removeDataFromLS = (time) =>{
//     const savedCart = localStorage.getItem('cart');
//     //console.log(savedCart);
//     if(savedCart){
//         const upSavedCart = JSON.parse(savedCart);
//         //console.log(upSavedCart);
//         //console.log(name);
//         if(name in upSavedCart){
//             delete upSavedCart[name];
//             console.log(upSavedCart);
//             localStorage.setItem('cart', JSON.stringify(upSavedCart));
//         }
//     }
// }

const totalDuration = (time) =>{
 const displayedTime = document.getElementById('activity-time');
 const stringTime = displayedTime.innerText;
 const activityDuration = parseInt(stringTime);
 const totalDuration = activityDuration + time;
 displayedTime.innerText = totalDuration;
}


const breakTime = (breakTime) =>{
    const breakDuration = document.getElementById('break-time');
    breakDuration.innerText = breakTime;
}

export {
    totalDuration,
    totalTime,
    breakTime
}

