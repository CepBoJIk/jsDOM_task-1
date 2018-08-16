class TextRetranslator {

    constructor(textarea, preview) {
        this.textarea = textarea;
        this.preview = preview;

        this.textarea.addEventListener('input', this.updatePreview.bind(this));
    }

    updatePreview() {
        let value = this.textarea.value;

        value = value.replace(headerPattern, '<h1>$1</h1>');
        value = value.replace(boldPattern, '<b>$1</b>');

        this.preview.innerHTML = value;
    }


}

const headerPattern = /#([^\n]+\n)/gi;
const boldPattern = /\*\*(.+?)\*\*/gi

let textarea = document.querySelector('.text-retranslator__textarea');
let result = document.querySelector('.text-retranslator__result');

let textRetranslator = new TextRetranslator(textarea, result);
