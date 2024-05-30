const u = "./assets/icon--up.svg";
const d = "./assets/icon--down.svg";
const l = "./assets/icon--left.svg";
const r = "./assets/icon--right.svg";
const uR = "./assets/icon--up-right.svg";
const dR = "./assets/icon--down-right.svg";
const uL = "./assets/icon--up-left.svg";
const dL = "./assets/icon--down-left.svg";
const sp = "./assets/icon--special.svg";
const lt = "./assets/icon--light.svg";
const md = "./assets/icon--medium.svg";
const hv = "./assets/icon--heavy.svg";

const data = [
    {
        id: 0,
        characterBio: {
            name: "Ryu",
            origin: "Japan",
            flag: "./img/flag--japan.webp",
            bio: "As a young boy, Ryu was an orphan and had no memories of his parents. He is adopted and raised by Gouken in a secluded dojo, and is intensely trained in Gouken's style of martial arts. A few years later, Gouken started training his best friend's son, Ken Masters, at the dojo. Ryu and Ken quickly became good friends and trained together daily. Still to this day, Ryu looks to Gouken as a father, and considers Ken to be his best friend and surrogate brother. When Ryu turned 23, Gouken believes that Ryu's training is complete, and Ryu leaves the dojo. Ryu wants to test and hone his martial skills, and set out to challenge the best fighters around the world."
        },
        moves: {
            special: [
                {
                    name: "Shoryuken",
                    combo: [r, dL, r, sp],
                    animation: "./img/ryu-sf2-shoryuken.gif"
                },
                {
                    name: "Hadouken",
                    combo: [r, dR, d, dL, l, sp],
                    animation: "./img/gif--combo-example--hadouken.gif"
                }
            ],
            light: [
                {
                    name: "Jab Punch",
                    combo: [r, lt],
                    animation: "./img/ryu-sf2-a1.gif"
                },
                {
                    name: "Reverse Punch",
                    combo: [l, r, lt],
                    animation: "./img/ryu-sf2-a2.gif"
                }
            ],
            medium: [
                {
                    name: "Hurricane Kick",
                    combo: [r, dR, d, dL, l, md],
                    animation: "./img/gif--combo-example--hurricane-kick.gif"
                },
                {
                    name: "Spinning Back Kick",
                    combo: [l, r, md],
                    animation: "./img/ryu-sf2-a5.gif"
                }
            ],
            heavy: [
                {
                    name: "Uppercut",
                    combo: [d, u, hv],
                    animation: "./img/ryu-sf2-c3.gif"
                },
                {
                    name: "Spinning Low Kick",
                    combo: [dL, dL, hv],
                    animation: "./img/ryu-sf2-c6.gif"
                }
            ],
        }
    }
]

export default data;