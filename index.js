const gifts = ["teddy bear", "drone", "doll"];
const names = ["ben","leo","haeley"]

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
function writeCards(name,event){
    let messages = [];
    for(let i =0; i < name.length; i++){
        console.log(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    console.log(messages);
    return messages;
}
writeCards(names);
function countDown(num){
    while(num >= 0){
        console.log(num)
        num--
    }
}
countDown(10);