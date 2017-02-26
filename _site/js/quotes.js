

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
    	var quote = quotes[Math.floor(Math.random() * quotes.length)];
    	
    	var quoteText = document.getElementById("quoteText");
	  	var quoteAuthor = document.getElementById("quoteAuthor");

	  	quoteText.innerHTML = quote.quote;
	  	quoteAuthor.innerHTML = quote.author;

	  	quoteAuthor.style.display = "block";
	  	quoteText.style.display = "block";
    }
}



var quotes = [
    {
      "author": "Abraham Lincoln",
      "quote": "Things may come to those who wait, but only the things left by those who hustle.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/1/1b/Abraham_Lincoln_November_1863.jpg"
    },
    {
      "author": "Adam Smith",
      "quote": "The great secret of education is to direct vanity to proper objects.",
      "image": "https://thenypost.files.wordpress.com/2014/10/adam-smith.jpg"
    },
    {
      "author": "Alain de Botton",
      "quote": "It’s not that travel just broadens your mind, rather it enables you to see how narrow your oppressor’s minds are.",
      "image": "http://www.papodehomem.com.br/media/W1siZiIsIjIwMTQvMTIvMTAvMTkvMDYvNTcvNDk3L2FsYWluZGVib3R0b24uanBnIl1d/alaindebotton.jpg?sha=0677bdf19c3d6787"
    },
    {
      "author": "Alan Watts",
      "quote": "A person who never made a mistake never tried anything new.",
      "image": "http://www.alanwatts.org/img/AW_library_close.jpg"
    },
    {
      "author": "Alan Watts",
      "quote": "Better to have a short life that is full of what you like doing than a long life spent in a miserable way.",
      "image": "http://www.alanwatts.org/img/AW_library_close.jpg"
    },
    {
      "author": "Alan Watts",
      "quote": "Life is a musical thing and you are supposed to dance and sign while it's being played.",
      "image": "http://www.alanwatts.org/img/AW_library_close.jpg",
      "video": "https://www.youtube.com/watch?v=6I2pcIbyq-0"
    },
    {
      "author": "Alan Watts",
      "quote": "Omnipotence is not knowing how everything is done; it's just doing it.",
      "image": "http://www.alanwatts.org/img/AW_library_close.jpg"
    },
    {
      "author": "Albert Camus",
      "quote": "It is not humiliating to be unhappy. Physical suffering is sometimes humiliating, but the suffering of being cannot be, it is life.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_pos%C3%A9_au_bureau,_faisant_face_%C3%A0_gauche,_cigarette_de_tabagisme.jpg"
    },
    {
      "author": "Albert Einstein",
      "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
    },
    {
      "author": "Albert Einstein",
      "quote": "The secret to creativity is knowing how to hide your sources.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
    },
    {
      "author": "Albert Einstein",
      "quote": "The true sign of intelligence is not knowledge but imagination.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
    },
    {
      "author": "Albert Einstein",
      "quote": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
    },
    {
      "author": "Albert Einstein",
      "quote": "When facts don't fit the theory, change the facts.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/5/50/Albert_Einstein_%28Nobel%29.png"
    },
    {
      "author": "Amar Bose",
      "quote": "Creativity never comes under emotional stress or tension. The real creativity comes when the mind finally relaxes and is quiet and then can focus.",
      "image": "http://newsoffice.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2013/20130614102340-0_0.jpg?itok=wjCLljIg"
    },
    {
      "author": "Amar Bose",
      "quote": "If you think something is impossible, don't disturb the person doing it.",
      "image": "http://newsoffice.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2013/20130614102340-0_0.jpg?itok=wjCLljIg"
    },
    {
      "author": "Amar Bose",
      "quote": "What is bad is not that men live and die, but what dies within a man while he lives. Perhaps the most important thing that is within a man while he lives is his imagination. The thing that keeps you going and keeps you creative is never to loose your imagination. Always dream of things that are better, and think about ways to reach them",
      "image": "http://newsoffice.mit.edu/sites/mit.edu.newsoffice/files/styles/news_article_image_top_slideshow/public/images/2013/20130614102340-0_0.jpg?itok=wjCLljIg"
    },
    {
      "author": "Antoine de Saint-Exupery",
      "quote": "If you want to build a ship, don't drum up people to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea.",
      "image": "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
    },
    {
      "author": "Antoine de Saint-Exupery",
      "quote": "To love is not to look at one another: it is to look, together, in the same direction.",
      "quote_original": "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
      "image": "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
    },
    {
      "author": "Antoine de Saint-Exupery",
      "quote": "When you give yourself, you receive more than you give.",
      "quote_original": "Aimer, ce n'est pas se regarder l'un l'autre, c'est regarder ensemble dans la même direction.",
      "image": "http://www.canalacademie.com/IMG/jpg/saint_exupery.jpg"
    },
    {
      "author": "Bertrand Russell",
      "quote": "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
      "image": "http://www.brainpickings.org/wp-content/uploads/2012/04/bertrandrussell.png"
    },
    {
      "author": "Bran Ferren",
      "quote": "Visionaries not only believe that the impossible can be done, but that it must be done.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/Etech05_Bran1.jpg"
    },
    {
      "author": "Brene Brown",
      "quote": "People who have a strong sense of love and belonging believe they're worthy of it.",
      "image": "http://media.salon.com/2012/09/bene_brown.jpg",
      "video": "http://youtu.be/iCvmsMzlF7o?t=7m19s"
    },
    {
      "author": "Brigid Schulte",
      "quote": "Every human being has some flavor of ‘not enough.’ You can either be stopped by it, or simply notice it, like the weather.",
      "image": "http://media.npr.org/assets/img/2014/03/10/schulte_-c-peter-c.-heimberg-1db7ba4211403e09f4e3e8fc0209252927973f0d-s6-c30.jpeg",
      "url": "http://time.com/48975/overwhelmed-time-management-ill-finish-the-dishes-when-im-dead/"
    },
    {
      "author": "Cennydd Bowles",
      "quote": "Anyone can complain about the world, but only a good few can fix it.",
      "image": "http://d.alistapart.com/_made/pix/authors/uploads/photo_116112_120_120_c1.jpg",
      "url": "http://alistapart.com/column/letter-to-a-junior-designer"
    },
    {
      "author": "Christian Vuerings",
      "quote": "So many people rush through life, let's take our time living it.",
      "image": "https://2.gravatar.com/avatar/7ef7ea08be8b62f753c64405f23aa520?d=https%3A%2F%2Fidenticons.github.com%2F34e40d0730ec7223681d8359f19f4b85.png&s=400"
    },
    {
      "author": "Dr. Seuss",
      "quote": "The more that you read, the more things you will know. The more that you learn, the more places you’ll go.",
      "image": "http://vignette1.wikia.nocookie.net/epicrapbattlesofhistory/images/4/48/Seuss.jpg/revision/latest"
    },
    {
      "author": "Elon Musk",
      "quote": "Dichotomy between sense of wonder and what is wrong.",
      "image": "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
    },
    {
      "author": "Elon Musk",
      "quote": "If something is important enough, you should try. Even if the probable outcome is failure.",
      "image": "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
    },
    {
      "author": "Elon Musk",
      "quote": "There's skepticism about anything new. That's normal.",
      "image": "http://static4.businessinsider.com/image/51def664ecad04384c00000a/elon-musk-the-hyperloop-design-is-coming-august-12.jpg"
    },
    {
      "author": "Epictetus",
      "quote": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
      "image": "http://www.justcharlie.com/wp-content/uploads/2014/10/epictetus-300x300.jpg"
    },
    {
      "author": "Jean-Jacques Rousseau",
      "quote": "There are 2 ways to make a man richer, give him more money or curb his desires.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jean-Jacques_Rousseau_%28painted_portrait%29.jpg/430px-Jean-Jacques_Rousseau_%28painted_portrait%29.jpg"
    },
    {
      "author": "Lao Tse",
      "quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
      "image": "http://walkingdimension.com/wp-content/uploads/LAO-TS1.jpg"
    },
    {
      "author": "Lao Tse",
      "quote": "A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves.",
      "image": "http://walkingdimension.com/wp-content/uploads/LAO-TS1.jpg"
    },
    {
      "author": "Lao Tse",
      "quote": "Silence is a source of great strength.",
      "image": "http://walkingdimension.com/wp-content/uploads/LAO-TS1.jpg"
    },
    {
      "author": "Lao Tse",
      "quote": "To attain knowledge, add things every day. To attain wisdom, remove things every day.",
      "image": "http://walkingdimension.com/wp-content/uploads/LAO-TS1.jpg"
    },
    {
      "author": "Leo Babauta",
      "quote": "Your attention is your most valuable possession. Give it as a gift to the people you love most, not a bunch of clowns on the Internet. Give it to the work that matters most, not distractions.",
      "image": "https://pbs.twimg.com/profile_images/514865734816509952/k7puRwOr.jpeg",
      "url": "http://zenhabits.net/simple/"
    },
    {
      "author": "Linus Pauling",
      "quote": "The best way to have a good idea is to have lots of ideas.",
      "image": "http://f.cl.ly/items/0G1o1C012b263A0m0T31/Image%202013.09.20%2012%3A41%3A24.jpeg"
    },
    {
      "author": "Muhammad Ali",
      "quote": "At home I am a nice guy: but I don't want the world to know. Humble people, I've found, don't get very far.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/A/Muhammad-Ali-9181165-2-402.jpg"
    },
    {
      "author": "Muhammad Ali",
      "quote": "He who is not courageous enough to take risks will accomplish nothing in life.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/A/Muhammad-Ali-9181165-2-402.jpg"
    },
    {
      "author": "Muhammad Ali",
      "quote": "I am the greatest, I said that even before I knew I was.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/A/Muhammad-Ali-9181165-2-402.jpg"
    },
    {
      "author": "Muhammad Ali",
      "quote": "It isn't the mountains ahead to climb that wear you out; it's the pebble in your shoe.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/A/Muhammad-Ali-9181165-2-402.jpg"
    },
    {
      "author": "Muhammad Ali",
      "quote": "The man who has no imagination has no wings.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/A/Muhammad-Ali-9181165-2-402.jpg"
    },
    {
      "author": "Frederick Douglass",
      "quote": "If there is no struggle, there is no progress.",
      "image": "http://www-tc.pbs.org/wgbh/aia/part4/images/4fred16m.jpg"
    },
    {
      "author": "Howard H. Stevenson",
      "quote": "Success is a state of being. Because as soon as you say you're successful, you probably start to fail.",
      "image": "http://www.babson.edu/worldstage/PublishingImages/stevenson-howard.jpg",
      "video": "https://www.youtube.com/watch?v=wLn28DrSF68&feature=youtu.be&t=2m28s"
    },
    {
      "author": "George Bernard Shaw",
      "quote": "The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore, all progress depends on the unreasonable man.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/S/George-Bernard-Shaw-9480925-1-402.jpg"
    },
    {
      "author": "Graeme MacWilliam",
      "quote": "Life would be much easier to understand if mother nature gave us the source code.",
      "image": "http://m.c.lnkd.licdn.com/media/p/3/000/1c4/25a/14d5166.jpg"
    },
    {
      "author": "Henry Ford",
      "quote": "Coming together is a beginning; keeping together is progress; staying together is success.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/F/Henry-Ford-9298747-1-402.jpg"
    },
    {
      "author": "John Dewey",
      "quote": "An ounce of experience is better than a ton of theory simply.",
      "image": "http://dewey.pragmatism.org/dewey.gif"
    },
    {
      "author": "Joseph Brodsky",
      "quote": "Of all the parts of your body, be most vigilant over your index finger, for it is blame-thirsty. A pointed finger is a victim’s logo... No matter how abominable your condition may be, try not to blame anything or anybody: history, the state, superiors, race, parents, the phase of the moon, childhood, toilet training, etc. The moment that you place blame somewhere, you undermine your resolve to change anything.",
      "image": "http://static.guim.co.uk/sys-images/Observer/Pix/pictures/2012/3/1/1330602483433/Joseph-Brodsky-portrait-007.jpg"
    },
    {
      "author": "Kyle Maynard",
      "quote": "The most frustrated I got the whole day would be when I looked up and saw how far I had to go, instead of looking back and seeing how far I have come. I think I do that a lot in life in general. Just one step at a time.",
      "image": "http://inspirationwithval.com/wp-content/uploads/2014/08/130327-F-DW547-001.jpg",
      "video": "https://www.youtube.com/watch?v=LuH4sK25AwE"
    },
    {
      "author": "Laozi",
      "quote": "A journey of a thousand miles begins with a single step.",
      "image": "http://www.chinesetimeschool.com/Portals/2/CMS/Images/20120204/laozi.jpg"
    },
    {
      "author": "Mahatma Gandhi",
      "quote": "A man is but the product of his thoughts what he thinks, he becomes.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Mahatma-Gandhi-9305898-1-402.jpg"
    },
    {
      "author": "Mahatma Gandhi",
      "quote": "An ounce of practice is worth more than tons of preaching.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Mahatma-Gandhi-9305898-1-402.jpg"
    },
    {
      "author": "Mahatma Gandhi",
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Mahatma-Gandhi-9305898-1-402.jpg"
    },
    {
      "author": "Mahatma Gandhi",
      "quote": "You must be the change you wish to see in the world.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Mahatma-Gandhi-9305898-1-402.jpg"
    },
    {
      "author": "Mahatma Gandhi",
      "quote": "You must be the change you wish to see in the world.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Mahatma-Gandhi-9305898-1-402.jpg"
    },
    {
      "author": "Mark Twain",
      "quote": "I have never let my schooling interfere with my education.",
      "image": "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NDg0MDU1MTUzNTA5OTAz.jpg"
    },
    {
      "author": "Marcus Aurelius",
      "quote": "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
      "image": "http://www.livius.org/a/1/emperors/marcus_aurelius.jpg"
    },
    {
      "author": "Margaret Mead",
      "quote": "Never believe that a few caring people can't change the world. For, indeed, that's all who ever have.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/9/99/Margaret_Mead_(1901-1978).jpg"
    },
    {
      "author": "Mark Twain",
      "quote": "Keep away from those who try to belittle your ambitions. Small people always do that, but the really great make you believe that you too can become great.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg"
    },
    {
      "author": "Mark Twain",
      "quote": "Life is short, break the rules.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "A gentleman is one who never hurts anyone's feelings unintentionally.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "A man who does not think for himself does not think at all.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "Always forgive your enemies - nothing annoys them so much.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "America is the only country that went from barbarism to decadence without civilization in between.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "Between men and women there is no friendship possible. There is passion, enmity, worship, love, but no friendship.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "Experience is simply the name we give our mistakes.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "If you want to tell people the truth, make them laugh, otherwise they’ll kill you.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "There are only two tragedies in life: one is not getting what one wants, and the other is getting it.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Oscar Wilde",
      "quote": "Work is the curse of the drinking classes.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/W/Oscar-Wilde-9531078-1-402.jpg"
    },
    {
      "author": "Paul Buchheit",
      "quote": "If you’re far enough ahead that people can’t figure out if you’re joking, you know you’ve innovated.",
      "image": "http://static0.therichestimages.com/wp-content/uploads/Paul_Buchheit-Gmail-2007-03-24-17-49-04.jpg",
      "url": "http://time.com/432634/gmail-10th-anniversary/"
    },
    {
      "author": "Paul Buchheit",
      "quote": "The first thing I do on day one is build something useful, then just keep improving it.",
      "image": "http://static0.therichestimages.com/wp-content/uploads/Paul_Buchheit-Gmail-2007-03-24-17-49-04.jpg",
      "url": "http://time.com/432634/gmail-10th-anniversary/"
    },
    {
      "author": "Paul F. Davis",
      "quote": "Go where you’re celebrated, not where you’re tolerated.",
      "image": "http://d.gr-assets.com/authors/1230840708p5/1363608.jpg"
    },
    {
      "author": "Richard Brandson",
      "quote": "Maintain your spirit of curiosity, keep questioning things, and you’ll find new ways to innovate.",
      "image": "http://blogs-images.forbes.com/alisoncoleman/files/2014/07/richard-branson111.jpg"
    },
    {
      "author": "Samuel Goldwyn",
      "quote": "If I look confused it is because I am thinking.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Samuel-Goldwyn-9314883-1-402.jpg"
    },
    {
      "author": "Samuel Goldwyn",
      "quote": "The harder I work, the luckier I get.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Samuel-Goldwyn-9314883-1-402.jpg"
    },
    {
      "author": "Samuel Goldwyn",
      "quote": "When someone does a good job, applaud; it makes two people happy.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/G/Samuel-Goldwyn-9314883-1-402.jpg"
    },
    {
      "author": "Seth Godin",
      "quote": "Defenseless is the best choice for those seeking to grow.",
      "image": "http://www.therisetothetop.com/wp-content/uploads/2011/11/SethGodin.jpg"
    },
    {
      "author": "Seth Godin",
      "quote": "Ship often. Ship lousy stuff, but ship. Ship constantly.",
      "image": "http://www.therisetothetop.com/wp-content/uploads/2011/11/SethGodin.jpg"
    },
    {
      "author": "Steve Jobs",
      "quote": "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.",
      "image": "http://cdn3.sbnation.com/entry_photo_images/9862607/stevejobs_large_verge_medium_landscape.jpg"
    },
    {
      "author": "Steve Jobs",
      "quote": "If you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.",
      "image": "http://cdn3.sbnation.com/entry_photo_images/9862607/stevejobs_large_verge_medium_landscape.jpg"
    },
    {
      "author": "Ralph Waldo Emerson",
      "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/E/Ralph-Waldo-Emerson-9287153-1-402.jpg"
    },
    {
      "author": "Ralph Waldo Emerson",
      "quote": "For every minute you remain angry, you give up sixty seconds of peace of mind.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/E/Ralph-Waldo-Emerson-9287153-1-402.jpg"
    },
    {
      "author": "Ralph Waldo Emerson",
      "quote": "Nothing great was ever achieved without enthusiasm.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/E/Ralph-Waldo-Emerson-9287153-1-402.jpg"
    },
    {
      "author": "Reid Hoffman",
      "quote": "If you’re not a embarrassed by the first version of your product, you launched to late.",
      "image": "http://cdni.wired.co.uk/620x413/a_c/1_620x413_28.jpg"
    },
    {
      "author": "Richard Brandson",
      "quote": "You earn trust by providing innovative, quality products and keeping your word.",
      "image": "http://blogs-images.forbes.com/alisoncoleman/files/2014/05/richard-branson11.jpg"
    },
    {
      "author": "Richard Williams",
      "quote": "Nothing comes to a sleeper but a dream.",
      "image": "https://nyoobserver.files.wordpress.com/2014/09/richard-williams-photo.jpg?w=1200"
    },
    {
      "author": "Seneca The Younger",
      "quote": "While we teach, we learn.",
      "image": "http://solzemli.files.wordpress.com/2009/12/senecatheyounger.jpg"
    },
    {
      "author": "Steve Jobs",
      "quote": "Being the richest man in the cemetery doesn’t matter to me … Going to bed at night saying we’ve done something wonderful… that’s what matters to me.",
      "image": "http://static4.businessinsider.com/image/51bf0fafecad04b76a000010/the-new-cover-of-the-steve-jobs-biography-shows-him-as-a-young-man.jpg"
    },
    {
      "author": "Sophocles",
      "quote": "One must learn by doing the thing; for though you think you know it, you have no certainty until you try.",
      "image": "http://ingridsnotes.files.wordpress.com/2011/04/sophocles.jpg"
    },
    {
      "author": "Søren Kierkegaard",
      "quote": "Truth always rests with the minority because the minority is generally formed by those who really have an opinion, while the strength of a majority is illusory, formed by the gangs who have no opinion.",
      "image": "http://www.brainpickings.org/wp-content/uploads/2013/06/kierkegaard_stamp.jpg"
    },
    {
      "author": "Tony Schwartz",
      "quote": "The enemy of sustainable productivity is not stress. Rather, it’s the absence of intermittent rest and renewal.",
      "image": "http://www.bigspeak.com/images/speakers/Tony-Schwartz.jpg"
    },
    {
      "author": "Tiffany Han",
      "quote": "I keep going anyway. I pause and take the doubts in. I cry. I curse. I think it's unfair and that I can't continue. But then I do. I get up, brush my shoulders off, and carry on.",
      "url": "http://www.tiffanyhan.com/blog/2013/3/15/fridays-confession-i-have-doubts.html",
      "image": "http://4.bp.blogspot.com/-0rgyXDDyFDw/UL0tueomdvI/AAAAAAAACuw/cHfNaXPNq_Q/s1600/tiffany_han.jpg"
    },
    {
      "author": "Victor Hugo",
      "quote": "A man is not idle because he is absorbed in thought. There is a visible labor and there is an invisible labor.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
    },
    {
      "author": "Victor Hugo",
      "quote": "He who opens a school door, closes a prison.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
    },
    {
      "author": "Victor Hugo",
      "quote": "Initiative is doing the right thing without being told.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
    },
    {
      "author": "Victor Hugo",
      "quote": "There is nothing more powerful than an idea whose time has come.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
    },
    {
      "author": "Victor Hugo",
      "quote": "When a woman is talking to you, listen to what she says with her eyes.",
      "image": "http://upload.wikimedia.org/wikipedia/commons/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg"
    },
    {
      "author": "Vin Diesel",
      "quote": "Being male is a matter of birth. Being a man is a matter of age. But being a Gentleman is a matter of choice.",
      "image": "http://ia.media-imdb.com/images/M/MV5BMjExNzA4MDYxN15BMl5BanBnXkFtZTcwOTI1MDAxOQ@@._V1_SY317_CR7,0,214,317_.jpg"
    },
    {
      "author": "William Butler Yeats - adapted by Christian Vuerings",
      "quote": "Education shouldn't fill a bucket but light a fire.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/Y/William-Butler-Yeats-9538857-1-402.jpg"
    },
    {
      "author": "William Butler Yeats",
      "quote": "There are no strangers here; Only friends you haven't yet met.",
      "image": "http://www.biography.com/imported/images/Biography/Images/Profiles/Y/William-Butler-Yeats-9538857-1-402.jpg"
    }
  ];