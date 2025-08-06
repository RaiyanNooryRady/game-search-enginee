interface Game {
    id: number;
    url: string;
    title: string;
    description: string;
    releaseDate: string;
}

const games: Game[] = [
    {
        id: 1,
        url: "https://picsum.photos/id/1/300/400",
        title: "Cyberpunk 2077",
        description: "An open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
        releaseDate: "2020-12-10"
    },
    {
        id: 2,
        url: "https://picsum.photos/id/2/300/400",
        title: "The Witcher 3: Wild Hunt",
        description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        releaseDate: "2015-05-19"
    },
    {
        id: 3,
        url: "https://picsum.photos/id/3/300/400",
        title: "Red Dead Redemption 2",
        description: "An epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world will also provide the foundation for a brand new online multiplayer experience.",
        releaseDate: "2018-10-26"
    },
    {
        id: 4,
        url: "https://picsum.photos/id/4/300/400",
        title: "God of War",
        description: "From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore.",
        releaseDate: "2018-04-20"
    },
    {
        id: 5,
        url: "https://picsum.photos/id/5/300/400",
        title: "Elden Ring",
        description: "An action RPG set in a vast fantasy world. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
        releaseDate: "2022-02-25"
    },
    {
        id: 6,
        url: "https://picsum.photos/id/6/300/400",
        title: "Spider-Man: Miles Morales",
        description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        releaseDate: "2020-11-12"
    },
    {
        id: 7,
        url: "https://picsum.photos/id/7/300/400",
        title: "Horizon Zero Dawn",
        description: "Experience Aloy's legendary quest to unravel the mysteries of a world ruled by deadly Machines.",
        releaseDate: "2017-02-28"
    },
    {
        id: 8,
        url: "https://picsum.photos/id/8/300/400",
        title: "Assassin's Creed Valhalla",
        description: "Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies.",
        releaseDate: "2020-11-10"
    }
];

export default games;