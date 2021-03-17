
const sections = document.querySelectorAll('.mysec'),
      aul=document.getElementById('navbar__list'),
      fragment=document.createDocumentFragment();
      
sections.forEach((element)=>{
    const secDataNav=element.getAttribute('data-nav'),
          newLi=document.createElement('li'),
          newLink=document.createElement('a'),
          linkText=document.createTextNode(secDataNav);
        
    newLink.addEventListener('click',()=>{
        element.scrollIntoView({behavior:"smooth"});
    });
    newLink.appendChild(linkText);
    newLink.setAttribute('class','menu__link')
    newLi.appendChild(newLink);
    fragment.appendChild(newLi);
});
aul.appendChild(fragment);

window.addEventListener('scroll',()=>{
    sections.forEach((activSec)=>{
        const rect=activSec.getBoundingClientRect();
        if(rect.top >= -100 && rect.top<=200){
            sections.forEach( rem => {
                rem.classList.remove('your-active-class');                
            });
            activSec.classList.add('your-active-class');
            const links=document.querySelectorAll('.navbar__menu ul li a');
        links.forEach((link)=>{
            if(activSec.getAttribute('data-nav') == link.textContent){
                links.forEach( l => {
                    l.classList.remove('active');                
                });
                link.classList.add('active');
            }
        })
        }
        
    })
})




