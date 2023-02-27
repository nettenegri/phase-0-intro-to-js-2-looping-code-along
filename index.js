const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(friends, surprise) {
  const moreFriends = [];
  for (let f = 0; f < friends.length; f++) {
    console.log(
      `Thank you, ${friends[f]}, for the wonderful ${surprise} gift!`
    );
    moreFriends.push(
      `Thank you, ${friends[f]}, for the wonderful ${surprise} gift!`
    );
  }
  return moreFriends;
}

function countDown(countdown) {
  while (countdown > 0) {
    console.log(countdown);
    countdown -= 1;
  }
  console.log(countdown);
}

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

// for ([initialization]; [condition]; [iteration]){
//   [loop body]}

// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
// In the above code:
// "let age = 30" is the Initialization.
// "age < 40" is the condition. As long as the age is below 40, the condition evaluates as true.
// "age++" is the iteration - this increments the value of age by 1 after every pass through the loop
