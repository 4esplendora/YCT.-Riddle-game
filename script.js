let currentRiddleIndex = 0;
const riddles = [

    {
        question: "What is stronger than steel but cannot handle the sun?",
        answer: "Ice",
        hint: "Solid Water."
    },
    {
        question: "I’m full of holes but strong as steel. What am I?",
        answer: "Chain",
        hint: "Better leash for dogs."
    },
    {
        question: "A barrel of water weighed 60 pounds. Someone put something in it and now it weighs 40 pounds. What did the person add?",
        answer: "Hole",
        hint: "Something spongebob is filled with."
    },
    {
        question: "What can go through glass without breaking it?",
        answer: "Light",
        hint: "Yagami."
    },
    {
        question: "What has ten letters and starts with gas?",
        answer: "Automobile",
        hint: "Vehicle."
    },
    {
        question: "What connects two people, but touches only one?",
        answer: "Ring",
        hint: "Marriage."
    },
    {
        question: "Who can finish a book without finishing a sentence?",
        answer: "Prisoner",
        hint: "Sentence = Jail Time."
    },
    {
        question: "How many letters are in the alphabet?",
        answer: "11",
        hint: "'The alphabet'."
    },
    {
        question: "If you throw me out the window, you’ll leave a grieving wife, but drop me in the middle of a door, and you might just save a life. What am I?",
        answer: "N",
        hint: "An alphabet."
    },
    {
        question: "I can be cracked, made, told and played.",
        answer: "Joke",
        hint: "It's a word not an edible."
    },
    {
        question: "I wiggle and cannot see; sometimes underground and sometimes on a tree. I really don't want to be on a hook and i become a person when combined with book",
        answer: "Worm",
        hint: "I'm usually the insect inside apples."
    },
    {
        question: "It can be clear like water but burns like fire.",
        answer: "Alcohol",
        hint: "Thoroughly enjoyed on friday nights."
    },
    {
        question: "I am everywhere but i cannot be seen, captured or held only heard",
        answer: "Voice",
        hint: "Rhymes with noise."
    },
    {
        question: "I do not have eyes but I once could see. I used to have thoughts but now I'm empty. What am I??",
        answer: "Skull",
        hint: "Helps protect brain."
    },
    {
        question: "You see me a lot, especially at night. I protect something special. Many shut me in fright. What am I?",
        answer: "Eyelids",
        hint: "Part of your eyes."
    },
    {
        question: "Commits friendly home invasions one night a year.",
        answer: "Santa Clause",
        hint: "Christmas."
    },
    {
        question: "My first half means container. Not a lot of people understand my language. What am I?",
        answer: "Binary",
        hint: "Mathematics."
    },
    {
        question: "I am whole but incomplete. I have no eyes, yet I see. You can see, and see right through me. My largest part is one fourth of what I once.",
        answer: "Skeleton",
        hint: "Skinny guy inside you."
    },
    {
        question: "What turns everything around but doesn't move?",
        answer: "Mirror",
        hint: "What you use to make sure you look good before leaving."
    },
    {
        question: "What breaks on the water but never on the land?",
        answer: "Wave",
        hint: "Something Surfers love."
    },
    {
        question: "When you don’t know what I am, I am many things. When you know, I am nothing. What am I?",
        answer: "Riddle",
        hint: "This game."
    },
    {
        question: "What is made of water but disappears when placed in water?",
        answer: "Ice",
        hint: "Water at the northpole."
    },
    {
        question: "I can be thrown from the tallest building and survive, but I won’t survive if I’m thrown from a small boat. What am I?",
        answer: "Paper",
        hint: "Something you write on."
    },
    {
        question: "What is something everyone receives but no one can see?",
        answer: "Time",
        hint: "What your clock gives."
    },
    {
        question: "What’s lighter than what it’s made of?",
        answer: "Ice",
        hint: "Good for your health if you drink it, bad for your teeth if you bite it."
    },
    {
        question: "If 2 is company and 3 is a crowd, what are 4 and 5?",
        answer: "9",
        hint: "Addition."
    },
    {
        question: "Tomorrow Is Neither Wednesday Nor Thursday. Yesterday Was Not Friday Or Saturday. Today Is Not Thursday Nor Monday Nor Sunday. What Day Is Today?",
        answer: "Friday",
        hint: "A day that people who go to school loves."
    },
    {
        question: "Rachel goes to the supermarket and buys 10 tomatoes. Unfortunately, on the way back home, all but 9 get ruined. How many tomatoes are left in a good condition??",
        answer: "9",
        hint: "Read the sentence carefully."
    },
    {
        question: "Every night I’m told what to do, and each morning I do what i’m told but I still don’t escape your scold. What am i?",
        answer: "Alarm clock",
        hint: "You probably need it to wake up early."
    },
    {
        question: "What has many rings but no fingers?",
        answer: "Phone",
        hint: "What rings when its clalled?"
    },
    {
        question: "I sometimes run, but I can’t walk. What am I?",
        answer: "Nose",
        hint: "One of the five sense organs."
    },
    {
        question: "I have a head like a cat and feet like a cat, but I am not a cat. What am I?",
        answer: "Kitten",
        hint: "Still a type of cat don't think too far."
    },
    {
        question: "Paul's height is six feet, he's an assistant at a butcher's shop, and wears size 9 shoes. What does he weigh?",
        answer: "Meat",
        hint: "Focus on his job."
    },
    {
        question: "What can be touched but can't be seen?",
        answer: "The Heart",
        hint: "Part of your body, it's also metaphorical."
    },
    {
        question: "I have no life, but I can die. What am I?",
        answer: "Battery",
        hint: "You need this for your car."
    },
    {
        question: "What do you buy to eat but never consume?",
        answer: "Cutlery",
        hint: "You need it to eat though."
    },
    {
        question: "I cannot be felt, seen or touched Yet I can be found in everybodyMy existence is always in debate Yet there is a style of music named after me.",
        answer: "Soul",
        hint: "Complete the sentense: Mind, body and..."
    },
    {
        question: "A long snake that smokes. What am I?",
        answer: "Train",
        hint: "Mode of transportation."
    },
    {
        question: "I direct you from outer space, What am I?",
        answer: "GPS",
        hint: "Satellite."
    },
    {
        question: "There's one in every deck of cards and in a famous movie.",
        answer: "Joker",
        hint: "The bad one."
    },
    {
        question: "Turn me on my side and I am everything. Cut me in half and I am nothing. What am I?",
        answer: "8",
        hint: "A number."
    },
    {
        question: "I know a word of letters three, add two and fewer there will be?",
        answer: "Few",
        hint: "The answer is literally in the riddle."
    },
    {
        question: "What kind of cup doesn't hold water?",
        answer: "Cupcake",
        hint: "Cake."
    },
    {
        question: "Round like a dishpan and smaller than a bathtub. But the ocean can't fill it, What is it?",
        answer: "Sieve",
        hint: "You could find this in your kitchen."
    },
    {
        question: "What's an insect's favourite sport?",
        answer: "Cricket",
        hint: "A sport named after an insect."
    },
    {
        question: "What did Adam and Eve lack that everyone else has?",
        answer: "Parents",
        hint: "The people you love and hate at the same time."
    },
    {
        question: "What is half of two plus two?",
        answer: "3",
        hint: "Simple math equation."
    },
    {
        question: "What is flat, usually square, and made from trees but isn't wood?",
        answer: "Paper",
        hint: "Something you write on."
    },
    {
        question: "Flat as a leaf, round as a ring. Has two eyes, can't see a thing",
        answer: "Button",
        hint: "Need this for your top."
    },
    {
        question: "What is it that has a power socket on one end and a corkscrew on the other?",
        answer: "Pig",
        hint: "Animal."
    },
    {
        question: "It's shorter than the rest, but when you're happy, you raise it up like it's the best. What is it?",
        answer: "Thumb",
        hint: "A Finger."
    },
    {
        question: "If you lose me you may cause people around me to lose me too. What am I?",
        answer: "Temper",
        hint: "An emotion"
    },
    {
        question: "The older they are the less wrinkles they have.",
        answer: "Tire",
        hint: "What moves your car."
    },
    {
        question: "It is yellow and you can serve it but not eat. What is it?",
        answer: "Tennis ball",
        hint: "Sports ball."
    },
    {
        question: "I save lives on the ground and in the air. What am I?",
        answer: "Seat belt",
        hint: "Something in your car and aeroplane."
    },
    {
        question: "What number has all letters in alphabetical order when spelled out?",
        answer: "Forty",
        hint: "Rhymes with morty."
    },
    {
        question: "I am everywhere. I am inside you. I surround you. I can be seen by you. I can kill you. Yet you play in me. What am I?",
        answer: "Water",
        hint: "Ice in room temperature."
    },
    {
        question: "I am quick when I'm thin. I am slow when I'm fat. Wind is my worst nightmare. What am I?",
        answer: "Candle",
        hint: "Used for fire or scent."
    },
    {
        question: "I have six faces but not even one body connected, 21 eyes in total but cannot see. What am I?",
        answer: "Dice",
        hint: "Mostly found in board games."
    },
    {
        question: "What is something that can go up quite easily, but is not as easy to bring back down?",
        answer: "Weight",
        hint: "Something eating alot brings."
    },
    {
        question: "What needs to be taken from you before you have it?",
        answer: "Picture",
        hint: "Camera, Photographer, GO!."
    },
    {
        question: "This is a plant named after a light source. What is it?",
        answer: "Sunflower",
        hint: "Sun."
    },
    {
        question: "What is something Something you carry while singing?",
        answer: "Tune",
        hint: "Rhymes with blues."
    },
    {
        question: "What is a bunny's favorite music?",
        answer: "Hiphop",
        hint: "A bunny loves to hop."
    },
    {
        question: "What food has no beginning, end, or middle?",
        answer: "Donut",
        hint: "It is round and has a hole in the middle."
    },
    {
        question: "If the day before yesterday is the 23rd, then what is the day after tomorrow?",
        answer: "27th",
        hint: "Do the math."
    },
    {
        question: "Which ring is square?",
        answer: "Boxing ring",
        hint: "A place where boxers fight."
    },
    {
        question: "What goes up but never comes down?",
        answer: "Age",
        hint: "This thing about you changes everysingle year."
    },
    {
        question: "I have branches, but no fruit, trunk or leaves. What am I?",
        answer: "Bank",
        hint: "Not an actual tree but you store your money in me."
    },
    {
        question: "The more of this there is, the less you see. What is it?",
        answer: "Darkness",
        hint: "Absense of Light."
    },
    {
        question: "I follow you all the time and copy your every move, but you can’t touch me or catch me. What am I?",
        answer: "Shadow",
        hint: "The black reflection of you."
    },
    {
        question: "What kind of band never plays music?",
        answer: "Rubber band",
        hint: "It's elastic and used for hair."
    },
    {
        question: "What word of five letters has one left when the first two are removed?",
        answer: "Stone",
        hint: "Classified as a rock."
    },
    {
        question: "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?",
        answer: "River",
        hint: "Water Body."
    },
    {
        question: "What word is pronounced the same if you take away four of its five letters?",
        answer: "Queue",
        hint: "Q."
    },
    {
        question: "What begins with an 'e' and only contains one letter?",
        answer: "Envelope",
        hint: "I dont mean a letter in the alphabet, I mean a letter to send someone."
    },
    {
        question: "What has a bottom at the top?",
        answer: "Legs",
        hint: "One of your body parts."
    },
    {
        question: "What is it that given one, you'll have either two or none?",
        answer: "Choice",
        hint: "Something you'd have to pick from."
    },
    {
        question: "People make me, save me, change me, raise me. What am I?",
        answer: "Money",
        hint: " Not a baby."
    },
    {
        question: "What kind of lion never roars?",
        answer: "Dandelion",
        hint: "A flower."
    },
    {
        question: "Nobody empties me but i never stay full for long, What am i?",
        answer: "Moon",
        hint: "Heavenly body."
    },
    {
        question: "What kind of cheese is made backwards?",
        answer: "Edam",
        hint: "The name of the cheese is 'made' backwards."
    },
    {
        question: "What has an eye but cannot see?",
        answer: "Needle",
        hint: "Used for sewing."
    },
    {
        question: "What has no voice but can still tell you many things?",
        answer: "Book",
        hint: "Something you read."
    },
    {
        question: "I am lighter than a feather, yet the strongest person cannot hold me for five minutes. What am I?",
        answer: "Breath",
        hint: "Oxygen."
    },
    {
        question: "What has a bark, but no bite?",
        answer: "Tree",
        hint: "Not an animal."
    },
    {
        question: "What has a neck without a head, and wears a cap?",
        answer: "Bottle",
        hint: "Something you snap open and drink out off."
    },
    {
        question: "I’m always running but never move. What am I?",
        answer: "Clock",
        hint: "What you tell time from."
    },
    {
        question: "What’s something you can hold without ever touching?",
        answer: "Conversation",
        hint: "Something you do on a call."
    },
    {
        question: "What’s in the middle of nowhere?",
        answer: "H",
        hint: "The word 'nowhere'."
    },
    {
        question: "I’m found in the ocean but I’m not alive. What am I?",
        answer: "Salt",
        hint: "A condiment."
    },
    {
        question: "What has no beginning, end, or middle?",
        answer: "Circle",
        hint: "A shape."
    },
    {
        question: "What has no hands but can knock on your door?",
        answer: "Opportunity",
        hint: "Could be once in a lifetime."
    },
    {
        question: "What has only two words, but thousands of letters?",
        answer: "Post office",
        hint: "A building not an actual word."
    },
    {
        question: "I turn once, what is out will not get in. I turn again, what is in will not get out. What am I?",
        answer: "Key",
        hint: "Something that helps your door become a wall."
    },
    {
        question: "They made me a mouth but didn’t give me breath.Water gives me life but the sun brings me death. What am I?",
        answer: "Snowman",
        hint: "Something built in winter."
    },
    {
        question: "What has a heart that doesn’t beat?",
        answer: "Artichoke",
        hint: "A vegetable."
    },
    {
        question: "What is the fastest tool to double your money?",
        answer: "Mirror",
        hint: "Something that inverts everything."
    },
    {
        question: "Something that doesn't break but multiplies",
        answer: "Mirror",
        hint: "Something that make 1 turn to 2."
    },
    {
        question: "I am always running, but never get tired or hot. What am I?",
        answer: "Refrigerator",
        hint: "Item to keep your things cold."
    },
];

