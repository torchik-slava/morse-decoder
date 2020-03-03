const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	return expr.split('**********')																//split into words
		.map(item => item.match(/.{10}/g)													  //split into letters 
			.map(item => item.match(/1.{1}/g)													//split into parts of letters & remove zeros
				.map(item => item == '11' ? item = '-' : item = '.')
				.join('')																								// join into letters
			)
			.map(item => MORSE_TABLE[item])
			.join('')																									//join into words
		)
		.join(' ')																									//join into string/phrase
	;
}

module.exports = {
    decode
}