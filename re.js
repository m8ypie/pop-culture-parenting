const fs = require("fs");

const content = {
  podcasts: [
    {
      episodeNumber: 1,
      episodeName: "Ep001: Home Alone (1990) + Time Out",
      description:
        "<p>In our very first episode we tackle the parenting technique of Time Out and talk through how to support Kevin in a busy household. Hot tip, don't send him to the attic.</p>\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/home-alone-1990-time-out-lFdPQn_P",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/eeddfa73-92d0-4ba5-83d3-047c31841217/3000x3000/home-alone-339x400-square.jpg?aid=rss_feed",
      movieTitle: "Home Alone",
      imdbId: 771
    },
    {
      episodeNumber: 2,
      episodeName: "Ep002: Terminator 2 (1991) + responding to emotions",
      description:
        "Dr Billy Garvey provides an actionable set of steps to help identify and support your child when they're having some emotional difficulties in the moment. We use a scene from Terminator 2 to give context to Billy's advice. Follow on Instagram @popcultureparenting for show notes and more details on the topic and film\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep002-terminator-2-1991-responding-to-emotions-TN2j4PZC",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c9e9a2a2-01bf-461e-9df2-fe7b9519c8ed/3000x3000/r-1747813-1476710615-9653-jpeg.jpg?aid=rss_feed",
      movieTitle: "Terminator 2: Judgment Day",
      imdbId: 280
    },
    {
      episodeNumber: 3,
      episodeName: "Ep003: Parenting in a pandemic + Aliens (1986)",
      description:
        "Parenting through a pandemic is challenging to say the least. In this episode, Dr Billy Garvey shares evidence based insights on how to ease the pressure of parenting through the Covid-19 pandemic and the uncertainty that surrounds it. We lean on Sigourney Weaver's masterful performance as Ripley in 'Aliens'(1986) to give context to Billy's advice. We discuss Ripley's approach to building a bond and supporting a traumatised Newt.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep003-parenting-in-a-pandemic-aliens-1986-7Ri1fcEc",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/97c21ebf-104b-4350-b6ef-726edb3070a1/3000x3000/s-l400.jpg?aid=rss_feed",
      movieTitle: "Aliens",
      imdbId: 679
    },
    {
      episodeNumber: 4,
      episodeName: "Ep004 Reflective Practice - Parenting in a pandemic + Aliens(1986)",
      description:
        "Wanna know how to thrive in a 7-day lockdown in a house where everyone has COVID-19? Then listen to this!\n\nA week after dropping tips about parenting in a pandemic (episode 3), Nick and his family put it into action after everyone contracts COVID. There are 5 practical tips in this episode so please enjoy\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep004-reflective-practice-parenting-in-a-pandemic-aliens1986-op_Dd1Kn",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/87f6b98d-2d5f-4b28-8f35-f16b5c96ae4d/3000x3000/img-20220125-wa0015.jpg?aid=rss_feed",
      movieTitle: "Aliens",
      imdbId: 679
    },
    {
      episodeNumber: 5,
      episodeName: "Ep005: Twins(1988) + how many kids should I have?",
      description:
        "Episode #5 is out and it was lots of fun answering a FAN QUESTION 🎉 woohoo! We talk about the evidence regarding single children vs siblings and the classic movie about brotherly love…. Twins.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep005-twins1988-how-many-kids-should-we-have-RCZK4X6e",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/395842d6-b25f-4e8c-9dc6-4ab308d39b13/3000x3000/img-20220127-154531-902.jpg?aid=rss_feed",
      movieTitle: "Twins",
      imdbId: 9493
    },
    {
      episodeNumber: 6,
      episodeName: "Ep006: Twins + 'how many kids should we have?' Part 2",
      description:
        "In a follow up to episode 5, we discuss feedback from listeners on what the right amount of kids to have actually is.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep006-twins-how-many-kids-should-we-have-part-2-_wmimWux",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/b2a676f6-9794-47df-baa5-e7f0dc21b281/3000x3000/img-20220206-wa0006.jpg?aid=rss_feed",
      movieTitle: "Twins",
      imdbId: 9493
    },
    {
      episodeNumber: 7,
      episodeName: "Ep007: Remember the Titans + how do you parent without shaming your kids",
      description:
        "We explore parenting without shame and the best way to support our kids when they make mistakes. \n\n#LeftsideStrongside #rememberthetitans\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep007-remember-the-titans-how-do-you-parent-without-shaming-your-kids-wRDMqUsD",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c5d62d43-1247-4260-9a38-a8b4dc75123c/3000x3000/img-20220213-130644-914.jpg?aid=rss_feed",
      movieTitle: "Remember the Titans",
      imdbId: 10637
    },
    {
      episodeNumber: 8,
      episodeName: "Ep008: Remember the Titans + parenting without shame",
      description:
        "Episode 8 dives into reflective practice and Nick surprises himself with some well retained knowledge and strong application of some key questions he asks himself before diving in to correcting/discipling his kids\n1. What's going on for them (the child)?\n2. What have I missed?\n3. Have I pitched things too high?\n\nA good short listen, well worth a spin. Enjoy\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep008-remember-the-titans-parenting-without-shame-kgkpdSc1",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/38e551b6-0ab4-4132-928b-a49baf288b49/3000x3000/screenshot-20220222-200210-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Remember the Titans",
      imdbId: 10637
    },
    {
      episodeNumber: 9,
      episodeName: "Ep009: Ferris Bueller's Day Off + Kids who are struggling to attend school",
      description:
        "Billy and Nick discuss Ferris Bueller’s Day Off & Kids who are struggling to attend school. Something for everyone as we talk about setting up kids for success, spotting that they’re struggling and getting them back when they go off track. Can’t wait to hear your feedback!!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep009-ferris-buellers-day-off-kids-who-are-struggling-to-attend-school-_j7iiDVp",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/13695376-14fb-4d16-8857-23d8185a32db/3000x3000/img-20220302-wa0010.jpg?aid=rss_feed",
      movieTitle: "Ferris Bueller's Day Off",
      imdbId: 9377
    },
    {
      episodeNumber: 10,
      episodeName: "Ep010: Kids who are struggling to attend school Part 2",
      description:
        "How good is reflective practice!? We discuss feedback and questions from listeners as well as supporting each other after difficult chats.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep010-kids-who-are-struggling-to-attend-school-part-2-Ui3hKjS_",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/feae0b5e-f6af-4975-bbe0-608a55b12a75/3000x3000/img-20220306-wa0006.jpg?aid=rss_feed",
      movieTitle: "Ferris Bueller's Day Off",
      imdbId: 9377
    },
    {
      episodeNumber: 11,
      episodeName: "Ep011: Billy Madison + toilet training part 1",
      description:
        "Toilet training. Something every child goes through.  It's also not necessarily 'mastered' by late toddler-hood - 10% of 5 year olds and 5% of 10 year olds still have accidents during the day.\n\nWe use Billy Madison's friend Ernie to help talk through the strongest approaches to achieve success - you cam see the screen on our instagram page @popcultureparenting\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep011-billy-madison-toilet-training-part-1-zprCN0A6",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/32583f8f-a9dc-40c1-9eb7-25b514821b8b/3000x3000/0957405b-847b-4bd1-8e83-2eb64fe4d803.jpg?aid=rss_feed",
      movieTitle: "Billy Madison",
      imdbId: 11017
    },
    {
      episodeNumber: 12,
      episodeName: "Ep012: Billy Madison + toilet training part 2",
      description:
        "Part 2 of Billy Madison + Toilet training podcast is LIVE \n\nWe answered the following 5 questions which came from our listeners:\n1. Can I ruin my child's life by messing up toilet training?\n2. The 'dream wee'... myth or reality\n3. My kid is struggling after multiple setbacks... what do I do?\n4. Any advice on Encopresis?\n5. ?????? (#secretquestion)\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep012-billy-madison-toilet-training-part-2-UZQcZI3S",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/f7613d7f-d1dc-4ec5-9c60-32a372eb7553/3000x3000/screenshot-20220321-134055-youtube.jpg?aid=rss_feed",
      movieTitle: "Billy Madison",
      imdbId: 11017
    },
    {
      episodeNumber: 13,
      episodeName: "Ep013: Parenthood + sensitive kids (part 1)",
      description:
        "Steve Martin's character Gill and his son Kevin give us the perfrct backdrop to discuss what’s going on for sensitive kids, how we can support them and why that is so important. Please send in your questions so we can go deep in our reflective practice episode next week.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep013-parenthood-sensitive-kids-jbEdI2gX",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/d04c0f51-bdf7-4fc7-a16d-05988de058a4/3000x3000/1097ecea72d19d39bb9505c4b5946275-roller-coasters-the-coasters.jpg?aid=rss_feed",
      movieTitle: "Parenthood",
      imdbId: 1552
    },
    {
      episodeNumber: 14,
      episodeName: "Ep014: Parenthood (1989) + sensitive kids (Part 2)",
      description:
        "In this ep we answer a few questions including; 'how do I parent a dandelion and an orchid?', 'how much support is enough?' and 'how can I support my kid in a Lord of the Flies type playground?' and much, much more.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep014-parenthood-1989-sensitive-kids-part-2-0m5jMTE3",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/68fa7767-de78-4e1a-bbd5-a0114f1a8954/3000x3000/screenshot-20220405-204558-whatsapp.jpg?aid=rss_feed",
      movieTitle: "Parenthood",
      imdbId: 1552
    },
    {
      episodeNumber: 15,
      episodeName: "Ep015: Hook (1992) + fussy eating",
      description:
        "Hook (1992) & fussy kids. This one’s fun, emotional and hopefully really helpful. Bangarang everyone!!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep015-hook-1992-fussy-eating-8fEJSbcU",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/057f4cc0-cf10-426b-99b0-2a74807bd7bc/3000x3000/img-20220411-wa0009.jpg?aid=rss_feed",
      movieTitle: "Hook",
      imdbId: 879
    },
    {
      episodeNumber: 16,
      episodeName: "Ep016: Hook (1991) + fussy eating (part 2)",
      description:
        "In part 2 of Hook (1991) + fussy eating we answer specific questions from listeners about diet, constipation and improving meal times! \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep016-A5fgKkdP",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/47f474de-9fc9-4f96-bcdf-83a2039cb455/3000x3000/img-20220418-wa0002.jpg?aid=rss_feed",
      movieTitle: "Hook",
      imdbId: 879
    },
    {
      episodeNumber: 17,
      episodeName: 'Ep017: Stand By Me + "bad" kids',
      description:
        "We’ve all heard the term “bad kid” before. In this ep, Dr Billy tells us why why he loves to work with these kids and recounts some lessons he’s learnt along the way. We use the emotional campfire scene from Stand By Me where River Phoenix shines (the scene is on our Instagram channel - @popcultureparenting). \nNick also catches Billy off guard by nailing some psychology theory!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep017-stand-by-me-bad-kids-LqRVb5Qn",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/61c6d2f6-4262-4f51-b02f-042d2b1e7a99/3000x3000/img-20220424-123954-343.jpg?aid=rss_feed",
      movieTitle: "Stand By Me",
      imdbId: 938608
    },
    {
      episodeNumber: 18,
      episodeName: 'Ep018: Stand By Me + "Bad" Kids',
      description:
        'Bad kids ep drove a bunch of GREAT questions from parents and professionals. We answer lots of questions including:\n- How many chances can we give a bad kid when the behaviours are breaking us?\n- How do we make a positive influence when there is so much negative intergenerational experience?\n- How to manage bad behaviour without impacting the relationship?\n- How do we make it fair on the "good" kids in the classroom? \n- How can we make sure these kids will be ok when they become adults?\n',
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep018-stand-by-me-bad-kids-m7sI1vtp",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/41701759-72fb-4b60-8878-5e96a504391e/3000x3000/screenshot-20220501-170401-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Stand By Me",
      imdbId: 938608
    },
    {
      episodeNumber: 19,
      episodeName: "Ep019: Big Daddy(1999) + kids that won't sleep",
      description:
        "Got a kid that won't sleep? Hop in to episode 19 with Dr Billy and Nick to learn the best skills and rituals to adopt to improve their overall sleep.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep019-big-daddy1999-kids-that-wont-sleep-jpBQmZD9",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/a72d4903-a356-4143-aebe-fd2e2c8e65a4/3000x3000/big-daddy-1999-film-images-24bba3e5-e607-46b1-a90c-4b28db1be04.jpg?aid=rss_feed",
      movieTitle: "Big Daddy",
      imdbId: 9032
    },
    {
      episodeNumber: 20,
      episodeName: "Ep020: kids that won't sleep (Part 2)",
      description:
        "In episode 20 Dr Billy tells you how to get kids to sleep and keep them asleep. The team gets deep into the evidence about kids who won’t sleep to address the many amazing questions that came in. Please enjoy and let us know what you think.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep020-kids-that-wont-sleep-part-2-P0h2GKIs",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c3b7c938-4355-4f29-8f4e-263d7014f69d/3000x3000/screenshot-20220518-195257-whatsapp.jpg?aid=rss_feed",
      movieTitle: "Big Daddy",
      imdbId: 9032
    },
    {
      episodeNumber: 21,
      episodeName: "Ep021: Big + parental mental health",
      description:
        "Who could forget 'Big' (1988) with Tom Hanks? He received an Academy Award nomination for best actor, but now he'll truly be immortalised as we selected this film in Episode 21: Big + parental mental health. Now live on all podcast platforms.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep021-big-parental-mental-health-x0ujvbd7",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/f9879ab0-16dc-43bb-8bba-92dc6f35312e/3000x3000/img-20220524-203037-822.jpg?aid=rss_feed",
      movieTitle: "Big",
      imdbId: 2280
    },
    {
      episodeNumber: 22,
      episodeName: "Ep022: Big (1988) + parental mental health (part 2)",
      description:
        "Nick and Billy share their stories about their own mental health and discuss how we can look after ourselves and those around us\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep022-big-1988-parental-mental-health-part-2-iRTKb07z",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/6c5df7e8-04fa-4a28-b58c-7f5b3229ca5f/3000x3000/screenshot-20220530-195853-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Big",
      imdbId: 2280
    },
    {
      episodeNumber: 23,
      episodeName: "Ep023: E.T. + Imaginary friends + Empathy",
      description:
        "Who knew Imaginary Friends and Empathy would be so closely linked? \nDr Billy takes us on a journey this week and talks about the history and benefits of imaginary friends with the help of a little alien named E.T.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep023-et-imaginary-friends-empathy-5R_mXu0t",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/1fe90002-cebc-4ff8-a545-3a8daaecc18e/3000x3000/screenshot-20220606-183638-chrome.jpg?aid=rss_feed",
      movieTitle: "E.T.",
      imdbId: 1066612
    },
    {
      episodeNumber: 24,
      episodeName: "Ep024: E.T. + Imaginary Friends and Empathy (Part2)",
      description:
        "AMAZING questions from listeners makes for a fun episode. Dr Billy talks about the link between imaginative play with developing empathy in children.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep024-et-imaginary-friends-and-empathy-U_nXrLNW",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/629004e9-b096-4059-b1c6-d928940b6019/3000x3000/screenshot-20220612-182107-photo-editor.jpg?aid=rss_feed",
      movieTitle: "E.T.",
      imdbId: 1066612
    },
    {
      episodeNumber: 25,
      episodeName: "Ep025: Good Will Hunting & our role in kids resilience",
      description:
        "Our very first guest and what a way to celebrate episode 25 Good Will Hunting & our role in building kids' resilience! Bec Harris brings a wealth of knowledge about why and how we set our kids up to get through the tough times. Please send in your questions as Bec is going to join us next week to help answer them. \nTo learn more about Bec and her work please visit traumainformedpractice.com.au\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep025-good-will-hunting-our-role-in-kids-resilience-j0nQ7NLh",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/3314ae43-49e0-4c06-a781-7c41c6a9c7c2/3000x3000/large-3yhtbrfp32aoupswyesojm3coeq.jpg?aid=rss_feed",
      movieTitle: "Good Will Hunting",
      imdbId: 489
    },
    {
      episodeNumber: 26,
      episodeName: "Ep026: (part 2) Good Will Hunting + our role in kids resilience",
      description:
        "\"How you like them apples?\"\nPart 2 of 'our role in kids resilience' is JAM PACKED with more than 10 questions from parents, professionals and 'fans'(lol).\n\nDr Billy and Bec are direct in their responses and build on their answers with one another to make sure you get what you need on advice to help build kids resilience.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep026-part-2-good-will-hunting-our-role-in-kids-resilience-WeXrjjfB",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c50a33ea-b19a-432b-8e6c-402bedf69eb8/3000x3000/img-20220628-203240-628.jpg?aid=rss_feed",
      movieTitle: "Good Will Hunting",
      imdbId: 489
    },
    {
      episodeNumber: 27,
      episodeName: "Ep027: Karate Kids + breaking bad habits",
      description:
        "Want to know how to form good habits with your kids? Or maybe you want to get rid of some bad ones? Dr Billy helps us understand how good habits are formed and how you can instill them with your kids in some easy steps. Enjoy\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep027-karate-kids-breaking-bad-habits-U1cS9Pwe",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/3376b2ce-e80f-46fc-b471-aae0515cc844/3000x3000/23793d10-5f65-40be-8555-6eca0f0ee5f7.jpg?aid=rss_feed",
      movieTitle: "Karate Kids",
      imdbId: 609057
    },
    {
      episodeNumber: 28,
      episodeName: "Ep028: Breaking bad habits (part 2)",
      description:
        "Part 2 of 'Breaking bad habits' gives people practical tips to create good habits with their kids, break the bad ones and also provides support to parents whos kids have a bit more going to create good habits. Here are the specific questions Dr Billy answers:\n1. How do we build good habits about exercise, sleep, diet, money?\n2. How to deal with bad habits pulling hair, picking skin, biting nails, screens.?\n3. How to approach habits in children with neurodevelopmental or mental health concerns?\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep028-breaking-bad-habits-part-2-Jr8Lu3EA",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/e1f38ff3-f322-4936-b3e1-5286534bf236/3000x3000/screenshot-20220712-203328-gallery.jpg?aid=rss_feed",
      movieTitle: "Karate Kids",
      imdbId: 609057
    },
    {
      episodeNumber: 29,
      episodeName: "Ep029: Jaws + understanding anxiety",
      description:
        "Anxiety is the MOST common mental illness in kids, particularly after a pandemic. We dont focus a lot on sharks, but on more common things kids have a fear of (dogs, tigers, school, etc).\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep029-jaws-understanding-anxiety-38wdvJWU",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/62605350-24e4-495b-abbc-38ea4a0fe499/3000x3000/img-20220718-194043-589.jpg?aid=rss_feed",
      movieTitle: "Jaws",
      imdbId: 578
    },
    {
      episodeNumber: 30,
      episodeName: "Ep030: Jaws + understanding anxiety (part 2)",
      description:
        "Anxiety is the most common mental health illness in kids, but it can also be the most difficult one to pin point. \nIn episode 30 of our series we answer listeners questions about how to manage performance anxiety, support kids as they're spiralling and develop tactics to help them through\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep030-jaws-understanding-anxiety-part-2-UQwtNlRh",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/eb2d3f9d-5694-4925-b691-c7cba0d16d20/3000x3000/screenshot-20220725-193128-gallery.jpg?aid=rss_feed",
      movieTitle: "Jaws",
      imdbId: 578
    },
    {
      episodeNumber: 31,
      episodeName: "Ep031: Dumb & Dumber + the power of friendship",
      description:
        "Genuine friendships are one of the most protective factors for our kids through out their entire lives. Billy and Nick use Dumb & Dumber to frame  how to build good opportunities for kids to develop strong friendships and if kids are struggling to develop them, then how we bring them back.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep031-dumb-dumber-the-power-of-friendship-REfJFA8P",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/d4a4997d-50af-4861-902f-ca0ac7d950ac/3000x3000/img-20220801-wa0016.jpg?aid=rss_feed",
      movieTitle: "Dumb and Dumber",
      imdbId: 8467
    },
    {
      episodeNumber: 32,
      episodeName: "Ep032: the power of friendship (part 2)",
      description:
        "Dozens of questions from listeners for part 2 of 'the power of friendship' episode. We consolidated down to 9 questions in total, including dealing with undesirable friendships, exclusion, shyness and some more complicated questions.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep032-power-of-friendship-G6miIhrh",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/6c163820-bcc4-492c-a55f-d74fa34cfe0f/3000x3000/screenshot-20220808-181236-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Dumb and Dumber",
      imdbId: 8467
    },
    {
      episodeNumber: 33,
      episodeName: "Ep033: My Girl + Grief",
      description:
        "Grief can be really tough for us and our kids. This week Nick and Billy talk about loss (a death, a relationship, your own independence) and how we can help our kids navigate this challenging experience.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep033-my-girl-grief-YLuqulA0",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ef1ba75d-4359-4a34-bdda-ead9ebb86668/3000x3000/mygirl.jpg?aid=rss_feed",
      movieTitle: "My Girl",
      imdbId: 4032
    },
    {
      episodeNumber: 34,
      episodeName: "Ep034: My Girl + Grief (part 2)",
      description:
        "Huge contribution this week from listeners sharing their challenges and wisdom with grief and death. Part 2 is truely guided by loved experience thanks to one courageous and generous parents. Tough but important stuff for us and our kids.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep034-my-girl-grief-part-2-sQgpP12O",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/59dee259-9639-40ef-92cc-c07e06c3cbd1/3000x3000/img-20220822-wa0024.jpg?aid=rss_feed",
      movieTitle: "My Girl",
      imdbId: 4032
    },
    {
      episodeNumber: 35,
      episodeName: "Ep035: Finding Nemo + kids who can't focus",
      description:
        "Lots of kids can’t focus for many different reasons. ADHD is a common cause with 7% of Aussie kids aged 4 to 17 years of age having the condition. Difficulties with attention, hyperactivity and impulsivity can have huge impacts on not only learning but also relationships and self esteem. This week Nick and Billy chat about how we support all kids to develop the skills required to succeed when they need to focus and control their impulses.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep035-VMU6iD_u",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ed2ad7bf-ef42-4812-b8ae-239e1c23dae7/3000x3000/p-findingnemo-19752-05271d3f.jpg?aid=rss_feed",
      movieTitle: "Finding Nemo",
      imdbId: 12
    },
    {
      episodeNumber: 36,
      episodeName: "Ep036: Finding Nemo + Kids that can't focus (part 2)",
      description:
        "So many amazing questions this week about kids who can’t focus and ADHD. We cover how to talk to kids about it, emotional difficulties, the stigma, medication, education approaches and so much more! Thank you to all who guided us this week and we hope it helps you in guiding the kids you care for.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep036-finding-nemo-kids-that-cant-focus-part-2-lMhCxqvM",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/6c41892d-eca1-425b-9422-941946b519e4/3000x3000/screenshot-20220905-185225-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Finding Nemo",
      imdbId: 12
    },
    {
      episodeNumber: 37,
      episodeName: "Ep037: Back to the Future + Bullying",
      description:
        "Bullying can be one of the most devastating experiences for kids to go through and sadly too many go through this trauma, often alone. As parents and professionals supporting children and teenagers it is really important we talk to our kids about bullying to protect them from it’s destructive impact. In this episode Nick and Billy use Back to the Future to discuss Bullying and how best to support all kids when it occurs (even if they're doing the bullying)\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep037-back-to-the-future-bullying-wVe2_MjM",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/8ef85d2b-3b65-42e2-9c5f-ba986c83ce94/3000x3000/backtothefuture.jpg?aid=rss_feed",
      movieTitle: "Back to the Future",
      imdbId: 105
    },
    {
      episodeNumber: 38,
      episodeName: "Ep038: Back to the Future + Bullying (part 2)",
      description:
        "So many great questions from listeners about bullying this week. We talk about figuring out if it’s bullying or just fun between mates, at what age should we start talking about bullying, safe and healthy responses, sticking up for other kids, what to do if our kid is the bully and what schools can do. All of this plus a bonus question from Nick!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep038-back-to-the-future-bullying-part-2-2Sy6pn47",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/94d5cc96-be24-4efa-ae8b-1ae01ed77c10/3000x3000/screenshot-20220919-195040-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Back to the Future",
      imdbId: 105
    },
    {
      episodeNumber: 39,
      episodeName: "Ep039: Willy Wonka and the Chocolate Factory + Screen time (part 1)",
      description:
        "Screen time causes so much stress and guilt for families and feels like a new phenomenon. This week Nick shines (as always) with his honest and practical experience with screens, while Dr Billy delivers practical strategies and evidence back learning\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep039-willy-wonka-and-the-chocolate-factory-screen-time-part-1-tEo6Lp8F",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/bb43014a-95d1-474a-b6ca-f32390d8812f/3000x3000/91mlcxoco8l-ri.jpg?aid=rss_feed",
      movieTitle: "Willy Wonka & the Chocolate Factory",
      imdbId: 252
    },
    {
      episodeNumber: 40,
      episodeName: "Ep040: Willy Wonka and the Chocolate Factory + Screen time (part 2)",
      description:
        "In our follow up screen time we spoke about what kids watch on screens, different types of screen use, talking to kids about screens, strategies for screens and how to get grandparents in the same page. We especially loved people sharing their honest experiences with screens and a special shout out to those with broken TVs and remotes 😂\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep040-LkbZgod2",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ebe3ef9b-db6c-42c3-b91b-b87f4aa83fe9/3000x3000/screenshot-20221003-190103-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Willy Wonka & the Chocolate Factory",
      imdbId: 252
    },
    {
      episodeNumber: 41,
      episodeName: "Ep041: Never Ending Story + Depression",
      description:
        "Depression is more than feeling sad or low. It is a destructive mental illness that causes so much heartache and suffering in our communities. It is essential that we all understand depression to make sure we see and support those who are fighting against it. This week Nick and Billy chat about what is behind depression, how it presents in our kids and what we can do about it. We also learn about depression from the wonderful characters of the 80s fantasy classic - The Neverending Story!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep041-never-ending-story-depression-KMsm6ifQ",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/98c212e0-c87d-4c49-b2c1-12ce49435465/3000x3000/img-20221010-wa0000.jpg?aid=rss_feed",
      movieTitle: "Neverending Story",
      imdbId: 1027023
    },
    {
      episodeNumber: 42,
      episodeName: "Ep042: Depression part 2",
      description:
        "This week we reflect on last weeks chat about depression and answer your amazing questions. We talk about our role as parents, prevention, the details of therapy and medication and kids who won’t engage. Thanks for sharing your journey!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep042-depression-part-2-sy4A1XF7",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ba633f0b-d9b6-4394-9eac-bbbf2508460a/3000x3000/screenshot-20221017-181136.jpg?aid=rss_feed",
      movieTitle: "Neverending Story",
      imdbId: 1027023
    },
    {
      episodeNumber: 43,
      episodeName: "Ep043: Dirty Dancing (1987) & language development",
      description:
        " Language development is so much more than learning how to talk. In fact that isn’t even the first step!!! This week Nick and Billy discuss the timeless classic Dirty Dancing & our role as instructors in teaching our children about language.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep043-dirty-dancing-1987-language-development-6_f9vqXj",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/48e9816c-867c-4c96-9833-0466cb2d109b/3000x3000/img-20221024-wa0020.jpg?aid=rss_feed",
      movieTitle: "Dirty Dancing",
      imdbId: 88
    },
    {
      episodeNumber: 44,
      episodeName: "Ep044: language development (part 2)",
      description:
        "Amazing questions this week! We spoke about supporting language development in younger and older kids, dummies, swearing, academic concerns and selective mutism. We’re gonna try to get to the other questions on Instagram too as we ran out of time!! Thanks for sending them in and hope you enjoy!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep044-language-development-part-2-G6befRHU",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/1e2acfd1-8075-46c2-852b-0e6cab7025b6/3000x3000/screenshot-20221031-194051-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Dirty Dancing",
      imdbId: 88
    },
    {
      episodeNumber: 45,
      episodeName: "Ep045: Braveheart & kids that grow up too fast",
      description:
        "Growing up too fast can have a negative impact on many aspects of child development and mental health. Trauma, unrealistic expectations and a lack of opportunity with guidance are some of the risk factors for the kids we support, and for William Wallace. Many of us have also had to grow up too fast and we hope this episode helps to understand and approach this tough topic.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep-45-braveheart-_Z81BAt4",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/7fe92a66-48e1-4477-ab0c-296727370c4e/3000x3000/screenshot-20221107-143654-chrome.jpg?aid=rss_feed",
      movieTitle: "Braveheart",
      imdbId: 197
    },
    {
      episodeNumber: 46,
      episodeName: "Ep046: kids that grow up too fast (part 2)",
      description:
        "We’ve taken your questions about kids who grow up too fast and distilled them into what Nick calls “The Big 4”. We talk about preventing kids growing up too fast, do kids need tough times, how to help kids that have grown up too fast and what steps to take if you feel like you may have missed steps yourself.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep046-kids-that-grow-up-too-fast-part-2-W8VeYveW",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/8e5dde21-f780-4463-842b-da040ac5813b/3000x3000/screenshot-20221114-161438-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Braveheart",
      imdbId: 197
    },
    {
      episodeNumber: 47,
      episodeName: "Ep047: Predator + pretend play",
      description:
        "Pretend play is lots of fun but it’s also a really important part of childhood. Play allows us to fine tune our development and learn skills that will ensure we succeed in life and against the predator!! We hope you enjoy this episode as we certainly did.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep047-predator-pretend-play-KJxXK4uE",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/e5fc7a34-e065-44e6-9435-dd423418a449/3000x3000/predator1987-720x1024.jpg?aid=rss_feed",
      movieTitle: "Predator",
      imdbId: 106
    },
    {
      episodeNumber: 48,
      episodeName: "Ep048: Predator + pretend play (part 2)",
      description:
        "In the wise word of Dutch “stick around” for this one. We answer questions about the how, why, when and where of pretend play these week. We loved making and we hope it helps guide you into pretend play with the kids you care for.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep048-predator-pretend-play-part-2-ze_9gUjY",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/6253e042-c98b-4dd9-9d7e-6332f664b369/3000x3000/screenshot-20221128-194924-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Predator",
      imdbId: 106
    },
    {
      episodeNumber: 49,
      episodeName: "Ep049: Pretty Woman + Self-esteem",
      description:
        "Self-esteem is one of the most important and most difficult aspects of child development and mental health. In our final heavy topic for the year Nick & Billy explore how we support positive self-esteem in our kids and ourselves. It’s gets pretty emotional but well worth a listen for anyone supporting kids or finding it tough themselves.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep049-pretty-woman-self-esteem-E1f_yQVv",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/f0ec497c-15b8-4eb4-8b3e-bd4840c30949/3000x3000/img-20221205-103712-134.jpg?aid=rss_feed",
      movieTitle: "Pretty Woman",
      imdbId: 114
    },
    {
      episodeNumber: 50,
      episodeName: "Ep050: Self-esteem (part 2)",
      description:
        "Episode 50!?!? Where did the time go?\nAmazing questions this week about supporting healthy self-esteem. We discuss signs a child is going ok, how to find the right balance in challenging our kids, how to approach neurodiversity, bullying and too much praise. Hope you enjoy.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep050-self-esteem-part-2-FdmzZJJJ",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/95d0e1cb-7e65-4933-b261-f138496e141f/3000x3000/screenshot-20221214-191602-photo-editor.jpg?aid=rss_feed",
      movieTitle: "Pretty Woman",
      imdbId: 114
    },
    {
      episodeNumber: 51,
      episodeName: "Ep051: Christmas Vacation + the pressure of perfection",
      description:
        "In our final episode of 2022 we celebrate our listeners Winslows (wins) and Griswolds (lowpoints) before we unpack the the best tips to relieving the pressure during the holiday season on parents. Thanks to everyone that sent messages and shared their reflections on the podcast this year and particularly this episode!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep051-christmas-vacation-the-pressure-of-perfection-Ex70VLzx",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/8baf5537-07e5-48ca-be42-16844adb2277/3000x3000/screenshot-20221223-203955-photo-editor.jpg?aid=rss_feed",
      movieTitle: "National Lampoon's Christmas Vacation",
      imdbId: 5825
    },
    {
      episodeNumber: 52,
      episodeName: "Ep052: Rambo + tantrums",
      description:
        "When a kid has a tantrum, particularly in public, it has got to be up there as one of the most challenging parenting moments. Dr Billy uses a classic scene from Rambo (maybe the biggest tantrum ever?) on how to support kids and help calm the situation without going to war with them\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep052-rambo-tantrums-S1ARSsH_",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c91e5abd-4634-4c7c-a9c1-58dde637ab48/3000x3000/5ba5970dbee622d9c987484feb9645cc.jpg?aid=rss_feed",
      movieTitle: "Rambo",
      imdbId: 7555
    },
    {
      episodeNumber: 53,
      episodeName: "Ep053: tantrums (part 2)",
      description:
        "The subject of Tantrums has driven the largest amount of questions on a topic so far. Dr Billy and Nick tackled listeners questions in 38 degree heat! It's a miracle Nick made it through while Billy remained cool, calm and considered. Enjoy!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep053-tantrums-part-2-7TXz2icR",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/974192f1-1af3-44d7-bfe0-a2cba291a94f/3000x3000/ep-53-artwork.jpg?aid=rss_feed",
      movieTitle: "Rambo",
      imdbId: 7555
    },
    {
      episodeNumber: 54,
      episodeName: "Ep054: The Fast and the Furious + peer pressure",
      description:
        "Peer pressure can be a really tough experience for kids and those who support them. Thankfully we can provide guidance and a safe harbour through these tricky times, just like Dominic Toretto does for his team. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep054-the-fast-and-the-furious-peer-pressure-RF_Umson",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/5f2b0e01-702f-4748-aee2-901098176d8f/3000x3000/photo-2023-01-21-09-41-54.jpg?aid=rss_feed",
      movieTitle: "The Fast and the Furious",
      imdbId: 9799
    },
    {
      episodeNumber: 55,
      episodeName: "Ep055: Peer pressure reflection",
      description:
        "This week we dive deeper into what’s behind peer pressure, how we can set our kids up to succeed through this window and help them if the are finding it a bit tough. We also chat about neurodiversity, building values and confidence and a great story from Nick about his playground experience. Thank you to our amazing listeners for their generous and honest questions.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep055-peer-pressure-reflection-mYyXoayv",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/d8a730d7-7a0f-421e-88ad-87ccd2604b6f/3000x3000/ep-55-artwork.jpg?aid=rss_feed",
      movieTitle: "The Fast and the Furious",
      imdbId: 9799
    },
    {
      episodeNumber: 56,
      episodeName: "Ep056: Mrs. Doubtfire + co-parenting",
      description:
        "Co-parenting can be challenging for those of us raising kids together, following a separation or even on our own. This week we chat about why it matters and some helpful tips beyond dressing up the as nanny and putting on a British accent.....`\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep056-mrs-doubtfire-co-parenting-3y1Tbv7H",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/0fba22a1-1321-4ec1-8047-b9a98087c318/3000x3000/mrs-doubtfire-poster.jpg?aid=rss_feed",
      movieTitle: "Mrs. Doubtfire",
      imdbId: 788
    },
    {
      episodeNumber: 57,
      episodeName: "Ep057: Co-parenting reflection",
      description:
        "In Nick’s own words a very balanced episode this week. We share our own experience, honest and insightful questions from listeners and strategies to improve upon co-parenting challenges. Hope you enjoy. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep057-co-parenting-reflection-URrNyWu9",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ed0fc702-6926-46ce-944f-4b17960489fc/3000x3000/ep-57-photoshop.jpg?aid=rss_feed",
      movieTitle: "Mrs. Doubtfire",
      imdbId: 788
    },
    {
      episodeNumber: 58,
      episodeName: "Ep058: Blade Runner + neurodiversity",
      description:
        "Neurodiversity strengthens our community. Like the world of Blade Runner, we can learn so much from those different to us. We hope you enjoy this episode.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep058-blade-runner-neurodiversity-bTtcSwJb",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/bb599b2f-0364-4ee4-8833-30a635a8c868/3000x3000/blade-runner-2.jpg?aid=rss_feed",
      movieTitle: "Blade Runner",
      imdbId: 78
    },
    {
      episodeNumber: 59,
      episodeName: "Ep059: Neurodiversity reflection",
      description:
        "Phenomenal questions this week about stigma, siblings, social skills, masking, schools, labels and so much more. We hope it helps to guide us all towards more inclusive and stronger communities. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep059-neurodiversity-reflection-b4Be85bW",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/a6ee9521-1d6e-4a0f-9abf-54cad9efced7/3000x3000/ep-59-artwork.jpg?aid=rss_feed",
      movieTitle: "Blade Runner",
      imdbId: 78
    },
    {
      episodeNumber: 60,
      episodeName: "Ep060: As Good As It Gets + becoming a parent",
      description:
        "We can get pretty caught up in the tough bits some times so this week Nick and Billy chat about their experience in becoming parents. For any new parents, seasoned veterans or even those supporting others in their parenting we hope you enjoy!!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep060-as-good-as-it-gets-becoming-a-parent-IzlWGpHR",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/01307f67-3770-48c3-ae70-22275a4d2de6/3000x3000/ep-60-artwork.jpg?aid=rss_feed",
      movieTitle: "As Good as It Gets",
      imdbId: 2898
    },
    {
      episodeNumber: 61,
      episodeName: "Ep061: Becoming a parent reflection",
      description:
        "This week we have 20 rapid fire questions, advice from an amazing professional, our first audio question and as always a bunch of honest, vulnerable and insightful longer questions to guide us home. We hope you enjoy and thank you to the PCP community for being amazing!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep061-becoming-a-parent-reflection-Qfr9SLgR",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c28e753e-be81-4d0b-82c4-b7f88a82c555/3000x3000/ep-61-art-a-b.jpg?aid=rss_feed",
      movieTitle: "As Good as It Gets",
      imdbId: 2898
    },
    {
      episodeNumber: 62,
      episodeName: "Ep062: Indiana Jones and the Last Crusade + risk taking",
      description:
        "One of our most requested topics is finally here! This week we chat about the adventures of Indiana Jones and risk taking. We hope you find it helpful and we are excited to get your questions which are always full of treasure!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep062-indiana-jones-and-the-last-crusade-risk-taking-4WcCdfkY",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/0de803cd-05c3-45e3-a710-f5e62066c8d7/3000x3000/ep-62-tile.jpg?aid=rss_feed",
      movieTitle: "Indiana Jones and the Last Crusade",
      imdbId: 89
    },
    {
      episodeNumber: 63,
      episodeName: "Ep063: Risk taking reflection",
      description:
        "Huge reflection episode this week with so many fantastic questions from listeners! We chat about supporting all kids in risk taking from an early age up to late teens. We cover kids who love risky situations, those who are hesitant and those who don't even seem to realize! Thank you to everyone who helped guide us for this important discussion. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep063-risk-taking-reflection-6FK2wS3X",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/7663d2d6-f331-4a53-a1cf-165258881a19/3000x3000/ep-63-art.jpg?aid=rss_feed",
      movieTitle: "Indiana Jones and the Last Crusade",
      imdbId: 89
    },
    {
      episodeNumber: 64,
      episodeName: "Ep064: Jurassic Park & Co-regulation",
      description:
        "We are back folks! Jurassic Park & co-regulation will hopefully help guide us all in how we support our kids, including Billy!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep064-jurassic-park-co-regulation-RrJ0Rfym",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/2654c943-f750-40c3-863e-4ec943858263/3000x3000/jp-image.jpg?aid=rss_feed",
      movieTitle: "Jurassic Park",
      imdbId: 329
    },
    {
      episodeNumber: 65,
      episodeName: "Ep065: Co-regulation reflection",
      description:
        "Wonderful questions this week going deeper into the practical application of co-regulation for different scenarios, developmental abilities and strengths. We also chat about neurodiversity, our role as parents and a phenomenal use of the movie theme in one of the long questions!! We hope you enjoy.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep065-co-regulation-reflection-T2ljzkTQ",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/29fb6161-9e32-4e8d-80db-5d9d77af9586/3000x3000/ep-65-pic-3.jpg?aid=rss_feed",
      movieTitle: "Jurassic Park",
      imdbId: 329
    },
    {
      episodeNumber: 66,
      episodeName: "Ep066: Legends of the Fall & siblings",
      description:
        "Legends of the Fall & siblings hopes to help guide all of us (Nick and Billy too) through the challenges of raising multiple children. We hope it helps and can’t wait to get all of your feedback and amazing questions. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep066-legends-of-the-fall-siblings-h_w_VcX6",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/fd6c2ef4-2b16-43eb-b17f-4c9bf520a62b/3000x3000/lotf-pic.jpg?aid=rss_feed",
      movieTitle: "Legends of the Fall",
      imdbId: 4476
    },
    {
      episodeNumber: 67,
      episodeName: "Ep 067: Siblings reflection",
      description:
        "Our siblings reflection episode takes a deeper dive into aspects of supporting siblings including jealousy, conflict, equity, neurodiversity and our own childhood sibling relationships. We end on a question from a phenomenal parent striving to build bonded relationships for the children in her care. Thank you everyone for sharing and we hope you find this episode helpful.  \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep-067-RCzMYy7s",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/0fd89473-098b-4d78-84d7-6d9c4cf33a33/3000x3000/lotf-photo-a.jpg?aid=rss_feed",
      movieTitle: "Legends of the Fall",
      imdbId: 4476
    },
    {
      episodeNumber: 68,
      episodeName: "Ep 068: Forrest Gump & kids who are different",
      description:
        "A single question from an amazing parent guides us this week in an emotional discussion about Forrest Gump & kids who are different. Thank you to our amazing community for you vulnerability and willingness to learn together how we can best support all children in our community. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-068-forrest-gump-kids-who-are-different-uys_ubWK",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/2eacdfb3-1e69-43ec-8d52-963d33e3eace/3000x3000/forrest-gump-poster.jpg?aid=rss_feed",
      movieTitle: "Forrest Gump",
      imdbId: 13
    },
    {
      episodeNumber: 69,
      episodeName: "Ep 069: Kids who are different reflection",
      description:
        "So many great questions this week! We cover lots of different aspects of supporting kids who are different including how we build their strengths, create inclusive relationships and environments, use inclusive language, protect self-esteem and validate their experiences. Thank you to all who sent in their amazing insights and challenges to help us all learn together. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-069-kids-who-are-different-reflection-NbQvSGAY",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/c67ed32c-18d2-4a0e-8d16-71b9874ea1bf/3000x3000/ep-69-pic-photoshopped.jpg?aid=rss_feed",
      movieTitle: "Forrest Gump",
      imdbId: 13
    },
    {
      episodeNumber: 70,
      episodeName: "Ep 070: Grease & social skills",
      description:
        "Grease & social skills explores how we can best support kids to succeed in their relationships from babies to teenagers and everything in between. We also also get to hear about how much Nick loves this movie!!!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep-070-grease-social-skills-S6C3c1Cy",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/ba16b1c3-8575-4e7b-9a42-46b986beed4e/3000x3000/img-2040.jpg?aid=rss_feed",
      movieTitle: "Grease",
      imdbId: 621
    },
    {
      episodeNumber: 71,
      episodeName: "Ep 071: Social skills reflection",
      description:
        "In our social skills episode we cover some of the amazing questions that came in about this important part of development. We dive into hitting, saying sorry, empathy, boys vs girls, the impact of childcare, conflict, shyness, neurodiversity, the role of schools, sticking up for yourself and many more. We hope you enjoy!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep-071-social-skills-reflection-lyv_hDME",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/0fd24f67-9980-4a03-8ff5-daef1edb8dd6/3000x3000/ep-71-photo.jpg?aid=rss_feed",
      movieTitle: "Grease",
      imdbId: 621
    },
    {
      episodeNumber: 72,
      episodeName: "Ep 072: Batman Begins & developmental trauma",
      description:
        "A tough but really important topic for us all this week. We discuss what developmental trauma is, how it impacts our kids, what we can do to protect against it and how to help children and families who have experienced it. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-072-batman-begins-developmental-trauma-oUJ3H3YU",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/521ab364-a366-425a-a7e2-6fc50d1388f7/3000x3000/img-2312.jpg?aid=rss_feed",
      movieTitle: "Batman Begins",
      imdbId: 272
    },
    {
      episodeNumber: 73,
      episodeName: "Ep 073: Developmental trauma reflection",
      description:
        "Our developmental trauma reflection episode is our longest yet and for good reason. We had so many amazing questions sent in and we hope we did them justice. Thank you to our phenomenal, honest and vulnerable community. \n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-073-developmental-trauma-reflection-HcX2_KHZ",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/de59760c-7f5d-4727-bb20-381b6597a7a0/3000x3000/batman-beginsz.jpg?aid=rss_feed",
      movieTitle: "Batman Begins",
      imdbId: 272
    },
    {
      episodeNumber: 74,
      episodeName: "Ep 074: Thelma & Louise and mental health first aid",
      description:
        "This week Nick and Billy chat about the amazing movie Thelma & Louise, how it relates to mental illness and then dive into a practical approach to supporting kids who are struggling. We can't wait to hear what you think and read the questions you send in!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-074-thelma-louise-and-mental-health-first-aid-pGqx7dP8",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/a16dc9c8-4223-4b61-b894-0586859fde32/3000x3000/thelma-poster.jpg?aid=rss_feed",
      movieTitle: "Thelma & Louise",
      imdbId: 1541
    },
    {
      episodeNumber: 75,
      episodeName: "Ep 075: Mental health first aid reflection",
      description:
        "In this reflection episode we answer listener questions about how to practically apply mental health first aid as family members and professionals supporting children. Thank you to all the generous listeners who sent in their honest and difficult situations, helping us discuss challenges such as avoidance, aggression, self-harm, suicidal thinking and our own mental health first aid.\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-075-mental-health-first-aid-reflection-icL6B_ei",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/eb223266-4e64-4899-b556-665fe605cf6a/3000x3000/thelma-2.jpg?aid=rss_feed",
      movieTitle: "Thelma & Louise",
      imdbId: 1541
    },
    {
      episodeNumber: 76,
      episodeName: "Ep 076: Die Hard & restoring relationships",
      description:
        "For the first half of our Christmas special we read out our favourite Griswolds and Winslows from listeners, thank you to everyone who sent them in! Then we chat about Die Hard and the benefit of investing in the relationships that matter to us over this holiday break. Thank you to all the fans for a wonderful year!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-076-die-hard-restoring-relationships-8KueoOri",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/3e87bc56-071d-4504-8824-733c19b4804e/3000x3000/ep-76-art.jpg?aid=rss_feed",
      movieTitle: "Die Hard",
      imdbId: 562
    },
    {
      episodeNumber: 77,
      episodeName: "Ep 077: 10 things I hate about you & school success",
      description:
        "In our first episode back for the year we discuss how we can support the children in our lives to succeed at school, especially in their social and emotional development. From their first days in childcare to those big school transitions there is so much we can do to set them up or help them get back on track if things have become tough. We hope you enjoy and can't wait to hear your questions!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast:
        "https://pop-culture-parenting.simplecast.com/episodes/ep-077-10-things-i-hate-about-you-school-success-SQxuSSNi",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/55ec45e4-a087-4e0f-88e9-9995d4374aab/3000x3000/94148116-7eb9-4601-b7b6-4dbfe58a76cb-2.jpg?aid=rss_feed",
      movieTitle: "10 Things I Hate About You",
      imdbId: 4951
    },
    {
      episodeNumber: 78,
      episodeName: "Ep 078: School success reflection",
      description:
        "So many amazing questions this week! In rapid fire we cover starting age, changing school, homework, help seeking and building partnerships with educators. Our long questions dive into choosing the right school, kids who are struggling with peers, separation anxiety, parental guilt and so much more! Thank you to everyone who sent in questions and we hope you enjoy the episode!\n",
      spotify: "https://open.spotify.com/show/3vvbFk8QupQe06UQOwgHj0",
      apple: "https://podcasts.apple.com/au/podcast/pop-culture-parenting/id1602631931",
      google: "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9fN2xjRl82Zw?ep=14",
      simpleCast: "https://pop-culture-parenting.simplecast.com/episodes/ep-078-school-success-reflection-kwS7wmgA",
      thumbnail:
        "https://image.simplecastcdn.com/images/c16f713e-1738-4118-b1b6-4006fc6094d9/1e0399de-38ed-4a54-8c4c-a38bbaf93a41/3000x3000/ep-78-art.jpg?aid=rss_feed",
      movieTitle: "10 Things I Hate About You",
      imdbId: 4951
    }
  ]
};

content.podcasts.reverse();

fs.writeFileSync("podcasts2.json", JSON.stringify(content));