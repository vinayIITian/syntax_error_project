const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(BodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true });

const bookSchema = {
    ImageSrc: String,
    idn: Number,
    Name: String,
    description: String,
    publisher: String,
    author: String,
    tag: String,
    price: Number
}

const cartSchema = {
    Name: String,
    author: String,
    price: Number,
    ImageSrc: String
}

const personSchema = {
    Name: String,
    password: String,
}

const Book = new mongoose.model('book', bookSchema);
const Cart = new mongoose.model('cart', cartSchema);
const Person = new mongoose.model('person', personSchema);

const book1 = new Book({
    ImageSrc: 'rich-dad.jpg',
    idn: 1,
    Name: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
    description: "It's been nearly 25 years since Robert Kiyosaki’s Rich Dad Poor Dad first made waves in the Personal Finance arena.It has since become the #1 Personal Finance book of all time... translated into dozens of languages and sold around the world.Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    publisher: 'plata publishing',
    author: 'Robert T. Kiyosaki',
    price: 13,
    tag: '#second hand'
});

const book2 = new Book({
    ImageSrc: 'psycho-of-money.jpg',
    idn: 2,
    Name: 'The Psychology of Money',
    description: 'Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publisher: 'Jaico Publishing House',
    author: 'Morgan Housel',
    price: 14,
    tag: '#First hand'
});

const book3 = new Book({
    ImageSrc: 'everydayhero.jpg',
    idn: 3,
    Name: 'The Everyday Hero Manifesto',
    description: 'For over twenty-five years, leadership legend and personal-mastery path-blazer Robin Sharma has mentored billionaires, business titans, professional-sports superstars and entertainment royalty via a revolutionary methodology that led them to accomplish rare-air results. Now, in this groundbreaking book, Sharma makes his transformational system available to anyone who is ready for undefeatable positivity, monumental productivity, deep spiritual freedom and a life of helping others. In The Everyday Hero Manifesto you will discover: · The hidden habits used by many of the world’s most creative and successful people to realize their visionary ambitions · Original techniques to turn fear into fuel, problems into power and past troubles into triumphs · A breakthrough blueprint to battle-proof yourself against distraction and procrastination so that you produce magic that dominates your domain · Pioneering insights on adopting world-class routines that will lead you to achieve superhuman fitness and become the most disciplined person you know · Unusual wisdom to operate with far more simplicity, beauty and peace Part memoir of a life richly lived, part instruction manual for virtuoso-grade performance, and part handbook for spiritual freedom in an age of high-velocity change, The Everyday Hero Manifesto will completely transform your life. Forever.',
    publisher: 'Jaico Publishing House',
    author: 'Robin Sharma',
    price: 7,
    tag: '#First hand'
});

const book4 = new Book({
    ImageSrc: 'powerofmastermind.jpg',
    idn: 4,
    Name: 'POWER OF THE MASTER MIND: Teaching from the Biggest Finance Gurus',
    description: 'Are you a dreamer? Is shortage of money stopping you from realising your dreams?Do you wish to master the art of creating wealth?Then, your search is over!Power of the Master Mind is a treasure trove of knowledge and insights by the most legendary finance gurus and bestselling authors of all times. Full of effective financial planning hacks and advices, it will give you a new perspective on creating wealth and paving the way for success!',
    publisher: 'Srishti Publishers & Distributors',
    author: ' Wallace D Wattles, Napoleon Hill & George S Clason',
    price: 5,
    tag: '#second hand'
});

const book5 = new Book({
    ImageSrc: 'atomic-habit.jpg',
    idn: 5,
    Name: 'Atomic Habits',
    description: 'World-renowned habits expert James Clear has discovered a simpler system for transforming your life. He knows that lasting change comes from the compound effect of hundreds of small decisions – doing two push-ups a day, waking up five minutes early, or holding a single short phone call. He calls them atomic habits.In this ground-breaking book, Clear reveals how these tiny changes will help you get 1 percent better every day. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone) and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs and distinguished scientists who have used the science of small habits to stay productive, motivated and happy. These small changes will have a revolutionary effect on your career, your relationships and your life.',
    publisher: 'Random House Business Books',
    author: 'James Clear',
    price: 9,
    tag: '#First hand'
});