function displayRiddle() {
    document.getElementById('riddle-number').innerText = `#${currentRiddleIndex + 1}`;
    document.getElementById('riddle-text').innerText = riddles[currentRiddleIndex].question;
    document.getElementById('user-answer').value = '';
    document.getElementById('error-message').style.display = 'none';
    updateNavigationButtons();
}

function showHint() {
    document.getElementById('hint-text').innerText = riddles[currentRiddleIndex].hint;
    document.querySelector('.hintModal').style.display = 'block';
}

function showAnswer() {
    document.getElementById('answer-text').innerText = riddles[currentRiddleIndex].answer;
    document.querySelector('.answerModal').style.display = 'block';
}

function closeModal() {
    document.querySelector('.hintModal').style.display = 'none';
    document.querySelector('.answerModal').style.display = 'none';
    document.querySelector('.achievementModal').style.display = 'none';
}

function showAchievements() {
    let achievementText = `You have answered ${currentRiddleIndex} out of ${riddles.length} riddles.`;
    document.getElementById('achievement-text').innerText = achievementText;
    document.querySelector('.achievementModal').style.display = 'block';
}

function saveProgress() {
    localStorage.setItem('currentRiddleIndex', currentRiddleIndex);
}

function loadProgress() {
    const savedIndex = localStorage.getItem('currentRiddleIndex');
    if (savedIndex !== null) {
        currentRiddleIndex = parseInt(savedIndex, 10);
    }
}

