const progressbar = document.querySelector('.progressbar');
let progress = 0;

function enableProgessBar() {
  /* if JS is working, we'll enable the progess bar */
  /* all the styling for it comes from the role="progressbar" */
  /* and having that removes the no-js message */
  /* min of 0 and max of 100 are defaults, so we don't need aria-valuemin or -valuemax */
  progressbar.setAttribute('role', 'progressbar');
  progressbar.setAttribute('aria-valuenow', 0);
  progressbar.setAttribute('aria-live', 'polite');
}

enableProgessBar();

// for simulating stuff when we click the buttons
const testingGround = document.querySelector('.testing-ground');

testingGround.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;

  progress = e.target.dataset.progress;
  console.log(progress);
  progressbar.setAttribute('aria-valuenow', progress);
});
