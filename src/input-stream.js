class InputStream {
  constructor(input) {
    if (typeof input !== 'undefined') {
      this.originalInput = input;
      /** Unchangable originalInput
       * NOTE: No need to return Object.freeze(). I just wanted to have a better
       * programming style.
       */
      this.originalInput = Object.freeze(this.originalInput);
      this.input = this.originalInput;
      this.pos = 0;
      this.line = 1;
      this.col = 0;
    } else {
      throw new Error('Please specify an input inside the constructor method.');
    }
  }

  /**
   * Devours input and returns the next character from input.
   * @return {Char} [Next character]
   */
  next() {
    const char = this.input.charAt(this.pos + 1);
    if (char === '\n') {
      this.line += 1;
      this.col = 0;
    } else {
      this.col += 1;
    }
    return char;
  }

  /**
   * Returns the next character in input stream without devouring it.
   * @return {Char} [Next character]
   */
  peek() {
    return this.input.charAt(this.pos);
  }

  /**
   * Returns true if the current character is EOF.
   * @return {Boolean} EOF?
   */
  eof() {
    return this.peek() === '';
  }

  /**
   * Throws error message.
   * @param  {String} message Error message
   * @return {Void}         None
   */
  $error(message) {
    throw new Error(`${message} => line: ${this.line}, column: ${this.col}`);
  }
}

export default InputStream;
