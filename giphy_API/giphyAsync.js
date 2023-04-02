console.log("Script readed");

//this creates a promise petition
const giphyPetition = async () => {
    try {
            //this is the key provided by the server
    const giphyApiKey = 'MUdNYQ4z6WNI0GjV5JP9dM76Z3X10gZB';
    //when using await, the promise is now a response, not a promise.
    const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`);
    //now, we have the answer which is a json, so we need to read it as a json
    const giphyData = await giphyResponse.json();
    //here we access to the json info in the next way: json/data/iamges/original/url which give us an url
    const giphyRandomGif = giphyData.data.images.original.url;

    //we create an img element
    const ElementGiphyRandomGif = document.createElement('img');
    //add the link to the src of the element
    ElementGiphyRandomGif.src = giphyRandomGif;
    //print the element in the body
    document.body.append(ElementGiphyRandomGif);
    } catch (error) {
        //error managment
        console.log("An error has ocurred, chale.");
    }

}

giphyPetition();