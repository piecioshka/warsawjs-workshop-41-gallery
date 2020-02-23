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

// Function Declaration
function main() {
    // var a; // hoisting
    // let b = 2;
    // b = 3;
    // const c = 4;
    // c = 5; // Error

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
    }, 2000);
}

// Function Invoke
main();
