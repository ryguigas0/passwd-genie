let characterTypes = {
    upperCase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" "),
    lowerCase: "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" "),
    numbers: "0 1 2 3 4 5 6 7 8 9".split(" "),
    symbols: `{ } [ ] ( ) / ' " ~ , ; : . < > + = -`.split(" ")
}

let passwordDisplay = document.getElementById("password")
let generateButton = document.getElementById("generate-button")

function generatePassword() {
    let opts = {}
    let result = ""

    Array.from(document.querySelectorAll("input")).map(opt => {
        opts[opt.id] = opt.valueAsNumber || (opt.checked ?? true)
    })

    passwordDisplay.textContent = "Generating password..."

    let selectedTypes = Object.keys(opts)
        .map(key => opts[key] ? characterTypes[key] : undefined)
        .filter(types => types != undefined)

    for (let i = 0; i < opts.length; i++) {
        let randChacterTypeindex = Math.floor(Math.random() * selectedTypes.length)
        let randCharacterType = selectedTypes[randChacterTypeindex]
        let randCharacterIndex = Math.floor(Math.random() * randCharacterType.length)
        let randCharacter = randCharacterType[randCharacterIndex]
        result += randCharacter
    }

    passwordDisplay.value = result
    let fakeEvent = {
        target: {
            value: result
        }
    }
    checkStrength(fakeEvent)
}

generateButton.onclick = generatePassword