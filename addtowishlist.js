var additemid=0;
function addtowishlist(item){
    additemid+=1;
    var selecteditem=document.createElement('div');
    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id',additemid);
    var img=document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var cartitems=document.getElementById('title');
    var delbtn=document.createElement('button');
    delbtn.innerText='DELETE';
    delbtn.setAttribute('onclick','del('+additemid+')');
    selecteditem.append(delbtn);
    selecteditem.append(img);
    cartitems.append(selecteditem);
}
function del(item){
    document.getElementById(item).remove();

}