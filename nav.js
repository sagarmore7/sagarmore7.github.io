const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    /*const navLinks = document.querySelectorAll('.nav-links li');*/
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        });
}

navSlide();

/*document.getElementById('button').addEventListener('click',
        function(){
            document.querySelector('.modal').style.display= "flex";
        });
        document.getElementById('close').addEventListener('click',
        function(){
            document.querySelector('.modal').style.display="none";
        })*/