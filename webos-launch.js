(function(){'use strict';
function params(value){try{return typeof value==='string'?JSON.parse(value):value||{}}catch(e){return {}}}
function adopt(value){var p=params(value),sid=p.gymduoSid||p.params&&p.params.gymduoSid;if(typeof sid!=='string'||!/^[a-f0-9]{64}$/.test(sid))return;window.gymDuoInitialTvSid=sid;if(window.gymDuoReceiverResume)window.gymDuoReceiverResume(sid);}
function fromHash(){if(/^#sid=[a-f0-9]{64}$/.test(location.hash)){adopt({gymduoSid:location.hash.slice(5)});try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}}}
fromHash();window.addEventListener('hashchange',fromHash);
if(window.PalmSystem)adopt(PalmSystem.launchParams);
window.addEventListener('webOSLaunch',function(e){adopt(e.detail||window.PalmSystem&&PalmSystem.launchParams)});
window.addEventListener('webOSRelaunch',function(e){adopt(e.detail||window.PalmSystem&&PalmSystem.launchParams)});
window.addEventListener('keydown',function(e){if(e.keyCode===461&&window.PalmSystem&&PalmSystem.platformBack){e.preventDefault();PalmSystem.platformBack()}});
})();
