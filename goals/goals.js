window.addEventListener('load', () => {
  let goals = JSON.parse(localStorage.getItem('goals')) || [];
  attGoals();

  function attGoals() {
    let ulGoals = document.getElementById('goals-list');
    let myList = '';
    if (goals !== null) {
      for (let goal of goals) {
        myList += goal;
      }
    }

    ulGoals.innerHTML = myList;

    for (let i = 0; i < goals.length; i++) {
      let id_verify = `verify-${i}`;
      let id_delete = `delete-${i}`;

      document.getElementById(id_verify).addEventListener('click', () => {
        let goalId = id_verify.split('-')[1];
        let myGoal = goals.pop(goalId);
        myGoal = myGoal.split('>')[2].split('<')[0];

        let verifiedGoal = `<li><img src="../assets/verified.svg" alt="" id="${id_verify}"/><strike>${myGoal}</strike><img src="../assets/delete.svg" alt="" id="${id_delete}" /></li>`;

        goals.push(verifiedGoal);
        localStorage.setItem('goals', JSON.stringify(goals));
        attGoals();
      });

      document.getElementById(id_delete).addEventListener('click', () => {
        let goalId = id_delete.split('-')[1];
        goals.pop(goalId);
        localStorage.setItem('goals', JSON.stringify(goals));
        attGoals();
      });
    }
  }

  let goalButton = document.getElementById('goal-button');

  goalButton.addEventListener('click', () => {
    let myGoal = document.getElementById('my-goal').value.toUpperCase();
    document.getElementById('my-goal').value = '';

    let id_verify = `verify-${goals.length}`;
    let id_delete = `delete-${goals.length}`;

    myGoal = `<li><img src="../assets/verified.svg" alt="" id="${id_verify}">${myGoal}<img src="../assets/delete.svg" alt="" id="${id_delete}"></li>`;

    goals.push(myGoal);
    localStorage.setItem('goals', JSON.stringify(goals));
    attGoals();

  });

});