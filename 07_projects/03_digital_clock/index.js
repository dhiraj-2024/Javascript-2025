// const body = document.querySelector('body')


const showtime = document.getElementById('showtime')


setInterval(function(){
        const date = new Date()
        showtime.innerHTML = date.toLocaleTimeString();
    },1000);



