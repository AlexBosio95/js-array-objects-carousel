const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let activeElement = 0;

const imgPresent = document.getElementById('img-list');
const imgThumbnails = document.getElementById('thumbnails-list')


for (let i = 0; i < images.length; i++) {
    console.log(images[i].url)

    imgPresent.innerHTML += `<img class="w-100 d-none" src=${images[i].url} alt="img ${images[i].title}" >
    <div class="position-absolute text-white top-0 end-0 text-end p-2 d-none carousel-description">
        <h1>${images[i].title}</h1>
        <p class=""><em>${images[i].description}</em></p>
    </div>`
    imgThumbnails.innerHTML += `<img class="opacity-50" src=${images[i].url} alt="img ${images[i].title}" >`

}


const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const pictureElement = document.querySelectorAll('#img-list img');
const thumbnailsElement = document.querySelectorAll('#thumbnails-list img')
const imgDescElement = document.querySelectorAll('#img-list .carousel-description')

pictureElement[activeElement].classList.remove('d-none')
pictureElement[activeElement].classList.add('d-block')

imgDescElement[activeElement].classList.remove('d-none')
imgDescElement[activeElement].classList.add('d-block')

thumbnailsElement[activeElement].classList.remove('opacity-50')

console.log(imgDescElement.length)

btnNext.addEventListener('click', function() {
    pictureElement[activeElement].classList.remove('d-block')
    pictureElement[activeElement].classList.add('d-none')
    thumbnailsElement[activeElement].classList.add('opacity-50')
    imgDescElement[activeElement].classList.remove('d-block')
    imgDescElement[activeElement].classList.add('d-none')

    activeElement++;

    if (activeElement === pictureElement.length) {
        activeElement = 0;
    }

    pictureElement[activeElement].classList.add('d-block')
    pictureElement[activeElement].classList.remove('d-none')
    thumbnailsElement[activeElement].classList.remove('opacity-50')
    imgDescElement[activeElement].classList.add('d-none')
    imgDescElement[activeElement].classList.remove('d-none')

})

btnPrev.addEventListener('click', function(){

    pictureElement[activeElement].classList.remove('d-block')
    pictureElement[activeElement].classList.add('d-none')
    thumbnailsElement[activeElement].classList.add('opacity-50')

    activeElement--;

    if (activeElement === - 1) {
        activeElement = pictureElement.length - 1;
    }

    pictureElement[activeElement].classList.add('d-block')
    pictureElement[activeElement].classList.remove('d-none')
    thumbnailsElement[activeElement].classList.remove('opacity-50')

})





























