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
