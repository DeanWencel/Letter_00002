const text =
  "My dearest, Phoebe,  I came to love making letters for you, and letters has became a tunnel to express my feelings for you. This letter, I just want to say a couple of things.         You complete me, baby. 🥹 The world became lighter when you came, and the moment I was able to call you mine, you became my world. Sometimes I wonder why you fell for me, and what is it that you see in me, whatever it is baby, I hope you don't stop seeing it 🥹 Its fascinating how we met, I love the way we both got to know each other and I love more how we are nowwwww. And I know that it will only get better from here, because we are together. My baby, in you, I found what I was looking for. I won't ask for more and I don't want you to change anything, just be youuu 🙇‍♂️ I love your wits, you are smart even when you don't think you are. I love your talents, makes me so head over heels for you hehe. I love your eyes, when I look at them I get mesmerized, with contact lenses or glasses, my mind is always like Wow such pretty eyes. I love your smile, it makes me smile too, I hope you always keep smiling baby, your smile is precious to me. I love your body, its like a magnet to me, when we're together I want to keep my hands around you and feel your body close to mine 🥺I love your attitude, whether it be that you're naughty, sassy, corny, freaky, weird, playful, sweet and all I love it. I can handle your mood swings, and I accept my Phoebe with all her behaviors 🙇‍♂️ I love all your features, I love all of Phoebe hihihi         Baby, no matter what we go through, I'll be there 🥹 I believe that we'll also be there for each other, especially when we need it. We're both in big chapters of our lives, this is your last year of high school and my first year in college. You have big things ahead of you, and I'll help you carry the weight as much as I cannn. I am here, I'll be with you with every step of the wayyy. If things aren't great at home, come to me, I'll be your safe space. If school is too much, rest on me, I can be a shoulder for you to lay on. If you want to rant about something, talk to me, I'll always listen. If everything is overwhelming, you can cry to me 🥹 I'm here to understand and care for you.         Thank you for being here, for pushing through, and for loving me 🥺 I can be overwhelming sometimes, I lash out, I panic, I get anxious, I have so many flaws but you accept it 🥹 You're the best, babyyyy, please don't stop being you, and loving me soooo. Congratulations also baby for your achievementsss, getting EIC, even finishing your assignments/tasks, I'm happy with your winss, whether big or small. I am proud of you, Phoebe. You deserve the best that there is, and I'll give my best to give it to youuu.         Keep thriving, my baby!         You'll always have me, and I am the luckiest keboz I have you, I LOVE YOUUUUUU         Ending this letter with a kiss,         Dean"; 

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 450 + 500);
  } else {
    return Math.floor(Math.random() * 70 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