function updateNavigationButtons() {
    const backButton = document.querySelector('.back-arrow');
    const forwardButton = document.querySelector('.forward-arrow');
    backButton.style.display = currentRiddleIndex === 0 ? 'none' : 'block';
    forwardButton.style.display = currentRiddleIndex < getMaxRiddleIndex() ? 'block' : 'none';
}

function navigateRiddle(direction) {
    const maxIndex = getMaxRiddleIndex();
    currentRiddleIndex += direction;
    if (currentRiddleIndex < 0) currentRiddleIndex = 0;
    if (currentRiddleIndex > maxIndex) currentRiddleIndex = maxIndex;
    displayRiddle();
}

function getMaxRiddleIndex() {
    const savedIndex = localStorage.getItem('currentRiddleIndex');
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
}

// Event listeners for buttons
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.querySelector('.hint').addEventListener('click', showHint);
document.querySelector('.answer').addEventListener('click', showAnswer);
document.getElementById('show-achievements').addEventListener('click', showAchievements);

// Load progress when the page loads
window.addEventListener('load', () => {
    loadProgress();
    displayRiddle();
});

function displayRiddle() {
    document.getElementById('riddle-number').innerText = `#${currentRiddleIndex + 1}`;
    document.getElementById('riddle-text').innerText = riddles[currentRiddleIndex].question;
    document.getElementById('user-answer').value = '';
    document.getElementById('error-message').style.display = 'none';
    updateNavigationButtons();
}

function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value;
    const correctAnswer = riddles[currentRiddleIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        if (currentRiddleIndex >= riddles.length - 1) {
            window.location.href = "./YOUCANTHINK.html"
        } else {
            currentRiddleIndex++;
            saveProgress();
            displayRiddle();
        }

    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function navigateRiddle(direction) {
    const maxIndex = getMaxRiddleIndex();
    currentRiddleIndex += direction;
    if (currentRiddleIndex < 0) currentRiddleIndex = 0;
    if (currentRiddleIndex > maxIndex) currentRiddleIndex = maxIndex;
    displayRiddle();
}

function getMaxRiddleIndex() {
    const savedIndex = localStorage.getItem('currentRiddleIndex');
    return savedIndex !== null ? parseInt(savedIndex, 10) : 0;
}

function saveProgress() {
    localStorage.setItem('currentRiddleIndex', currentRiddleIndex);
}