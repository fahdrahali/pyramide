let param = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");



if (param <= 25)
    for (let i = 1; i <= param; i++) {
        let message = [""];
        for (let j = 1; j <= i; j++) {
            message += ["     " + "#" + "     "];

        }

        console.log(message);
        message = [""];
    }