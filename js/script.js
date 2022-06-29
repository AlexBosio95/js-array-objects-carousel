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

// counter
let activeElement = 0;

// carousel parent 
const imgPresent = document.getElementById('img-list');

// thumbnails parent 
const imgThumbnails = document.getElementById('thumbnails-list')


for (let i = 0; i < images.length; i++) {

    // carousel parent representation
    imgPresent.innerHTML += `<img class="w-100 d-none rounded-2" src=${images[i].url} alt="img ${images[i].title}" >
    <div class="position-absolute text-white top-0 end-0 text-end p-2 d-none carousel-description">
        <h1>${images[i].title}</h1>
        <p class=""><em>${images[i].description}</em></p>
    </div>`

    // thumbnails parent representation
    imgThumbnails.innerHTML += `<img class="opacity-50" src=${images[i].url} alt="img ${images[i].title}" >`

}

// Next Button
const btnNext = document.getElementById('btn-next');

// Previus Button
const btnPrev = document.getElementById('btn-prev');

// Play Button
const btnPlay = document.getElementById('button-play')

// Play Button initialisation
btnPlay.innerHTML = `<i class="fa-solid fa-circle-play">`

// All images in img-list
const pictureElements = document.querySelectorAll('#img-list img');

// All images in thumbnails-list
const thumbnailsElements = document.querySelectorAll('#thumbnails-list img')

// All description in img-list
const imgDescElements = document.querySelectorAll('#img-list .carousel-description')

// I modify the classes in the first element img in img-list
pictureElements[activeElement].classList.remove('d-none')
pictureElements[activeElement].classList.add('d-block')

// I modify the classes in the first element desc in img-list
imgDescElements[activeElement].classList.remove('d-none')
imgDescElements[activeElement].classList.add('d-block')

// I modify the classes in the first element img in thumbnails-list
thumbnailsElements[activeElement].classList.remove('opacity-50')

// Click event in Next Button 
btnNext.addEventListener('click', function () {

    modifyBefore(pictureElements, thumbnailsElements, imgDescElements, activeElement)

    activeElement++;

    if (activeElement === pictureElements.length) {
        activeElement = 0;
    }

    modifyAfter(pictureElements, thumbnailsElements, imgDescElements, activeElement)

})


// Click event in Previus Button 
btnPrev.addEventListener('click', function () {

    modifyBefore(pictureElements, thumbnailsElements, imgDescElements, activeElement)


    activeElement--;

    if (activeElement === - 1) {
        activeElement = pictureElements.length - 1;
    }

    modifyAfter(pictureElements, thumbnailsElements, imgDescElements, activeElement)


})

let isPlay = false;
let clock;


btnPlay.addEventListener('click', function () {

    if (!isPlay) {
        btnPlay.innerHTML = `<i class="fa-solid fa-circle-pause"></i>`

        // Timer Start
        clock = setInterval(() => {

            modifyBefore(pictureElements, thumbnailsElements, imgDescElements, activeElement)

            activeElement++;

            if (activeElement === pictureElements.length) {
                activeElement = 0;
            }

            modifyAfter(pictureElements, thumbnailsElements, imgDescElements, activeElement)

        }, 3000);

        isPlay = true

    } else {

        btnPlay.innerHTML = `<i class="fa-solid fa-circle-play">`
        isPlay = false
        clearInterval(clock);
    }


})





function modifyBefore(arrayimg, arrayThumbnailsImg, arrayDecImg, contator) {

    // I modify the classe :before
    arrayimg[contator].classList.remove('d-block')
    arrayimg[contator].classList.add('d-none')
    arrayThumbnailsImg[contator].classList.add('opacity-50')
    arrayDecImg[contator].classList.remove('d-block')
    arrayDecImg[contator].classList.add('d-none')

}

function modifyAfter(arrayimg, arrayThumbnailsImg, arrayDecImg, contator) {

    // I modify the classe :after
    arrayimg[contator].classList.add('d-block')
    arrayimg[contator].classList.remove('d-none')
    arrayThumbnailsImg[contator].classList.remove('opacity-50')
    arrayDecImg[contator].classList.add('d-none')
    arrayDecImg[contator].classList.remove('d-none')

}






























