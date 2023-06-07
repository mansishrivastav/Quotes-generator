function fun() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(item => item.json())
        .then(item => {
            console.log(item)
            document.getElementById('dog-images').src = item.message
        });
}