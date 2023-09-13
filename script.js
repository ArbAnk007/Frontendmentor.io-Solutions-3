let thankYouContainer = document.querySelector(".container");
let submitBtn = document.querySelector(".js-submit-btn");
let ratingBtn = document.querySelectorAll(".rating-container button")

let rating

function submitFeedback(){
    thankYouContainer.classList.add("thanks-container")
    thankYouContainer.innerHTML = `
    <img class="thankyou-img" src="images/illustration-thank-you.svg" alt="">
        <div class="rating-display">You selected ${rating} out of 5</div>
        <h2 class="thankyou-heading">Thank you!</h2>
        <p class="thankyou-statement">We appreciate you taking the time to give a rating. If you ever need more support
            don't hesitate to get in
            touch!</p>
    `
}

for(let i=0; i<ratingBtn.length; i++){
    ratingBtn[i].addEventListener('click',() =>{
        for(let k=0; k<ratingBtn.length; k++){
        ratingBtn[k].classList.remove("selected")
        }
        ratingBtn[i].classList.add("selected")
        rating = ratingBtn[i].innerText
    })
}

submitBtn.addEventListener('click',() => {
    if(rating){
        submitFeedback()
    }
})