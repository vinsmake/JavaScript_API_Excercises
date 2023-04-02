//this is the key provided by the server
const giphyApiKey = 'MUdNYQ4z6WNI0GjV5JP9dM76Z3X10gZB';

//this is the petition using the api key
const giphyPetition = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey}`);

//the next it's a chaining promise
//what to do with the petition
giphyPetition
    //the answer arrives as a json, so, here we read that json.
    .then(giphyResponse => giphyResponse.json())
    //here we tell what to do with the data readed of the json. The reading of the json gives a promise, which is readed with the next declared .then, so, we create a giphyData which means "that json data's promise" => {}
    
    .then(giphyData => {
        //here we access to the json info in the next way: json/data/iamges/original/url which give us an url
        console.log(giphyData.data.images.original.url);
        //now, we crate a const that is the url, we already have what we needed from the api.
        const giphyRandomGif = giphyData.data.images.original.url;


        //we create an img element
        const ElementGiphyRandomGif = document.createElement('img');
        //add the link to the src of the element
        ElementGiphyRandomGif.src = giphyRandomGif;
        //print the element in the body
        document.body.append(ElementGiphyRandomGif);
    })
    //it's not necesary no have multiple catch because this catch catches all of the exceptions.
    .catch(console.warn);


/* START OF THE ALTERNATIVE CODE

    //we can do the same with the next code
    giphyPetition
    .then(giphyResponse => giphyResponse.json())
    .then( ({data}) => {
        const {url} = data.images.original;

        const ElementGiphyRandomGif = document.createElement('img');
        ElementGiphyRandomGif.src = url;

        document.body.append(ElementGiphyRandomGif);
    })
    .catch(console.warn);
    //as we know that we need only the data, we can change the giphyData variable to a destructuring

END OF THE ALTERNATIVE CODE */