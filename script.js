let print="" 
function comment() {
    let name= document.getElementById("name");
    name = String(name.value);
    
    let comment= document.getElementById("comment");
    comment = String(comment.value);
    
    let currentcomments = "<br>" + "Name: " + name + "<br>" + "Comment: " + comment + "<br>" + "<br>" ;
    print = currentcomments + print;
    

    let comment1 = document.getElementById("comments");
    comment1.innerHTML = print;
}
function shop() {
    let Img1Amount = document.getElementById("Img1Amount");
    Img1Amount = Number(Img1Amount.value);
    
    let Img2Amount = document.getElementById("Img2Amount");
    Img2Amount = Number(Img2Amount.value);
    
    let Img3Amount = document.getElementById("Img3Amount");
    Img3Amount = Number(Img3Amount.value);
    
    let Img4Amount = document.getElementById("Img4Amount");
    Img4Amount = Number(Img4Amount.value);
    
    let Img5Amount = document.getElementById("Img5Amount");
    Img5Amount = Number(Img5Amount.value);
    
    let Img6Amount = document.getElementById("Img6Amount");
    Img6Amount = Number(Img6Amount.value);
    
    let Img7Amount = document.getElementById("Img7Amount");
    Img7Amount = Number(Img7Amount.value);
    
    let Img8Amount = document.getElementById("Img8Amount");
    Img8Amount = Number(Img8Amount.value);
    
    let total = Img1Amount*200 + Img2Amount*300 + Img3Amount*100 + Img4Amount*400 + Img5Amount*200 + Img6Amount*100 + Img7Amount*300 + Img8Amount*100;
    
    let totalprice = document.getElementById("result");
    totalprice.innerHTML = "Your total is: $" + total;
}