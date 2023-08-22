const background = document.body;
const contentArea = document.getElementById('content');
const contentSound = document.getElementById('contentSound');
const githubIcon = document.getElementById('githubIcon');
const iconPaths = githubIcon.querySelectorAll('path');

function applyDarkTheme() {
  background.style.backgroundColor = 'black';
  background.style.color = 'white';
  githubIcon.style.fill = '#fff';
  githubIcon.style.color = '#151513';

  contentSound.play();
}

function applyLightTheme() {
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
    githubIcon.style.fill = '#151513';
    githubIcon.style.color = '#fff';
}

/** for desktop */
contentArea.addEventListener('mouseover', applyDarkTheme);
contentArea.addEventListener('mouseout', applyLightTheme);
/** for mobile */
contentArea.addEventListener('touchstart', applyDarkTheme);
contentArea.addEventListener('touchend', applyLightTheme);