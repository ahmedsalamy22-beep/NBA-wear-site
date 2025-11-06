const CART_KEY='cart';
function getCart(){return JSON.parse(localStorage.getItem(CART_KEY)||'[]');}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));}
function formatDateEgypt(){
 const d=new Date();
 return d.toLocaleString('ar-EG',{timeZone:'Africa/Cairo',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'});
}
document.addEventListener('submit',e=>{
 if(e.target.classList.contains('add-to-cart-form')){
  e.preventDefault();
  const f=e.target;
  const it={id:f.dataset.id,name:f.dataset.name,price:Number(f.dataset.price),
  size:f.size.value,color:f.color.value,quantity:1,date:formatDateEgypt()};
  let c=getCart();c.push(it);saveCart(c);alert('تمت الإضافة!');
 }
 if(e.target.id==='checkout-form'){
  e.preventDefault();
  saveCart([]);document.getElementById('checkout-success').innerHTML='<b>تم إرسال الطلب</b>';
 }
});
document.addEventListener('DOMContentLoaded',()=>{
 const ci=document.getElementById('cart-items');
 if(ci){
  let c=getCart(),h='';
  c.forEach(x=>h+=`<tr><td>${x.name}</td><td>${x.size}</td><td>${x.color}</td><td>${x.price}</td></tr>`);
  ci.innerHTML=h;
  document.getElementById('cart-total').textContent=c.reduce((s,i)=>s+i.price,0);
 }
});