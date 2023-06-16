namespace TurkishSpeech {
    /**
     * Say something in turkish
     */ 
    //% blockId=somethingidk
    //% block= "saySomething %yazı %note"
    //% note.min=0 note.max=99999
    export function saySomething(yazı: string, note: number): void {

        
        for (let indeks = 0; indeks <= yazı.length - 1; indeks++) {
                if (yazı.charAt(indeks) == "b") {
                    music.rest(music.beat(BeatFraction.Half))
                }
                if (yazı.charAt(indeks) == " ") {
                    music.rest(music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == ".") {
                    music.rest(music.beat(BeatFraction.Double))
                }
                if (yazı.charAt(indeks) == ",") {
                    music.rest(music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "r") {
                    for (let index = 0; index < 4; index++) {
                        music.playTone(note, music.beat(BeatFraction.Sixteenth))
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    }
                }
                if (yazı.charAt(indeks) == "t") {
                    music.setVolume(68)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(140)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(193)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(255)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                }
                if (yazı.charAt(indeks) == "i") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "e") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "h") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(200, 300), music.beat(BeatFraction.Eighth))
                        music.playTone(randint(200, 300), music.beat(BeatFraction.Sixteenth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "ç") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "c") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "d") {
                    music.setVolume(68)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(140)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(193)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(255)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                }
                if (yazı.charAt(indeks) == "ş") {
                    music.setTempo(9999)
                    for (let index = 0; index < 200; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "s") {
                    music.setTempo(9999)
                    for (let index = 0; index < 200; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "z") {
                    music.setTempo(9999)
                    for (let index = 0; index < 200; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "p") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(randint(1000, 1500), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "l") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                        music.playTone(note, music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "f") {
                    music.setTempo(9999)
                    for (let index = 0; index < 200; index++) {
                        music.playTone(0, music.beat(BeatFraction.Eighth))
                        music.playTone(randint(200, 300), music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "k") {
                    music.setVolume(68)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(140)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(193)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(255)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                }
                if (yazı.charAt(indeks) == "m") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(note, music.beat(BeatFraction.Sixteenth))
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "n") {
                    music.setTempo(9999)
                    for (let index = 0; index < 100; index++) {
                        music.playTone(note, music.beat(BeatFraction.Sixteenth))
                        music.playTone(0, music.beat(BeatFraction.Sixteenth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "j") {
                    music.setTempo(9999)
                    for (let index = 0; index < 200; index++) {
                        music.playTone(note, music.beat(BeatFraction.Sixteenth))
                        music.playTone(0, music.beat(BeatFraction.Eighth))
                    }
                    music.setTempo(400)
                }
                if (yazı.charAt(indeks) == "g") {
                    music.setVolume(68)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(140)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(193)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                    music.setVolume(255)
                    music.playTone(note, music.beat(BeatFraction.Sixteenth))
                }
                if (yazı.charAt(indeks) == "a") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "u") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "ü") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "ğ") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "ı") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "v") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "y") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
                if (yazı.charAt(indeks) == "o") {
                    music.playTone(note, music.beat(BeatFraction.Whole))
                }
            }
    
    }
}
