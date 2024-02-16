const AbriviationText = (text, quantityChar) => {
    if(text.length === 0) {
        return 'К сожалению, мы ещё не написали описание для этого персонажа :)'
    }

    if (text.length < quantityChar) {
        return text;
    };

    return text.slice(0, quantityChar - 3) + '...';
}

export default AbriviationText;