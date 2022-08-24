testimonials=[
    {
        name:"kaibalya jena",
        age:19,
        abilities:"sports and studies",
        testimonial:"well how can a person write his own testimonial"
    },
    {
        name:"twella vaidya",
        age:20,
        abilities:"surgery and medicine",
        testimonial:"all i can say is she is perfect"
    },
    {
        name:"sdflhij",
        age:19,
        abilities:"a pro web developer",
        testimonial:"well how can a person write his own testimonial"
    },
    {
        name:"at",
        age:19,
        abilities:"simplicity and naiveness",
        testimonial:"well we all can figure that out"
    }
    
]

let i=0;
let j=testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn=document.getElementById("next");
let prevBtn=document.getElementById("prev");

nextBtn.addEventListener("click",()=>{
    i=(j+i+1)%j;
    display_testimonial();
})
prevBtn.addEventListener("click",()=>{
    i=(j+i-1)%j;
    display_testimonial();
})

let display_testimonial=()=>{
    testimonialContainer.innerHTML=`
    <p>${testimonials[i].testimonial}</p>
    <h4>abilities: ${testimonials[i].abilities}</h4>
    <h3>${testimonials[i].age}</h3>
    <h1>${testimonials[i].name}</h1>
    `
}

window.onload = display_testimonial;