import * as Helper from './helper.js';
import { Calculator } from './Calculator.js';
import { Notepad } from './Notepad.js';
import { Clock } from './Clock.js';
import { StickyNotes } from './StickyNotes.js';

const apps = [
  {name:"Calculator", module:Calculator},
  {name:"Notepad", module:Notepad},
  {name:"File Explorer", module:null},
  {name:"Settings", module:null},
  {name:"Microsoft Edge", module:null},
  {name:"Mail", module:null},
  {name:"Calendar", module:null},
  {name:"Photos", module:null},
  {name:"Music", module:null},
  {name:"Video Player", module:null},
  {name:"Paint", module:null},
  {name:"Word", module:null},
  {name:"Excel", module:null},
  {name:"PowerPoint", module:null},
  {name:"Camera", module:null},
  {name:"Snipping Tool", module:null},
  {name:"Weather", module:null},
  {name:"Clock", module:Clock},
  {name:"Maps", module:null},
  {name:"Command Prompt", module:null},
  {name:"Control Panel", module:null},
  {name:"Windows Update", module:null},
  {name:"Photoshop", module:null},
  {name:"Games / Solitaire", module:null},
  {name:"Sticky Notes", module:StickyNotes},
  {name:"Voice Recorder", module:null}
];

const desktop = document.getElementById('desktop');

apps.forEach(app=>{
  const icon = document.createElement('div');
  icon.className='icon';
  icon.innerHTML=app.name;
  icon.ondblclick=()=>{
    const content = app.module ? app.module() : document.createElement('p');
    if(!app.module) content.innerHTML=`<p>${app.name} content goes here.</p>`;
    Helper.makeWindow(app.name, content);
  };
  desktop.appendChild(icon);
});
