const pages = [
    { display: 'All in My Head', name: 'all in my head', artist: 'Fifth Harmony', key: 'C-Minor'},
    { display: 'Bailando', name: 'bailando', artist: 'Enrique Iglesias', key: 'G-Major'},
    { display: 'Bleeding Love', name: 'bleeding love', artist: 'Leona Lewis', key: 'F-Major'},
    { display: 'Booty', name: 'booty', artist: 'Jennifer Lopez', key: 'C-Major'},
    { display: 'Break Free', name: 'break free', artist: 'Ariana Grande', key: 'G-Minor'},
    { display: 'Chained to the Rhythm', name: 'chained to the rhythm', artist: 'Katy Perry', key: 'C-Major'},
    { display: 'Cheap Thrills', name: 'cheap thrills', artist: 'Sia', key: 'F#-Major'},
    { display: 'CoCo', name: 'coco', artist: 'O.T. Genasis', key: 'G#-Major'},
    { display: 'Cold Water', name: 'cold water', artist: 'Major Lazer', key: 'F#-Minor'},
    { display: 'Cool for the Summer', name: 'cool for the summer', artist: 'Demi Lovato', key: 'F-Minor'},
    { display: 'Don\'t Cha', name: 'don\'t cha', artist: 'Pussycat Dolls', key: 'C#-Major'},
    { display: 'Don\'t Wanna Know', name: 'don\'t wanna know', artist: 'Maroon 5', key: 'G-Major'},
    { display: 'Drop It Like It\'s Hot', name: 'drop it like it\'s hot', artist: 'Snoop Dogg', key: 'C#-Major'},
    { display: 'Evacuate the Dance Floor', name: 'evacuate the dance floor', artist: 'Cascada', key: 'F#-Minor'},
    { display: 'Fancy', name: 'fancy', artist: 'Iggy Azalea', key: 'A#-Minor'},
    { display: 'Gangnam Style', name: 'gangnam style', artist: 'Psy', key: 'B-Minor'},
    { display: 'Green Light', name: 'green light', artist: 'Lorde', key: 'D-Major'},
    { display: 'Hands to Myself', name: 'hands to myself', artist: 'Selena Gomez', key: 'F-Minor'},
    { display: 'Happy', name: 'happy', artist: 'Pharell Williams', key: 'F-Minor'},
    { display: 'Heathens', name: 'heathens', artist: 'Twenty-One Pilots', key: 'E-Minor'},
    { display: 'Hey Mama', name: 'hey mama', artist: 'David Guetta', key: 'A-Major'},
    { display: 'In the End', name: 'in the end', artist: 'Linkin Park', key: 'D#-Minor'},
    { display: 'Into You', name: 'into you', artist: 'Ariana Grande', key: 'A-Major'},
    { display: 'It Ain\'t Me', name: 'it ain\'t me', artist: 'Kygo & Selena Gomez', key: 'C-Major'},
    { display: 'Kiss Kiss', name: 'kiss kiss', artist: 'Chris Brown', key: 'A#-Minor'},
    { display: 'Let Me Love You', name: 'let me love you', artist: 'DJ Snake', key: 'G#-Major'},
    { display: 'Love Lockdown', name: 'love lockdown', artist: 'Kanye West', key: 'C#-Minor'},
    { display: 'Love More', name: 'love more', artist: 'Chris Brown', key: 'C#-Major'},
    { display: 'Low', name: 'low', artist: 'Flo Rida', key: 'A#-Minor'},
    { display: 'Move Along', name: 'move along', artist: 'The All-American Rejects', key: 'D#-Major'},
    { display: 'Moves Like Jagger', name: 'moves like jagger', artist: 'Maroon 5', key: 'B-Minor'},
    { display: 'My House', name: 'my house', artist: 'Flo Rida', key: 'G-Minor'},
    { display: 'One Last Time', name: 'one last time', artist: 'Ariana Grande', key: 'G#-Major'},
    { display: 'Paparazzi', name: 'paparazzi', artist: 'Lady Gaga', key: 'F-Minor'},
    { display: 'Pillowtalk', name: 'pillowtalk', artist: 'Zayn', key: 'B-Major'},
    { display: 'Pills N Potions', name: 'pills n potions', artist: 'Nicki Minaj', key: 'D-Major'},
    { display: 'Problem', name: 'problem', artist: 'Ariana Grande', key: 'C#-Minor'},
    { display: 'Ride', name: 'ride', artist: 'Twenty-One Pilots', key: 'F#-Major'},
    { display: 'Rockabye', name: 'rockabye', artist: 'Clean Bandit', key: 'A-Minor'},
    { display: 'Rolling in the Deep', name: 'rolling in the deep', artist: 'Adele', key: 'G#-Major'},
    { display: 'Roses', name: 'roses', artist: 'Chainsmokers', key: 'E-Major'},
    { display: 'Sexy Love', name: 'sexy love', artist: 'Ne-Yo', key: 'G#-Major'},
    { display: 'Shape of You', name: 'shape of you', artist: 'Ed Sheeran', key: 'C#-Minor'},
    { display: 'Stressed Out', name: 'Stressed Out', artist: 'Twenty-One Pilots', key: 'E-Minor'},
    { display: 'Swalla', name: 'swalla', artist: 'Jason Derulo', key: 'C#-Major'},
    { display: 'Talk Dirty', name: 'talk dirty', artist: 'Jason Derulo', key: 'F#-Major'},
    { display: 'The Greatest', name: 'the greatest', artist: 'Sia', key: 'A#-Minor'},
    { display: 'The Real Slim Shady', name: 'the real slim shady', artist: 'Eminem', key: 'F-Minor'},
    { display: 'The Way I Are', name: 'the way i are', artist: 'Timbaland', key: 'D#-Minor'},
    { display: 'There\'s Nothing Holdin\' Me Back', name: 'there\'s nothing holdin\' me back', artist: 'Shawn Mendes', key: 'B-Minor'},
    { display: 'Truffle Butter', name: 'truffle butter', artist: 'Nicki Minaj', key: 'D-Major'},
    { display: 'Want to Want Me', name: 'want to want me', artist: 'Jason Derulo', key: 'C-Minor'},
    { display: 'Work Bitch', name: 'work bitch', artist: 'Britney Spears', key: 'A-Major'},
    { display: 'Work From Home', name: 'work from home', artist: 'Fifth Harmony', key: 'G#-Major'},
    { display: 'Worth It', name: 'worth it', artist: 'Fifth Harmony', key: 'G#-Major'},
]

const list = document.getElementById('list');

function setList(group) {
    //clearList();
    if (group.length === 0) {
        setNoResults();
    } else {
        const htmlString = group.map((element) => {
            return `<li><h4>${element.display} by ${element.artist}</h4></li>`
        }).join('\n');
        list.innerHTML = htmlString
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

function setNoResults() {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else if (value.includes(searchTerm)) {
        return 0;
    }
}
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(pages.filter(page => {
            return page.name.includes(value) //|| page.subtitles.includes(value) || page.people.includes(value)
        }).sort((pageA, pageB) => {
            return getRelevancy(pageB.name, value) - getRelevancy(pageA.name, value);
        }));
    } else {
        clearList();
    }
});