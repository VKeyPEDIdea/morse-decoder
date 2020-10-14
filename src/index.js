const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrayExpr = divide(expr, 10);
    let string = '';

    arrayExpr.forEach(symbol => {
        if (symbol == '**********') {
            symbol = ' ';
            string += symbol;
        } else {
            let arraySymbol = divide(symbol, 2);
            arraySymbol = prepared(arraySymbol);
            symbol = getMorzeSymbol(arraySymbol);
    
            symbol = MORSE_TABLE[symbol];
            string += symbol;
        }
    });

    return string;
}

function getMorzeSymbol(array) {
    let string = '';

    array.forEach(pair => {
        switch(pair) {
            case '10':
                string += '.';
                break;
            case '11':
                string += '-';
                break;
        }
    });

    return string;
}

function prepared(array) {
    array.forEach(pair => {
        if (pair == '00') {
            array.shift();
        }
    });

    return array;
}

function divide(str, count) {
    let piece;
    let array = [];
    
    for (let i = 0, j = count; j <= str.length; i + count) {
        piece = str.slice(i, j);
        array.push(piece);
        piece = '';
        i += count;
        j += count;
    }
    
    // console.log(array);
    return array;
}

module.exports = {
    decode
}