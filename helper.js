export function makeWindow(title, contentElement) {
  const desktop = document.getElementById('desktop');
  const winDiv = document.createElement('div');
  winDiv.className = 'window';
  winDiv.style.zIndex = Date.now(); // simple z-index
  winDiv.innerHTML = `<div class="title-bar">${title} <button>X</button></div><div class="window-content"></div>`;
  desktop.appendChild(winDiv);
  const content = winDiv.querySelector('.window-content');
  content.appendChild(contentElement);
  // Close button
  winDiv.querySelector('button').onclick = () => winDiv.remove();
  // Drag
  const titleBar = winDiv.querySelector('.title-bar');
  titleBar.onmousedown = (e)=>{
    const offsetX = e.clientX - winDiv.offsetLeft;
    const offsetY = e.clientY - winDiv.offsetTop;
    function move(e){winDiv.style.left = e.clientX-offsetX+'px'; winDiv.style.top = e.clientY-offsetY+'px';}
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', ()=>document.removeEventListener('mousemove', move), {once:true});
  };
}
