export function Calculator() {
  const container=document.createElement('div');
  const inputA=document.createElement('input'); inputA.placeholder="Number 1"; inputA.type="number";
  const inputB=document.createElement('input'); inputB.placeholder="Number 2"; inputB.type="number";
  const btn=document.createElement('button'); btn.innerText="Add";
  const result=document.createElement('p');
  btn.onclick=()=>{result.innerText="Result: "+(parseFloat(inputA.value||0)+parseFloat(inputB.value||0));};
  container.append(inputA,inputB,btn,result);
  return container;
}
