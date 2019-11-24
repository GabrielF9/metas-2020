const phrases = ['Celebre o que você deseja ver mais. - Tom Peters',
  'O começo é a parte mais importante do trabalho. - Platão',
  'Dê um salto de fé e comece este maravilhoso ano novo acreditando. - Sarah Ban Breathnach',
  'Sempre parece impossível até que esteja pronto. - Nelson Mandela',
  'Gosto mais dos sonhos do futuro do que da história do passado. - Thomas Jefferson',
  'Você não precisa ver a escada inteira, basta dar o primeiro passo. - Martin Luther King',
  'O ano novo está diante de nós, como um capítulo de um livro, esperando para ser escrito. - Melody Beattie',
  'Seja o que for que você tem medo de fazer, faça. Cometa seus erros, no próximo ano e para sempre. - Neil Gaiman',
  'Você nunca é velho demais para definir outra meta ou sonhar um novo sonho. - CS Lewis',
  'O fim do ano não é um fim nem um começo, mas uma continuação. - Hal Borland'
];

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('object').style.position = 'relative';
    document.querySelector('object').style.animation = 'fromright 1s ease-in-out';
    setTimeout(() => {
      document.getElementById('goals').style.display = 'flex';
    }, 1000)
  }, 1005);

  const newYear = new Date(2020, 0, 1).getTime();

  let timer = setInterval(() => {
    let now = new Date().getTime();
    let distance = newYear - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `<span>${days + " dias " + hours + "h:" + minutes + "m:" + seconds + "s"}<span>`;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = "EXPIRED";
    }
  }, 1000);


  let counter = 0;
  let phraseDiv = document.getElementById('phrase');

  let passPhrase = setInterval(() => {
    if (counter == phrases.length - 1) {
      counter = 0;
    } else {
      counter += 1;
    }

    phraseDiv.innerHTML = `<span><strong>"</strong>${phrases[counter].split(' - ')[0]}<strong>"</strong><br><strong>- ${phrases[counter].split(' - ')[1]}</strong></span>`;
  }, 5000);

  phraseDiv.innerHTML = `<span><strong>"</strong>${phrases[counter].split(' - ')[0]}<strong>"</strong><br><strong>- ${phrases[counter].split(' - ')[1]}</strong></span>`;

  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let createGoals = document.getElementById('create-goal');

  leftArrow.addEventListener('click', () => {
    if (counter === 0) {
      counter = phrases.length - 1;
    } else {
      counter -= 1;
    }

    phraseDiv.innerHTML = `<span><strong>"</strong>${phrases[counter].split(' - ')[0]}<strong>"</strong><br><strong>- ${phrases[counter].split(' - ')[1]}</strong></span>`;
  });

  rightArrow.addEventListener('click', () => {
    if (counter === phrases.length - 1) {
      counter = 0;
    } else {
      counter += 1;
    }

    phraseDiv.innerHTML = `<span><strong>"</strong>${phrases[counter].split(' - ')[0]}<strong>"</strong><br><strong>- ${phrases[counter].split(' - ')[1]}</strong></span>`;
  });

  createGoals.addEventListener('click', () => {
    document.location.href = "goals/goals.html";
  });
});