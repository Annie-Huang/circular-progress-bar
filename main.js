const progressbar = document.querySelector('.progressbar');

function enableProgessBar() {
  /* if JS is working, we'll enable the progess bar */
  /* all the styling for it comes from the role="progressbar" */
  /* and having that removes the no-js message */
  /* min of 0 and max of 100 are defaults, so we don't need aria-valuemin or -valuemax */
  progressbar.setAttribute('role', 'progressbar');
}
