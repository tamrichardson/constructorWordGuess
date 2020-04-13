function Letter() {
    this.letterSpace = " _ ";
    this.guessed = true;
    this.displayLetter = function () {
        if (this.guessed === true) {
            console.log(this.guessed);
        } else {
            (this.guessed === false)
            console.log("try again");
        }
    };
}