const book6 = new Book({
    ImageSrc: 'The-book-of-life.jpg',
    idn: 6,
    Name: 'The Book Of Life',
    description: "'The story of mankind is in you, the vast experience, the deep-rooted fears, anxieties, sorrow, pleasure and all the beliefs that man has accommodated throughout the millennia. You are that book.' Inspired by Krishnamurti's belief that truth is found through living, The Book of Life presents 365 timeless daily meditations, developed thematically over seven days, illuminating the concepts of freedom, personal transformation, living fully awake and much more. The Book of Life is a profound collection of insights to treasure every day for those who have come to cherish the wisdom of this extraordinary spiritual sage as well as those who are discovering it for the first time.",
    publisher: 'Penguin India',
    author: ' J. Krishnamurti',
    price: 4,
    tag: '#Second hand'
});

const book7 = new Book({
    ImageSrc: 'the-intelligent-investor.jpg',
    id: 7,
    Name: 'The Intelligent Investor',
    description: "'The story of mankind is in you, the vast experience, the deep-rooted fears, anxieties, sorrow, pleasure and all the beliefs that man has accommodated throughout the millennia. You are that book.' Inspired by Krishnamurti's belief that truth is found through living, The Book of Life presents 365 timeless daily meditations, developed thematically over seven days, illuminating the concepts of freedom, personal transformation, living fully awake and much more. The Book of Life is a profound collection of insights to treasure every day for those who have come to cherish the wisdom of this extraordinary spiritual sage as well as those who are discovering it for the first time.",
    publisher: 'Harper Business',
    author: 'Benjamin Graham',
    price: 12,
    tag: '#First hand'
});

const book8 = new Book({
    ImageSrc: 'the-power-of-subconcious.jpg',
    idn: 8,
    Name: 'THE POWER OF YOUR SUBCONSCIOUS MIND',
    description: "As a man thinketh in his subconscious mind, so is he. Have you wondered why someone is joyous while another is miserable; why someone is fearful and anxious and another is exuding confidence; why so many good and kind people suffer the tortures of life? Dr Joseph Murphy answers these questions in his bestselling self-help book The Power of Your Subconscious Mind. He reveals the innate powers of the subconscious mind by fusing his spiritual wisdom and scientific research. The Power of Your Subconscious Mind is one of the most inspirational guides of all time. It has helped millions across the globe achieve extraordinary goals and bring drastic improvements in their lives. And this, he says, can be done simply by changing the way one thinks. Packed with case studies of actual success stories, this book will help you unleash your mental powers, build confidence, create well-balanced friendships, improve your marriage, amass wealth, conquer phobias, dispel bad habits, and even heal minor health ailments.",
    publisher: 'Rupa Publications India',
    author: 'Joseph Murphy',
    price: 8,
    tag: '#First hand'
});

const book9 = new Book({
    ImageSrc: 'the-subtule-art-of-not-giving-F.jpg',
    idn: 9,
    Name: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
    description: "Manson makes the argument, backed both by academic research and well-timed poop jokes, that improving our lives hinges not on our ability to turn lemons into lemonade, but on learning to stomach lemons better. Human beings are flawed and limited—“not everybody can be extraordinary, there are winners and losers in society and some of it is not fair or your fault.” Manson advises us to get to know our limitations and accept them. Once we embrace our fears, faults and uncertainties, once we stop running and avoiding and start confronting painful truths, we can begin to find the courage, perseverance, honesty, responsibility, curiosity and forgiveness we seek. There are only so many things we can give a fuck about so we need to figure out which ones really matter, Manson makes clear. While money is nice, caring about what you do with your life is better, because true wealth is about experience.",
    publisher: 'Harper Collins',
    author: 'Mark Manson',
    price: 10,
    tag: '#First hand'
});

