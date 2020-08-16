const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>, <span class="code">certificate</span>',
  about:
    "Hello 👋<br>I'm Derri. I’m a web developer and tech enthusiast especially on web development, software engineering, I'm currently living in Yogyakarta, Indonesia. I have a burning passion to help others with contribution that I create. I enjoy the limitless potential of impact that I can have with what I contrib. It is what pushes me every day to become a better developer. Outside of coding, I'm an Gamers, love the Jokes!",
  skills:
    '<span class="code">Languages:</span> HTML, PHP, CSS, JavaScript, Ruby<br><span class="code">Technologies:</span> Git, SQL, Figma<br><span class="code">Frameworks:</span> Laravel, CodeIgniter',
  education:
    "STMIK WIT, Computer Science. Cirebon, West Java<br>SMA PGRI, Cirebon, West Java",
  resume: "<a href='./src/derripratama.pdf' class='success link' target='_blank'>Open Resume</a>",
  experience:
  "Sorabel<br>• Platform Specialist (Apr 2019 - Jun 2020)<br>• Team Leader (Jan 2019 - Apr 2019)<br><br>Sale Stock Indonesia<br>• Team Leader (Jan 2016 - Jan 2019)<br>• Customer Service Officer (Jul 2015 - Jan 2016)<br><br> MAG Computer<br>• Front-End Engineer (May 2010 - Oct 2011)<br>• IT Support (Jan 2010 - Apr 2010)",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/derry.p.bekool' target='_blank' class='code'>Facebook</a> ,<a href='https://www.instagram.com/derribekool' target='_blank' class='code'>Instagram</a>, <a href='https://www.linkedin.com/in/derri-pratama/' target='_blank' class='code'>LinkedIn</a>, <a href='https://github.com/derribekool' target='_blank' class='code'>GitHub</a>, <a href='mailto:derry@bhomert.com' class='code'>E-Mail</a>",
  certificate:
    "Progate<br>• Web Development (Ruby on Rails) Issued Aug 2020, <a href='https://bit.ly/3kGDaMB' target='_blank'><span class='code'>preview</span></a><br>• Web Development (Node.js) Issued Jul 2020, <a href='https://bit.ly/3iHNEti' target='_blank'><span class='code'>preview</span></a><br><br>SoloLearn<br>• Javascript Fundamental Issued Jul 2020, <a href='https://www.sololearn.com/Certificate/1024-15425920/pdf/' target='_blank'><span class='code'>preview</span></a><br>• PHP Fundamental Issued Nov 2019, <a href='https://www.sololearn.com/Certificate/1059-15425920/pdf/' target='_blank'><span class='code'>preview</span></a><br>• SQL Fundamental Issued Nov 2019, <a href='https://www.sololearn.com/Certificate/1060-15425920/pdf/' target='_blank'><span class='code'>preview</span></a>"    
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);