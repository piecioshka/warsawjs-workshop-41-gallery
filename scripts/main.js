
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

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];
        console.log('photo', i, photo);

        // Create HTMLImageElement
        const $photo = document.createElement('img');
        // $photo.src = photo;
        $photo.setAttribute('src', photo);

        // Render
        const $photos = document.querySelector('#photos');
        $photos.append($photo);
    }

    // array.forEach(element => {

    // });


}

// Function Invoke
main();
