function renderPhoto(photo) {
    console.log('photo', photo);

    // Create HTMLImageElement
    const $photo = document.createElement('img');
    // $photo.src = photo;
    $photo.setAttribute('src', photo.url);

    // Render
    const $photos = document.querySelector('#photos');
    $photos.append($photo);
}

function renderPhotos(photos) {
    // for (let i = 0; i < photos.length; i++) {
    //     const photo = photos[i];
    //     renderPhoto(photo);
    // }
    photos.forEach(function (photo) { // Anonymous Function
        try {
            renderPhoto(photo);
        } catch (err) {
            console.warn(err);
            renderPhoto({ url: 'https://placehold.co/200x300' });
        }
    });
}

function displayMessage(message) {
    const $photos = document.querySelector('#photos');
    const $message = document.createElement('div');
    $message.classList.add('message'); // For "class" attr
    // $message.id = 'message';        // For "id" attr

    // const $header = document.createElement('div');
    // $header.classList.add('message-header');
    // $header.textContent = 'Message';

    // const $body = document.createElement('div');
    // $body.classList.add('message-body');
    // $body.textContent = "Gallery is empty. We don't any photos";

    // $message.append($header);
    // $message.append($body);

    $photos.append($message);

    // Interpolation
    $message.innerHTML = `
        <div class="message-header">
            Message
        </div>
        <div class="message-body">
            ${message}
        </div>
    `;
}

function displayEmptyGalleryMessage() {
    displayMessage("Gallery is empty. We doesn't any photos");
}

function displayCurrentTime() {
    setInterval(function () {
        // 1. Get a reference to DOM element
        const $clock = document.querySelector('#current-time');

        // 2. Get current time from Date object
        const date = new Date(); // object
        const currentDate = date.toLocaleTimeString('pl'); // string

        // 3. Render time into DOM element
        $clock.textContent = currentDate;
    }, 1000);
}

// Math.random() => from 0 to 1
// Math.random() * 4 => from 0 to 4
// Math.random() * 4 + 2 => from 2 to 6

function randomInteger(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}

function displayRandomPhoto(photos) {
    // 1. Get a reference to DOM element
    const $container = document.querySelector('#random-photo');

    // 2. Generate a random number
    const random = randomInteger(0, 2);

    // 3. Get a photo from photos collection
    const randomPhoto = photos[random];

    // 4. Render a photo
    const $randomPhoto = document.createElement('img');
    $randomPhoto.src = randomPhoto.url;
    $container.append($randomPhoto);
}

// Function Declaration
function main() {
    // var a; // hoisting
    // let b = 2;
    // b = 3;
    // const c = 4;
    // c = 5; // Error

    displayCurrentTime();

    loader.show();

    setTimeout(function () {
        const photos = [
            { url: "https://i.picsum.photos/id/1036/200/300.jpg" },
            { url: "https://i.picsum.photos/id/1035/200/300.jpg" },
            { url: "https://i.picsum.photos/id/1033/200/300.jpg" },
            null
        ];

        const isGalleryEmpty = (photos.length === 0);

        loader.hide();

        if (isGalleryEmpty) {
            displayEmptyGalleryMessage();
        } else {
            renderPhotos(photos);
        }

        displayRandomPhoto(photos);
    }, 2000);

    window.addEventListener('hashchange', function () {
        console.log('hash is changed', location.hash);

        const $photos = document.querySelector('#photos');
        const $randomPhoto = document.querySelector('#random-photo');

        // Routing
        switch (location.hash) {
            case '':
                // 1. Hide random photo container
                $randomPhoto.style.display = 'none';
                // 2. Show gallery container
                $photos.style.display = 'block';
                break;

            case '#random':
                // 1. Show random photo container
                $randomPhoto.style.display = 'block';
                // 2. Hide gallery container
                $photos.style.display = 'none';
                break;

            default:
                $randomPhoto.style.display = 'none';
                $photos.style.display = 'none';
                break;
        }

    });
}

// Function Invoke
main();
