let promo = false;

document.getElementById("promo-btn").addEventListener("click", function () {
    let promoCode = document.getElementById("promo-input").value
    if (promoCode.toLowerCase() == "stevekaku") {
        promo = true;
        alert("Your promo code applied")
        document.getElementById("promo-btn").innerText = "promo applied"
        document.getElementById("promo-btn").setAttribute("disabled", true)
        updateTotal()
    }
    else {
        alert("Invalid promo code detected ")
    }



})


function updateTotal() {
    let costMemory = parseInt(document.getElementById("memory").innerText)
    let costStorage = parseInt(document.getElementById("storage").innerText)
    let costDelivery = parseInt(document.getElementById("delivery").innerText)
    let baseTotal = parseInt(document.getElementById("base-price").innerText)

    let total = costDelivery + costMemory + costStorage + baseTotal

    document.getElementById("total").innerText = total

    if (promo == true) {
        document.getElementById("final-total").innerText = total * .8
    }
    else {
        document.getElementById("final-total").innerText = total

    }

}


function updatePrice(id, price) {
    document.getElementById(id).innerText = price
    updateTotal()
}



//memory  price update
document.getElementById("memory-8").addEventListener("click", function () {
    updatePrice("memory", 0)
    updateTotal()
})

document.getElementById("memory-16").addEventListener("click", function () {
    updatePrice("memory", 180)
    updateTotal()
})


//storage price update
document.getElementById("storage-256").addEventListener("click", function () {
    updatePrice("storage", 0)
    updateTotal()
})

document.getElementById("storage-512").addEventListener("click", function () {
    updatePrice("storage", 100)
    updateTotal()
})

document.getElementById("storage-1").addEventListener("click", function () {
    updatePrice("storage", 180)
    updateTotal()
})

//delivery cost part


document.getElementById("zero-del").addEventListener("click", function () {
    updatePrice("delivery", 0)
    updateTotal()
})

document.getElementById("premium-del").addEventListener("click", function () {
    updatePrice("delivery", 20)
    updateTotal()
})


