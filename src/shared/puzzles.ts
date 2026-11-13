// Sub Sleuth — daily puzzle bank. Each round: guess the subreddit from clues.

export type Puzzle = {
  answer: string; // correct subreddit (without r/)
  decoys: [string, string, string]; // wrong options
  emojiClue: string;
  descClue: string;
  hint: string; // category hint shown after 1 wrong pick
};

export const PUZZLES: Puzzle[] = [
  { answer: 'AskReddit', decoys: ['NoStupidQuestions', 'CasualConversation', 'OffMyChest'], emojiClue: '🗣️❓📢', descClue: 'The front page question machine — "People of Reddit, what is your…"', hint: 'Q&A' },
  { answer: 'funny', decoys: ['me_irl', 'dankmemes', 'Jokes'], emojiClue: '😂🤣📶', descClue: 'The default humor dump of the internet since 2008', hint: 'Comedy' },
  { answer: 'todayilearned', decoys: ['YouShouldKnow', 'explainlikeimfive', 'interestingasfuck'], emojiClue: '🎓💡📅', descClue: 'TIL the shortest TIL is just "TIL"', hint: 'Facts' },
  { answer: 'IAmA', decoys: ['AskReddit', 'casualama', 'AMA'], emojiClue: '🙋🏷️💬', descClue: 'The original "ask me anything" stage — Obama did one', hint: 'Q&A' },
  { answer: 'gaming', decoys: ['pcgaming', 'Games', 'gamernews'], emojiClue: '🎮🕹️👾', descClue: 'The biggest gaming hub — trailers, clips and console wars', hint: 'Gaming' },
  { answer: 'aww', decoys: ['Eyebleach', 'AnimalsBeingDerps', 'cuteanimals'], emojiClue: '🐶🐱🥰', descClue: 'Maximum cute per square pixel. Warning: may cause awws', hint: 'Animals' },
  { answer: 'Music', decoys: ['listentothis', 'hiphopheads', 'LetsTalkMusic'], emojiClue: '🎵🎧📀', descClue: 'Default-stage music discussion, from pop to prog rock', hint: 'Music' },
  { answer: 'pics', decoys: ['photographs', 'itookapicture', 'EarthPorn'], emojiClue: '📸🖼️🌍', descClue: 'The default image dump — one photo, a thousand backstories', hint: 'Images' },
  { answer: 'science', decoys: ['askscience', 'EverythingScience', 'Physics'], emojiClue: '🔬🧪🧠', descClue: 'Peer-reviewed only. Moderator-flaired researchers required', hint: 'Knowledge' },
  { answer: 'worldnews', decoys: ['news', 'geopolitics', 'InternationalNews'], emojiClue: '🌍📰⚠️', descClue: 'News from outside the US only — no US internal politics', hint: 'News' },
  { answer: 'memes', decoys: ['dankmemes', 'me_irl', 'terriblefacebookmemes'], emojiClue: '🐸☕🔥', descClue: 'The general-purpose meme factory. Dankness optional', hint: 'Comedy' },
  { answer: 'oddlysatisfying', decoys: ['Damnthatsinteresting', 'interestingasfuck', 'BeAmazed'], emojiClue: '✨🧊🔪', descClue: 'Perfect loops of power-washing, knife-making and dominoes', hint: 'Satisfying' },
  { answer: 'explainlikeimfive', decoys: ['NoStupidQuestions', 'askscience', 'OutOfTheLoop'], emojiClue: '🧒📖💡', descClue: 'Big questions, tiny answers. No five-year-olds required', hint: 'Knowledge' },
  { answer: 'mildlyinteresting', decoys: ['Damnthatsinteresting', 'oddlysatisfying', 'mildlyinfuriating'], emojiClue: '🥚📏😐', descClue: 'A snail on a fence. A double yolk. Mildness is the point', hint: 'Images' },
  { answer: 'LifeProTips', decoys: ['YouShouldKnow', 'UnethicalLifeProTips', 'lifehacks'], emojiClue: '💡🧴🧦', descClue: 'Tips that (sometimes) change your life: freezer tape tricks', hint: 'Tips' },
  { answer: 'nottheonion', decoys: ['offbeat', 'NewsOfTheStupid', 'Damnthatsinteresting'], emojiClue: '🧅📰🤨', descClue: 'Real news so absurd it reads like satire', hint: 'News' },
  { answer: 'OldSchoolCool', decoys: ['HistoryPorn', 'TheWayWeWere', 'vintage'], emojiClue: '🕶️🎺📅', descClue: 'Grandpa was a badass in 1968 and here is the photo', hint: 'History' },
  { answer: 'personalfinance', decoys: ['financialindependence', 'Frugal', 'creditcards'], emojiClue: '💰📊🏦', descClue: 'Budgets, 401ks and "I have $5, what do I do?"', hint: 'Money' },
  { answer: 'relationships', decoys: ['relationship_advice', 'AmItheAsshole', 'OffMyChest'], emojiClue: '💔🗣️🚩', descClue: '"My (23F) boyfriend (31M)…" — the letters say it all', hint: 'Life' },
  { answer: 'AnimalsBeingDerps', decoys: ['AnimalsBeingBros', 'aww', 'StartledCats'], emojiClue: '🐈💥🤪', descClue: 'Cats falling off furniture. Dogs eating bees. Derps only', hint: 'Animals' },
  { answer: 'Unexpected', decoys: ['ContagiousLaughter', 'FunnyAndSad', 'Holdmybeer'], emojiClue: '🎯🙃🎬', descClue: 'Watch the video. Wait for it. THERE it is', hint: 'Comedy' },
  { answer: 'BeAmazed', decoys: ['interestingasfuck', 'toptalent', 'nextfuckinglevel'], emojiClue: '😮🤯🌟', descClue: 'Skills, nature and machines that make you go wow', hint: 'Amazing' },
  { answer: 'nextfuckinglevel', decoys: ['BeAmazed', 'toptalent', 'MadeMeSmile'], emojiClue: '🔥💪🏆', descClue: 'Not just amazing — next-level amazing', hint: 'Amazing' },
  { answer: 'MadeMeSmile', decoys: ['aww', 'wholesome', 'Eyebleach'], emojiClue: '🥹💝🐶', descClue: 'Wholesome moments engineered to warm your cold heart', hint: 'Wholesome' },
  { answer: 'interestingasfuck', decoys: ['Damnthatsinteresting', 'BeAmazed', 'mildlyinteresting'], emojiClue: '🤯📹⚡', descClue: 'Genuinely interesting footage — volcanoes to glassblowing', hint: 'Amazing' },
  { answer: 'technology', decoys: ['programming', 'gadgets', 'Futurology'], emojiClue: '💻📱🔌', descClue: 'The default tech news stage — chips, apps and drama', hint: 'Tech' },
  { answer: 'programming', decoys: ['technology', 'coding', 'learnprogramming'], emojiClue: '👨‍💻🐛☕', descClue: 'Where developers argue about tabs vs spaces since forever', hint: 'Tech' },
  { answer: 'Showerthoughts', decoys: ['highdeas', 'CasualThoughts', 'philosophy'], emojiClue: '🚿💭🤔', descClue: 'Mini-philosophy that hits you with shampoo in hand', hint: 'Thoughts' },
  { answer: 'wholesomememes', decoys: ['MadeMeSmile', 'wholesome', 'memes'], emojiClue: '😇🐣💌', descClue: 'Memes that hug back. Supportive frogs included', hint: 'Wholesome' },
  { answer: 'FoodPorn', decoys: ['food', 'cooking', 'PutanEggOnIt'], emojiClue: '🍔🧀😋', descClue: 'Food shots so good they should be illegal', hint: 'Food' },
  { answer: 'EarthPorn', decoys: ['pics', 'NatureIsFuckingLit', 'landscape'], emojiClue: '🏔️🌊🌅', descClue: 'The planet showing off. [OC] [3024x4032]', hint: 'Nature' },
  { answer: 'space', decoys: ['NASA', 'astronomy', 'spacex'], emojiClue: '🚀🪐🔭', descClue: 'Rockets, telescopes and Hubble deep fields', hint: 'Space' },
  { answer: 'history', decoys: ['HistoryPorn', 'AskHistorians', 'historymemes'], emojiClue: '🏛️📜⚔️', descClue: 'From Rome to the Cold War — the long story of everything', hint: 'History' },
  { answer: 'tifu', decoys: ['IdiotswithDishes', 'Wellthatsucks', 'catastrophicsuccess'], emojiClue: '💀🍕😶‍🌫️', descClue: 'Today I fucked up — usually involving glue or a microwave', hint: 'Stories' },
  { answer: 'JusticeServed', decoys: ['instant_regret', 'ConvenientCop', 'JusticeNow'], emojiClue: '⚖️🚔😌', descClue: 'Karma with a badge — bad guys getting what they deserve', hint: 'Justice' },
  { answer: 'CrappyDesign', decoys: ['AssholeDesign', 'mildlyinfuriating', 'onejob'], emojiClue: '🚪🪜🤦', descClue: 'Doors that open into walls and stairs to nowhere', hint: 'Design' },
  { answer: 'assholedesign', decoys: ['CrappyDesign', 'LateStageCapitalism', 'mildlyinfuriating'], emojiClue: '😈💰🚫', descClue: 'Not a mistake — malice. Subscriptions you cannot cancel', hint: 'Design' },
  { answer: 'mildlyinfuriating', decoys: ['CrappyDesign', 'assholedesign', 'Wellthatsucks'], emojiClue: '😤📦🧃', descClue: 'The juice box that will not fit the fridge. Pure rage fuel', hint: 'Rage' },
  { answer: 'Wellthatsucks', decoys: ['mildlyinfuriating', 'tifu', 'WatchPeopleDieInside'], emojiClue: '😬🚗🪟', descClue: 'Bad luck on camera — a car through the garage door', hint: 'Rage' },
  { answer: 'WatchPeopleDieInside', decoys: ['ContagiousLaughter', 'Wellthatsucks', 'kidsfallingover'], emojiClue: '😐💀🎤', descClue: 'The soul leaving the body in real time. Often on live TV', hint: 'Comedy' },
  { answer: 'ContagiousLaughter', decoys: ['Unexpected', 'funny', 'MadeMeSmile'], emojiClue: '😂😂😂', descClue: 'You will laugh. Science cannot explain why', hint: 'Comedy' },
  { answer: 'cats', decoys: ['catpictures', 'aww', 'CatsStandingUp'], emojiClue: '🐱🐈🧶', descClue: 'The internet is and always was about cats', hint: 'Animals' },
  { answer: 'dogsWithJobs', decoys: ['AnimalsBeingBros', 'aww', 'workingdogs'], emojiClue: '🐕👮🦆', descClue: 'Good dogs doing real jobs — police, therapy, duck herding', hint: 'Animals' },
  { answer: 'italianrestaurants', decoys: ['funny', 'CrappyDesign', 'AIwars'], emojiClue: '🤖🍝🤌', descClue: 'AI-generated Italian restaurant names — a legendary niche', hint: 'AI' },
  { answer: 'Dinosaurs', decoys: ['Paleontology', 'Naturewasmetal', 'dinodocs'], emojiClue: '🦖🦕🌋', descClue: 'Big lizards from before the meteor ruined everything', hint: 'Science' },
  { answer: 'confession', decoys: ['OffMyChest', 'tifu', 'TrueOffMyChest'], emojiClue: '🤫🙇⛓️', descClue: 'Anonymous sins, small and enormous, unloaded here', hint: 'Stories' },
  { answer: 'mildlyvagrant', decoys: ['vagabond', 'StreetBums', 'backpacking'], emojiClue: '🎒🚉🗺️', descClue: 'Not quite homeless, not quite traveling — mildly wandering', hint: 'Life' },
  { answer: 'Watches', decoys: ['WatchHorology', 'Seiko', 'luxurywatches'], emojiClue: '⌚💎🔧', descClue: 'Wrist candy from Seiko to Patek — wrist shots required', hint: 'Style' },
  { answer: 'electronicmusic', decoys: ['EDM', 'Techno', 'aves'], emojiClue: '🎧🎛️🔊', descClue: 'Four to the floor. Live sets, IDs and festival drops', hint: 'Music' },
  { answer: 'streetwear', decoys: ['malefashionadvice', 'sneakers', 'fits'], emojiClue: '🧢👟🧥', descClue: 'Fit pics, hauls and hype drops. Drip inspection daily', hint: 'Style' },
  { answer: 'buildapc', decoys: ['pcmasterrace', 'pcbuilds', 'hardware'], emojiClue: '🖥️🔧💾', descClue: '"Will this GPU fit?" — the eternal question, answered daily', hint: 'Tech' },
  { answer: 'mildlyinfuriating', decoys: ['onejob', 'CrappyDesign', 'YouHadOneJob'], emojiClue: '🧃📦😤', descClue: 'The straw is inside the box. The box will not open', hint: 'Rage' },
  { answer: 'SkincareAddiction', decoys: ['30PlusSkinCare', 'beauty', 'MakeupAddiction'], emojiClue: '🧴✨🧖', descClue: 'Retinol, sunscreen and the holy grail routine', hint: 'Beauty' },
  { answer: 'Aquariums', decoys: ['PlantedTank', 'fishkeeping', 'ReefTank'], emojiClue: '🐠🌿🫧', descClue: 'Tiny glass oceans and the people who obsess over them', hint: 'Pets' },
  { answer: 'HermanCainAward', decoys: ['LeopardsAteMyFace', 'QAnonCasualties', 'inspection'], emojiClue: '🏅😷📎', descClue: 'Public anti-vax posts meeting their inevitable punchline', hint: 'Dark' },
  { answer: 'LeopardsAteMyFace', decoys: ['HermanCainAward', 'SelfAwarewolves', 'PublicFreakout'], emojiClue: '🐆😐🗳️', descClue: '"I voted to hurt others — why am I hurt?"', hint: 'Dark' },
  { answer: 'PublicFreakout', decoys: ['ActualFreakouts', 'ConfrontationCam', 'InsaneVideo'], emojiClue: '📣🏃📱', descClue: 'Complete meltdowns in public — stores, flights, streets', hint: 'Drama' },
  { answer: 'therewasanattempt', decoys: ['onejob', 'Unexpected', 'instant_regret'], emojiClue: '🏃💨❌', descClue: 'To hide this post from you. There was an attempt', hint: 'Fails' },
  { answer: 'mildlyinteresting', decoys: ['oddlysatisfying', 'Damnthatsinteresting', 'interestingasfuck'], emojiClue: '🥶🧊🚪', descClue: 'A frozen lock. A perfect icicle. Nothing more', hint: 'Images' },
  { answer: 'rarepuppers', decoys: ['dogsWithJobs', 'aww', 'PuppySmiles'], emojiClue: '🐶💜🦴', descClue: 'Pupper doing a heckin good job. Much wow', hint: 'Animals' },
  { answer: 'Tinder', decoys: ['dating_advice', 'Bumble', 'relationships'], emojiClue: '🔥❤️📱', descClue: 'Swipe stories, profile reviews and date disasters', hint: 'Life' },
  { answer: 'WTF', decoys: ['interestingasfuck', 'Damnthatsinteresting', 'BeAmazed'], emojiClue: '😵🌈🦑', descClue: 'Exactly what the name promises. Nothing more to say', hint: 'Weird' },
  { answer: 'natureismetal', decoys: ['EarthPorn', 'AnimalsBeingBros', 'nature'], emojiClue: '🦅🐺⛰️', descClue: 'Nature raw and unfiltered — hunts, survival, jaws', hint: 'Nature' },
  { answer: 'GetMotivated', decoys: ['DecidingToBeBetter', 'selfimprovement', 'motivation'], emojiClue: '📈💪🖼️', descClue: 'Posters, quotes and stories to kick your butt gently', hint: 'Self' },
  { answer: 'Justrolledintotheshop', decoys: ['DownBad', 'MechanicAdvice', 'Cartalk'], emojiClue: '🔧🚙😱', descClue: 'What the mechanic found will haunt you. Brakes? Never met them', hint: 'Cars' },
  { answer: 'Cartalk', decoys: ['MechanicAdvice', 'Justrolledintotheshop', 'cars'], emojiClue: '🎙️🚗❓', descClue: 'Clicking noise at 40mph — the classic mystery box', hint: 'Cars' },
  { answer: 'coffee', decoys: ['barista', 'espresso', 'tea'], emojiClue: '☕⚙️💧', descClue: 'Beans, grinds, pours and water chemistry debates', hint: 'Food' },
  { answer: 'tea', decoys: ['coffee', 'puer', 'teacups'], emojiClue: '🫖🍵🍃', descClue: 'The calmer hot-drink community. Gongfu sessions welcome', hint: 'Food' },
  { answer: 'bookclub', decoys: ['books', 'suggestmeabook', 'literature'], emojiClue: '📚👥🗓️', descClue: 'One book a month, endless hot takes in the threads', hint: 'Books' },
  { answer: 'writing', decoys: ['writers', 'writingprompts', 'selfpublish'], emojiClue: '✍️📝🖋️', descClue: 'Craft talk for people who torture imaginary people', hint: 'Books' },
  { answer: 'ArtFundamentals', decoys: ['learnart', 'ArtCrit', 'sketchbooks'], emojiClue: '🎨✏️📐', descClue: 'Perspective, form and value — the unglamorous basics', hint: 'Art' },
  { answer: 'guitarpedals', decoys: ['Guitar', 'guitaramps', 'WeAreTheMusicMakers'], emojiClue: '🎸🎛️⚡', descClue: 'Tone chasers, boutique clones and the eternal board rebuild', hint: 'Music' },
  { answer: 'synthesizers', decoys: ['modular', 'edmproduction', 'guitarpedals'], emojiClue: '🎹🎚️🌊', descClue: 'Knobs. So many knobs. Patch notes and jam videos', hint: 'Music' },
  { answer: '3Dprinting', decoys: ['ResinPrinting', 'functionalprint', 'ender3'], emojiClue: '🖨️🧲🪵', descClue: 'Benchy boats, failed supports and functional brackets', hint: 'Maker' },
  { answer: 'woodworking', decoys: ['DIY', 'handtools', 'turning'], emojiClue: '🪚🪵📐', descClue: 'Dovetails, grain matching and tool envy in sawdust form', hint: 'Maker' },
  { answer: 'Houseplants', decoys: ['plantclinic', 'succulents', 'monstera'], emojiClue: '🪴💧🌿', descClue: 'Yellow leaf panic posts and propagation victories', hint: 'Plants' },
  { answer: 'DIY', decoys: ['woodworking', 'HomeImprovement', 'somethingimade'], emojiClue: '🛠️🏠💥', descClue: 'I built a thing — feedback welcome, gas lines avoided', hint: 'Maker' },
  { answer: 'HomeImprovement', decoys: ['DIY', 'Plumbing', 'electricians'], emojiClue: '🏡🔩🪜', descClue: 'Is this load-bearing? Ask before you cut', hint: 'Maker' },
  { answer: 'Cooking', decoys: ['food', 'recipes', 'AskCulinary'], emojiClue: '🍳🥘🔪', descClue: 'General cooking talk — techniques, fails and wins', hint: 'Food' },
  { answer: 'AskCulinary', decoys: ['Cooking', 'foodscience', 'cookingforbeginners'], emojiClue: '👩‍🍳🧂❓', descClue: 'Why is my sauce broken? Professional-level answers only', hint: 'Food' },
  { answer: 'Pizza', decoys: ['PizzaCrimes', 'cooking', 'food'], emojiClue: '🍕🔥🫓', descClue: 'Dough hydration wars and oven tray debates', hint: 'Food' },
  { answer: 'PizzaCrimes', decoys: ['Pizza', 'foodcrimes', 'CozyPlaces'], emojiClue: '🍍🍕🚨', descClue: 'Pineapple and beyond — crimes documented for the record', hint: 'Food' },
  { answer: 'WallpaperEngine', decoys: ['wallpapers', 'pcmasterrace', 'unixporn'], emojiClue: '🖥️🌌🎛️', descClue: 'Animated desktop backgrounds for the maximally extra', hint: 'Tech' },
  { answer: 'unixporn', decoys: ['linux', 'wallpapers', 'commandline'], emojiClue: '🐧🖥️✨', descClue: 'Riced Linux setups — screenshot with dotfiles or it did not happen', hint: 'Tech' },
  { answer: 'cablefail', decoys: ['techsupportgore', 'cableporn', 'techsupportmacgyver'], emojiClue: '🔌🕸️😱', descClue: 'Spaghetti junctions that technically carry power', hint: 'Tech' },
  { answer: 'cableporn', decoys: ['cablefail', 'techsupportgore', 'DIY'], emojiClue: '🔌✨🧘', descClue: 'Perfect runs, velcro pride and immaculate server racks', hint: 'Tech' },
  { answer: 'UI_Design', decoys: ['web_design', 'UXDesign', 'Design'], emojiClue: '🎛️📱🎨', descClue: 'Interfaces critiqued with love — spacing, contrast, states', hint: 'Design' },
  { answer: 'Android', decoys: ['androidapps', 'GooglePixel', 'AndroidQuestions'], emojiClue: '🤖📱📲', descClue: 'The default Android stage — launches, updates, drama', hint: 'Tech' },
  { answer: 'iphone', decoys: ['AppleWatch', 'ios', 'apple'], emojiClue: '🍏📱🔋', descClue: 'Battery health anxiety and camera talk, daily', hint: 'Tech' },
  { answer: 'MacOS', decoys: ['apple', 'macapps', 'MacBookPro'], emojiClue: '🍎💻🎛️', descClue: 'Terminal tips, window managers and Mac quirks', hint: 'Tech' },
  { answer: 'Notion', decoys: ['ObsidianMD', 'productivity', 'NotionSo'], emojiClue: '📝🗂️🧩', descClue: 'Second-brain templates and dashboard obsession', hint: 'Productivity' },
  { answer: 'ObsidianMD', decoys: ['Notion', 'Zettelkasten', 'productivity'], emojiClue: '🖤🔗🧠', descClue: 'Linked notes, plugins and graph view pride', hint: 'Productivity' },
  { answer: 'productivity', decoys: ['Notion', 'getdisciplined', 'productivityapps'], emojiClue: '⏰✅🧠', descClue: 'Systems, apps and the myth of the perfect morning routine', hint: 'Productivity' },
  { answer: 'getdisciplined', decoys: ['productivity', 'DecidingToBeBetter', 'habits'], emojiClue: '🛡️🗓️💪', descClue: 'No hacks — just discipline talk and honest check-ins', hint: 'Self' },
  { answer: 'DecidingToBeBetter', decoys: ['getdisciplined', 'selfimprovement', 'offmychest'], emojiClue: '🌱📖❤️', descClue: 'Small steps, quit-day milestones and kind accountability', hint: 'Self' },
  { answer: 'stopdrinking', decoys: ['alcoholism', 'leaves', 'OpiatesRecovery'], emojiClue: '🚫🍺🌈', descClue: 'The friendliest counter on the internet — one day at a time', hint: 'Health' },
  { answer: 'leaves', decoys: ['stopsmoking', 'stopdrinking', 'vaping'], emojiClue: '🚭🌿🌬️', descClue: 'Quitting weed specifically — support without judgment', hint: 'Health' },
  { answer: 'running', decoys: ['C25K', 'marathon', 'AdvancedRunning'], emojiClue: '🏃👟⏱️', descClue: 'Couch to 5K and beyond — shoe talk included', hint: 'Fitness' },
  { answer: 'fitness', decoys: ['weightroom', 'loseit', 'bodyweightfitness'], emojiClue: '🏋️🥗📊', descClue: 'The default lifting stage — form checks and PPL splits', hint: 'Fitness' },
  { answer: 'loseit', decoys: ['fitness', '1200isplenty', 'CICO'], emojiClue: '⚖️📉🎉', descClue: 'Sustainable weight-loss journeys and NSV celebrations', hint: 'Fitness' },
  { answer: 'Frugal', decoys: ['personalfinance', 'EatCheapAndHealthy', 'BuyItForLife'], emojiClue: '🪙🧾📉', descClue: 'Spending less on purpose — deals, DIY and discipline', hint: 'Money' },
  { answer: 'BuyItForLife', decoys: ['Frugal', 'Skookum', 'RetailRepair'], emojiClue: '🔨♾️🧰', descClue: 'Things built so well they outlive their owners', hint: 'Money' },
  { answer: 'Skookum', decoys: ['BuyItForLife', 'Machinists', 'Tools'], emojiClue: '🔩💪⚙️', descClue: 'Choose the ones built like a brick — heavy machinery love', hint: 'Maker' },
  { answer: 'specializedtools', decoys: ['Skookum', 'Tools', 'Machinists'], emojiClue: '🧰🤔✨', descClue: 'A tool exists for that one weird task. Here it is', hint: 'Maker' },
  { answer: 'ThriftStoreHauls', decoys: ['DumpsterDiving', 'Flipping', 'CoolCollections'], emojiClue: '🛒🏺💰', descClue: 'Secondhand treasure hunts — the finds and the prices', hint: 'Deals' },
  { answer: 'Flipping', decoys: ['ThriftStoreHauls', 'GarageSaleFinds', 'FulfillmentByAmazon'], emojiClue: '💸📦📈', descClue: 'Buy low, sell high — the side-hustle warehouse talk', hint: 'Money' },
  { answer: 'beermoney', decoys: ['WorkOnline', 'passive_income', 'signups'], emojiClue: '🍺💵📱', descClue: 'Small online earnings — surveys, gigs and cashback talk', hint: 'Money' },
  { answer: 'fire', decoys: ['financialindependence', 'personalfinance', 'FIRE_Ind'], emojiClue: '🔥🏖️📊', descClue: 'Financial independence math — savings rates and SWRs', hint: 'Money' },
  { answer: 'OutOfTheLoop', decoys: ['explainlikeimfive', 'NoStupidQuestions', 'AskReddit'], emojiClue: '🔄❓📰', descClue: 'What is the deal with [current thing]? Explained kindly', hint: 'Knowledge' },
  { answer: 'NoStupidQuestions', decoys: ['AskReddit', 'TooAfraidToAsk', 'CasualConversation'], emojiClue: '🙋💭🚫', descClue: 'No judgment zone for the questions you Google at 2am', hint: 'Q&A' },
  { answer: 'TooAfraidToAsk', decoys: ['NoStupidQuestions', 'offmychest', 'socialskills'], emojiClue: '🙈💬😳', descClue: 'The question is too embarrassing for Google — ask here', hint: 'Q&A' },
  { answer: 'interestingasfuck', decoys: ['Damnthatsinteresting', 'nextfuckinglevel', 'BeAmazed'], emojiClue: '🌊🌋🛰️', descClue: 'Footage so good it breaks the algorithm', hint: 'Amazing' },
  { answer: 'Damnthatsinteresting', decoys: ['interestingasfuck', 'oddlysatisfying', 'BeAmazed'], emojiClue: '🧲🪨🤯', descClue: 'Facts and footage that stop the scroll instantly', hint: 'Amazing' },
];

