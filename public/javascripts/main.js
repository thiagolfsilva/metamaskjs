const greetingParagraph = document.querySelector('#greeting');
const warningParagraph = document.querySelector('#warning');
const ethereumButton = document.querySelector('.enableEthereumButton');

let hasWallet = (typeof ethereum !== 'undefined') ? true : false;

console.log("test");

ethereumButton.addEventListener('click', () => {
  
  (async () => {
    if(hasWallet){
    //Get metamask account
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    
    //add it to greeting paragraph
    greetingParagraph.innerHTML = `Hello ${accounts[0]}`
    }
    else{
      warningParagraph.innerHTML = 'Please install Metamask to use this functionality';
    }
  })();
});
