const playstation = "../assets/logo--playstation-fill.svg";
const xbox = "../assets/logo--xbox-fill.svg";
const nintendoSwitch = "../assets/logo--switch-fill.svg";
const windows = "../assets/logo--windows-fill.svg";

const gameData = [
    {
        id: "0",
        title: "Street Fighter 2",
        image: "./img/sf2-special-champion-edition.webp",
        platforms: [
            playstation,
            xbox,
            nintendoSwitch,
            windows
        ],
        isFavourite: "false",
    },
    {
        id: "1",
        title: "Guilty Gear Xrd",
        image: "./img/GGXrd-JP-Box-Art_001.jpg",
        platforms: [
            playstation,
        ],
        isFavourite: "false",
    },
    {
        id: "2",
        title: "Dead or Alive 4",
        image: "./img/dead-or-alive-xbox-360.jpeg",
        platforms: [
            xbox,
        ],
        isFavourite: "false",
    },
    {
        id: "3",
        title: "Super Smash Bros Ultimate",
        image: "./img/super-smash-bros-nintendo-switch.jpg",
        platforms: [
            nintendoSwitch
        ],
        isFavourite: "false",
    },
]

export default gameData;