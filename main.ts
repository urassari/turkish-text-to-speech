//% color="#AA278D" weight=100
namespace turkishspeech {
    //% block
    export function say(yazi: string, note: number) {
        for (let indeks = 0; indeks <= yazi.length - 1; indeks++) {
            if (yazi.charAt(indeks) == "b") {
                music.rest(music.beat(BeatFraction.Half))
            }
            if (yazi.charAt(indeks) == " ") {
                music.rest(music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == ".") {
                music.rest(music.beat(BeatFraction.Double))
            }
            if (yazi.charAt(indeks) == ",") {
                music.rest(music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "r") {
                for (let index = 0; index < 4; index++) {
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                }
            }
            if (yazi.charAt(indeks) == "t") {
                music.setVolume(68)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(140)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(193)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(255)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
            }
            if (yazi.charAt(indeks) == "i") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "e") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "h") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(200, 300), music.beat(BeatFraction.Eighth))
                    music.playTone(randint(200, 300), music.beat(BeatFraction.Sixteenth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "ç") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "c") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "d") {
                music.setVolume(68)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(140)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(193)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(255)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
            }
            if (yazi.charAt(indeks) == "ş") {
                music.setTempo(9999)
                for (let index = 0; index < 200; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "s") {
                music.setTempo(9999)
                for (let index = 0; index < 200; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "z") {
                music.setTempo(9999)
                for (let index = 0; index < 200; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "p") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "l") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    music.playTone(note, music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "f") {
                music.setTempo(9999)
                for (let index = 0; index < 200; index++) {
                    music.playTone(0, music.beat(BeatFraction.Eighth))
                    music.playTone(randint(200, 300), music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "k") {
                music.setVolume(68)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(140)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(193)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(255)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
            }
            if (yazi.charAt(indeks) == "m") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "n") {
                music.setTempo(9999)
                for (let index = 0; index < 100; index++) {
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.playTone(0, music.beat(BeatFraction.Sixteenth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "j") {
                music.setTempo(9999)
                for (let index = 0; index < 200; index++) {
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.playTone(0, music.beat(BeatFraction.Eighth))
                }
                music.setTempo(400)
            }
            if (yazi.charAt(indeks) == "g") {
                music.setVolume(68)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(140)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(193)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
                music.setVolume(255)
                music.playTone(note, music.beat(BeatFraction.Sixteenth))
            }
            if (yazi.charAt(indeks) == "a") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "u") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "ü") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "ğ") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "ı") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "v") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "y") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
            if (yazi.charAt(indeks) == "o") {
                music.playTone(note, music.beat(BeatFraction.Whole))
            }
        }
    }
}