export function Clock() {
  const p = document.createElement('p');
  function updateTime() { p.innerText = new Date().toLocaleTimeString(); }
  updateTime();
  setInterval(updateTime,1000);
  return p;
}