// Deterministic daily selection: seed from UTC date, pick 5 spread across the bank
export function getDailyPuzzleIndices(dateKey: string, count = 5): number[] {
  let seed = 2166136261;
  for (let i = 0; i < dateKey.length; i++) {
    seed ^= dateKey.charCodeAt(i);
    seed = Math.imul(seed, 16777619);
  }
  const rng = () => {
    seed ^= seed << 13;
    seed ^= seed >>> 17;
    seed ^= seed << 5;
    return Math.abs(seed % 100000) / 100000;
  };
  const used = new Set<number>();
  const out: number[] = [];
  while (out.length < count && used.size < PUZZLES.length) {
    const idx = Math.floor(rng() * PUZZLES.length) % PUZZLES.length;
    if (!used.has(idx)) {
      used.add(idx);
      out.push(idx);
    }
  }
  return out;
}

export function buildOptions(p: Puzzle): string[] {
  const opts = [p.answer, ...p.decoys];
  // deterministic shuffle
  let s = 0;
  for (let i = 0; i < p.answer.length; i++) s += p.answer.charCodeAt(i);
  for (let i = opts.length - 1; i > 0; i--) {
    const j = (s * (i + 7)) % (i + 1);
    const tmp = opts[i]!;
    opts[i] = opts[j]!;
    opts[j] = tmp;
  }
  return opts as string[];
}
