const u = "./assets/icon--up.svg";
const d = "./assets/icon--down.svg";
const l = "./assets/icon--left.svg";
const r = "./assets/icon--right.svg";
const uR = "./assets/icon--up-right.svg";
const dR = "./assets/icon--down-right.svg";
const uL = "./assets/icon--up-left.svg";
const dL = "./assets/icon--down-left.svg";
const s = "./assets/icon--special.svg";

const data = [
    {
        id: 0,
        characterBio: {
            name: "Ryu",
            origin: "Japan",
            bio: "As a young boy, Ryu was an orphan and had no memories of his parents. He is adopted and raised by Gouken in a secluded dojo, and is intensely trained in Gouken's style of martial arts. A few years later, Gouken started training his best friend's son, Ken Masters, at the dojo. Ryu and Ken quickly became good friends and trained together daily. Still to this day, Ryu looks to Gouken as a father, and considers Ken to be his best friend and surrogate brother. When Ryu turned 23, Gouken believes that Ryu's training is complete, and Ryu leaves the dojo. Ryu wants to test and hone his martial skills, and set out to challenge the best fighters around the world."
        },
        moves: {
            special: [
                {
                    name: "Shoryuken",
                    combo: [r, dL, r, s],
                    animation: "./img/gif--combo-example--shoryuken.webp"
                },
                {
                    name: "Hadouken",
                    combo: [r, dR, d, dL, l, s],
                    animation: "./img/gif--combo-example--hadouken.gif"
                }
            ],
            light: [
                {
                    name: "Shoryuken",
                    combo: ["r", "d-l", "r", "s"],
                    animation: "./img/gif--combo-example--hadouken.webp"
                },
                {
                    name: "Hadouken",
                    combo: ["d", "d-r", "r", "s"],
                    animation: ""
                }
            ],
            medium: [
                {
                    name: "Shoryuken",
                    combo: ["r", "d-l", "r", "s"],
                    animation: "./img/gif--combo-example--hadouken.webp"
                },
                {
                    name: "Hadouken",
                    combo: ["d", "d-r", "r", "s"],
                    animation: ""
                }
            ],
            heavy: [
                {
                    name: "Shoryuken",
                    combo: ["r", "d-l", "r", "s"],
                    animation: "./img/gif--combo-example--hadouken.webp"
                },
                {
                    name: "Hadouken",
                    combo: ["d", "d-r", "r", "s"],
                    animation: ""
                }
            ],
        }
    }
]

export default data;