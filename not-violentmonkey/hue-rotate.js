(() => {
  const ID = "a17ec8b21-5fdf-4afe-8355-6e3ddfb4909b";

  const elements = ["controls", "slider","styles","hue_rotate"]

  for (let i = 0; i < elements.length; i++) {
    const tempOldElement = document.getElementById(`${ID}-${elements[i]}`);
    if (tempOldElement) {
      tempOldElement.remove();
    }
  }

  const makeElement = (tag, parent, text, attributes) => {
    const tempElement = document.createElement(tag);
    if (text) {
      tempElement.textContent = text;
    }
    if (parent) {
      parent.appendChild(tempElement);
    }
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        tempElement.setAttribute(key, value);
      });
    }
    return tempElement;
  };

  const sliderId = `${ID}-slider`
  const controlsId = `${ID}-controls`

  const headEl = document.getElementsByTagName("head")[0];
  const bodyEl = document.getElementsByTagName("body")[0];

  const controls = makeElement("div", bodyEl, "", {
    style: "position: sticky; top: 0; left: 0; right: 0; margin:5px auto;z-index:888;text-align:center;width:300px;border:1px solid black;padding:3px;background-color:white;transition:opacity 0.5s",
    id: controlsId
  })

  const input = makeElement("input", controls, "", {
    type:"range",
    style:"width:100%;",
    id: sliderId,
    min: 0,
    max: 360,
    step: 0.1,
    value: 0,
  })

  input.addEventListener("input", (e) => {
    const tempOldElement = document.getElementById(`${ID}-hue_rotate`);
    if (tempOldElement) {
      tempOldElement.remove();
    }

    makeElement("style", headEl, `* {filter: hue-rotate(${e.currentTarget.value}deg);}\n#${ID}-controls {opacity: 0}\n#${ID}-controls:hover {opacity: 1}`, {id: `${ID}-hue_rotate`})
  })
})()

// javascript:(()=>{const e="a17ec8b21-5fdf-4afe-8355-6e3ddfb4909b",t=["controls","slider","styles","hue_rotate"];for(let n=0;n<t.length;n++){const o=document.getElementById(`${e}-${t[n]}`);o&&o.remove()}const n=(e,t,n,o)=>{const r=document.createElement(e);return n&&(r.textContent=n),t&&t.appendChild(r),o&&Object.entries(o).forEach(([e,t])=>{r.setAttribute(e,t)}),r},o=`${e}-slider`,r=`${e}-controls`,d=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("body")[0],a=n("div",i,"",{style:"position: sticky; bottom: 0; left: 0; right: 0; margin:5px auto;z-index:888;text-align:center;width:300px;border:1px solid black;padding:3px;background-color:white;transition:opacity 0.5s",id:r});n("input",a,"",{type:"range",style:"width:100%;",id:o,min:0,max:360,step:.1,value:0}).addEventListener("input",t=>{const o=document.getElementById(`${e}-hue_rotate`);o&&o.remove(),n("style",d,`* {filter: hue-rotate(${t.currentTarget.value}deg);}\n#${e}-controls {opacity: 0}\n#${e}-controls:hover {opacity: 1}`,{id:`${e}-hue_rotate`})})})();
