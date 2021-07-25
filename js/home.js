$(document).ready(function(){
            $('#latest').modal('show');
        });

const counters=document.querySelectorAll(".counter");
// const speed=800;
const time=50;
counters.forEach(counter=>{
    const updateCount = () =>{
        const target=+counter.getAttribute("data-target");
        const count=+counter.innerText;
        // const speed=target/time;
        const inc=target/time;

        if (count<target)
        {
            counter.innerHTML="<h3>"+Math.ceil(count+inc)+"</h3>";
            setTimeout(updateCount, 1*time);
        }else{
            counter.innerHTML="<h3>"+target+"+</h3>";
        }
    }

    updateCount();
})
