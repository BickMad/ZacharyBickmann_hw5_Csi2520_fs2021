
window.onload = function (){
    document.getElementById('allReplies').innerHTML = localStorage.getItem('templateStore');
}
const footer = document.getElementById('mainFooter');
const replyContainer = document.getElementById('allReplies');
document.getElementById('addReplies').addEventListener('click', function (ev){
    

    addReply(ev);
})
function addReply(ev){
    let replyText, divWrap;
    const textBox = document.createElement('div');
    const replyButton = document.createElement('button');
    replyButton.className = 'buttonReply';
    replyButton.innerHTML = 'Reply';
    if(hasClass(ev.target.parentElement, 'divStuff')){
        const divWrap = document.createElement('div');
        divWrap.className= 'theWrap';
        divWrap.style.marginLeft = 0;
       replyText = document.getElementById('comment').value;
       document.getElementById('comment').value = '';
       textBox.innerHTML = replyText;
       textBox.style.backgroundColor = "#00154f";
       textBox.style.padding = "5px";
       textBox.style.width = "50%";
       const textArea = document.createElement('textarea');
            textArea.style.marginRight = '20px';
       divWrap.append(textBox, replyButton);
       replyContainer.appendChild(divWrap);
     } else{
        divWrap = ev.target.parentElement;
        replyText = ev.target.parentElement.firstElementChild.value;
        textBox.innerHTML = replyText;
        textBox.style.backgroundColor = "#002794";
        divWrap.innerHTML = '';
        divWrap.append(textBox, replyButton);
       }
       setOnLocalStorage();

    }
    function setOnLocalStorage(){
        localStorage.setItem('templateStore', document.getElementById('allReplies').innerHTML);
    }
    function hasClass(elem, className){
        return elem.className.split(' ').indexOf(className)> -1;
    }
    document.getElementById('allReplies').addEventListener('click', function (e){
        if (hasClass(e.target, 'buttonReply')){
            const parentDiv = e.target.parentElement;
            const divWrap = document.createElement('div');
            divWrap.style.marginLeft = (Number.parseInt(parentDiv.style.marginLeft) + 50).toString() + 'px';
            divWrap.className = 'theWrap';
            divWrap.style.display = "block";
            const textArea = document.createElement('textarea');
            textArea.style.width = "50%";
            textArea.style.height = "40px";
            textArea.style.marginRight = '50px';
            
            const addReplyButton = document.createElement('button');
            addReplyButton.className = 'newReply';
            addReplyButton.innerHTML= 'Add Reply';
            divWrap.append(textArea, addReplyButton);
            divWrap.style.width = "50%";
            parentDiv.appendChild(divWrap);
        } else if(hasClass(e.target, 'newReply')){
            addReply(e);
        }
        
    });