const book10 = new Book({
    ImageSrc: 'thinkAndGrowRich.jpg',
    idn: 10,
    Name: 'Think And Grow Rich',
    description: "Ever wondered how life would be if we could condition our minds to Think and Grow Rich? Author Napoleon Hill claims to have based this book on twenty years of rigorous research on the lives of those who had amassed great wealth and made a fortune. Observing their habits, their ways of working and the principles they followed, Hill put together laws and philosophies that can be practiced in everyday life to achieve all-round success. The narrative is rich with stories and anecdotes, which not only inspire, but also show a way forward to take action. After all, riches are not just material, but also pertaining to the mind, body and spirit. Having sold more than fifteen million copies across the world, this book remains the most read self-improvement book of all times!",
    publisher: 'Srishti Publishers & Distributors',
    author: 'Napoleon Hill',
    price: 2,
    tag: '#First hand'
});

const book11 = new Book({
    ImageSrc: 'you-can.jpg',
    idn: 11,
    Name: 'YOU CAN',
    description: "",
    publisher: 'Fingerprint! Publishing',
    author: 'George Matthew Adams',
    price: 1,
    tag: '#First hand'
});

const book12 = new Book({
    ImageSrc: 'winfreindsandinfluencepeople.jpg',
    idn: 12,
    Name: 'Win Friends And Influence People',
    description: "International bestseller. Over 30 million copies sold worldwide. How to Win Friends and Influence People by bestselling author Dale Carnegie is one of the most ground-breaking self-help books of all time. This book has now sold over 30 million copies worldwide, helping and inspiring millions of readers along the way in achieving their true potential. According to Carnegie, the ability to communicate effectively is the key to success. In this book he shows how to hone your innate abilities to connect with other people and flourish, whether in personal relationships or in business. Change the way you handle relationships and life?s challenges. A timeless classic that will appeal to self-help, business and general readers alike. Dale Carnegie was a lecturer of public speaking at YMCA New York. He had also served in the US army during World War 1. He published his first book in 1936 and became a sought after self-help author and speaker. Some of his other works include How to Stop Worrying and Start Living and The Art of Public Speaking.",
    publisher: 'Srishti Publishers & Distributors',
    author: 'Dale Carnegie',
    price: 3,
    tag: '#Second hand'
});

const arr = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12];

const perison = new Person({
    Name: 'Alfez Mansuri',
    password: 'AMalfez@2003'
});

// perison.save();


    // Book.insertMany(arr, (error) => {
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Saved');
    //     }
    // });


app.get('/', (req, res) => {

    res.render('Loginindex');
});

app.get('/home', (req, res)=>{
    res.render('homepageindex');
})

app.get('/book', (req, res)=>{
    Book.find({}, (err, items)=>{
        if (err) {
            console.log(err);
        } else{
            res.render('book-list', {items: items});
        }
    });
});

app.get('/about', (req, res)=>{
    res.render('aboutpage');
});


app.post('/cart/:price/:Name/:author/:ImageSrc', (req, res)=>{
    const price = req.params.price;
    const name = req.params.Name;
    const author = req.params.author;
    const src = req.params.ImageSrc;
    const cartx = new Cart({
        price: price,
        Name: name,
        author: author,
        ImageSrc: src
    }) 

    cartx.save();

    res.redirect('/book');
})
app.get('/cart', (req, res)=>{
    Cart.find({},(err, items)=>{
        res.render('cart', {items: items})
    })
})

app.post('/delete/:id', (req, res)=>{
    const deleteItem = req.params.id;
    Cart.findByIdAndRemove(deleteItem, (err)=>{
        if(!err){
            console.log('success');
            res.redirect('/cart');
        }
    })
})

app.post('/login', (req, res)=>{
    const username = req.body.Username;
    console.log(username);
    const password = req.body.password;
    console.log(password);
    Person.find({Name: username}, (err, items)=>{
        console.log(items[0].password);
        if (password == items[0].password) {
            res.redirect('/home')
        } else {
            res.redirect('/')
        }
    })

    
})

app.listen(3000, () => {
    console.log('site running on port 3000!');
})