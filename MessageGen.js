const startingMessage = ['Your sign is', 'You are', 'You should'];

const signMessages = ['moon', 'sun', 'air', 'water'];

const adjectiveMessages = ['kind and caring', 'ambitious', 'generous', 'sensitive and empathic'];

const verbMessage = ['follow your dreams', 'take some self-care time', 'be kind to yourself'];


const randomNumber = num => {
    return Math.floor(Math.random() * num);
}

const messageGen = (startingMessage, signMessages, adjectiveMessages, verbMessage) => {
    // Get random numbers
     const randomStartingMessage = randomNumber(startingMessage.length);
     const randomSignMessage = randomNumber(signMessages.length);
     const randomAdjectiveMessage = randomNumber(adjectiveMessages.length);
     const randomVerbMessage = randomNumber(verbMessage.length);
     
     //Get random message
     const startMessage = startingMessage[randomStartingMessage];
     let connectionMessage;
    //Create random connection message
     if(startMessage.includes('sign')) {
        connectionMessage = signMessages[randomSignMessage];
     } else if (startMessage.includes('are')) {
        connectionMessage = adjectiveMessages[randomAdjectiveMessage];
     } else {
        connectionMessage = verbMessage[randomVerbMessage];
     }

     let randomMessage = `${startMessage} ${connectionMessage}`;

     console.log(randomMessage);
}

messageGen(startingMessage, signMessages, adjectiveMessages, verbMessage);

