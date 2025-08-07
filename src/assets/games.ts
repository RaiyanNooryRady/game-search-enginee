interface Game {
    id: number;
    game_url: string;
    title: string;
    short_description: string;
    release_date: string;
}

const games: Game[] = [
    {
        id: 1,
        game_url: "https://picsum.photos/id/1/300/400",
        title: "Cyberpunk 2077",
        short_description: "An open-world action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
        release_date: "2020-12-10"
    },
    {
        id: 2,
        game_url: "https://picsum.photos/id/2/300/400",
        title: "The Witcher 3: Wild Hunt",
        short_description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        release_date: "2015-05-19"
    },
    {
        id: 3,
        game_url: "https://picsum.photos/id/3/300/400",
        title: "Red Dead Redemption 2",
        short_description: "An epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world will also provide the foundation for a brand new online multiplayer experience.",
        release_date: "2018-10-26"
    },
    {
        id: 4,
        game_url: "https://picsum.photos/id/4/300/400",
        title: "God of War",
        short_description: "From the marble and columns of ornate Olympus to the gritty forests, mountains, and caves of Pre-Viking Norse lore.",
        release_date: "2018-04-20"
    },
    {
        id: 5,
        game_url: "https://picsum.photos/id/5/300/400",
        title: "Elden Ring",
        short_description: "An action RPG set in a vast fantasy world. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring.",
        release_date: "2022-02-25"
    },
    {
        id: 6,
        game_url: "https://picsum.photos/id/6/300/400",
        title: "Spider-Man: Miles Morales",
        short_description: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        release_date: "2020-11-12"
    },
    {
        id: 7,
        game_url: "https://picsum.photos/id/7/300/400",
        title: "Horizon Zero Dawn",
        short_description: "Experience Aloy's legendary quest to unravel the mysteries of a world ruled by deadly Machines.",
        release_date: "2017-02-28"
    },
    {
        id: 8,
        game_url: "https://picsum.photos/id/8/300/400",
        title: "Assassin's Creed Valhalla",
        short_description: "Become Eivor, a legendary Viking raider on a quest for glory. Explore England's Dark Ages as you raid your enemies.",
        release_date: "2020-11-10"
    },
    {
        id: 9,
        game_url: "https://picsum.photos/id/9/300/400",
        title: "The Last of Us",
        short_description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        release_date: "2013-06-14"
    },
    {
        id: 10,
        game_url: "https://picsum.photos/id/10/300/400",
        title: "The Lost of Us",
        short_description: "A story-driven open world RPG set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        release_date: "2013-06-14"
    }
    
];

export default games;