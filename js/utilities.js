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
  const totalAmountDisplay = document.getElementById("total-amount-display");
  totalAmountDisplay.innerText = totalPrice;
  const makePurchaseBtn = document.getElementById("make-purchase-btn");
  if (totalPrice > 0) {
    makePurchaseBtn.removeAttribute("disabled");
  }
  const applyBtn = document.getElementById("apply-btn");
  if(totalPrice >= 200){
    applyBtn.removeAttribute("disabled");
  }
  
  



}
