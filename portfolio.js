// Native dialog supports keyboard dismissal and restores focus to the image.
const dialog=document.createElement('dialog');
dialog.className='media-viewer';dialog.setAttribute('aria-label','이미지 크게 보기');
dialog.innerHTML='<button type="button" class="media-close" autofocus>닫기 ×</button><div class="media-content"></div><p class="media-caption"></p>';
document.body.append(dialog);let source;
document.querySelectorAll('.case-study figure').forEach(figure=>{
 const img=figure.querySelector('img');if(!img)return;
 let trigger=img.closest('a');
 if(!trigger){trigger=document.createElement('button');trigger.type='button';trigger.className='zoom-image';img.before(trigger);trigger.append(img)}
 trigger.setAttribute('aria-label',img.alt+' 크게 보기');
 trigger.addEventListener('click',event=>{event.preventDefault();source=trigger;dialog.querySelector('.media-content').replaceChildren(img.cloneNode(true));dialog.querySelector('.media-caption').textContent=figure.querySelector('figcaption')?.textContent||img.alt;dialog.showModal();document.body.classList.add('media-open')});
});
dialog.querySelector('button').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>{document.body.classList.remove('media-open');source?.focus({preventScroll:true})});
