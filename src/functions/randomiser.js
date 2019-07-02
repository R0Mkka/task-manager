export default {
    generate: function() {
        const bigNumber = new Date().getDate();
        const randomNumber = (bigNumber * Math.random())
            .toFixed(22).split('').filter(char => char !== '.').join('');

        return Math.random() >= 0.5 ? randomNumber : randomNumber.split('').reverse().join('');
    }
}