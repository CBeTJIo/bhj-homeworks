class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.timer');

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.setNewWord(); 
  }

  registerEvents() {
    document.addEventListener('keydown', (event) => {
      if (!this.currentSymbol) return;
      
      const expectedChar = this.currentSymbol.textContent.toLowerCase();
      const pressedChar = event.key.toLowerCase();
      
      if (pressedChar === expectedChar) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  startTimer(wordLength) {
    this.stopTimer();
    this.timeLeft = wordLength;
    this.updateTimer();
    
    this.timerId = setInterval(() => {
      this.timeLeft--;
      this.updateTimer();
      
      if (this.timeLeft <= 0) {
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  updateTimer() {
    this.timerElement.textContent = `Осталось времени: ${this.timeLeft} сек`;
    this.timerElement.style.color = this.timeLeft <= 3 ? 'red' : 'black';
  }

  success() {
    this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    this.stopTimer();
    const wins = ++this.winsElement.textContent;
    if (wins === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    this.stopTimer();
    const losses = ++this.lossElement.textContent;
    if (losses === 5) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    this.currentWord = this.getWord();
    this.renderWord(this.currentWord);
    this.startTimer(this.currentWord.length);
  }

  getWord() {
    const words = [
      'bob', 'awesome', 'netology', 'hello', 'kitty', 'rock', 'youtube', 'popcorn', 'cinema', 'love','javascript', 'programming', 'keyboard', 'challenge'
    ];
    return words[Math.floor(Math.random() * words.length)];
  }

  renderWord(word) {
    const html = [...word]
      .map((s, i) => 
        `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));

//гит не тупи