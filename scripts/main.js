function renderPhoto(photo) {
    console.log('photo', photo);

    // Create HTMLImageElement
    const $photo = document.createElement('img');
    // $photo.src = photo;
    $photo.setAttribute('src', photo);

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
        renderPhoto(photo);
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

// Function Declaration
function main() {
    // var a; // hoisting
    // let b = 2;
    // b = 3;
    // const c = 4;
    // c = 5; // Error

    const photos = [
        "https://i.picsum.photos/id/1036/200/300.jpg",
        "https://i.picsum.photos/id/1035/200/300.jpg",
        "https://i.picsum.photos/id/1033/200/300.jpg",
    ];

    const isGalleryEmpty = (photos.length === 0);

    if (isGalleryEmpty) {
        displayEmptyGalleryMessage();
    } else {
        renderPhotos(photos);
    }
}

// Function Invoke
main();
