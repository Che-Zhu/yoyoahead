const background = document.body;
const contentArea = document.getElementById('content');
const contentSound = document.getElementById('contentSound');

function applyDarkTheme() {
  background.style.backgroundColor = 'black';
  background.style.color = 'white';
  contentSound.play();
}

function applyLightTheme() {
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
  }

/** for desktop */
contentArea.addEventListener('mouseover', applyDarkTheme);
contentArea.addEventListener('mouseout', applyLightTheme);
/** for mobile */
contentArea.addEventListener('touchstart', applyDarkTheme);
contentArea.addEventListener('touchend', applyLightTheme);