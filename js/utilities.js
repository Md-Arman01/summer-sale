let totalPrice = 0;
function handleClick(target) {
  const countCardName = document.getElementById("count-card-name");
  const itemName = target.childNodes[7].childNodes[1].innerText;
  const countNumber = countCardName.childElementCount;
  const ol = document.createElement("ol");
  ol.innerHTML = `${countNumber + 1}.  ${itemName}`;
  countCardName.appendChild(ol);
  const itemPriceString =
    target.childNodes[7].childNodes[3].innerText.split(" ")[0];
  const itemPrice = parseFloat(itemPriceString);
  totalPrice = totalPrice + itemPrice;
  const toDecimalTotalPrice = totalPrice.toFixed(2)
  const totalAmountDisplay = document.getElementById("total-amount-display");
  totalAmountDisplay.innerText = toDecimalTotalPrice;

  const payTotalField = document.getElementById('payTotal');
  payTotalField.innerText = toDecimalTotalPrice;
  
//   makePurchaseBtn unabled
  const makePurchaseBtn = document.getElementById("make-purchase-btn");
  if (totalPrice > 0) {
    makePurchaseBtn.removeAttribute("disabled");
  }
  //   applyBtn unabled
  const applyBtn = document.getElementById("apply-btn");
  if(totalPrice >= 200){
    applyBtn.removeAttribute("disabled");
    document.getElementById('apply-input-field').addEventListener('keyup', function(event){
        const text = event.target.value;
        document.getElementById("apply-btn").addEventListener('click', function(){
            if(text === 'SELL200'){
                const withOutDiscount = totalPrice;
                const discountPercent = 20 / 100;
                const withDiscount = totalPrice - (withOutDiscount * discountPercent);
                const discountAmount = totalPrice - withDiscount;
                const toDecimalDiscountPrice = discountAmount.toFixed(2)
                const discountField = document.getElementById('discount');
                discountField.innerText = toDecimalDiscountPrice;
                const payTotalField = document.getElementById('payTotal');
                const payTotalWithDiscount = toDecimalTotalPrice - toDecimalDiscountPrice;
                const toDecimalPayTotalWithDiscount = payTotalWithDiscount.toFixed(2)
                payTotalField.innerText = toDecimalPayTotalWithDiscount;
            }
        })
        
      })
  }

  document.getElementById('go-home-btn').addEventListener('click', function(){
    window.document.location.href = "index.html";
  })

  



}
