let content = '안녕하세요. 웹 퍼블리셔를 꿈꾸는 김윤중입니다:)';
let text = document.querySelector('.typing');
let index = 0;

function typing() {
    text.textContent = content.slice(0, index++);
    
    if (index <= content.length) {
        requestAnimationFrame(typing);
    }
}

typing();


let navItems = document.querySelectorAll('.h-nav>li');
navItems.forEach(li =>{
    li.addEventListener('click',function(){
        this.classList.toggle('active');

        navItems.forEach(item =>{
            if(item !== this){
                item.classList.remove('active');
            }
        })
    })
})