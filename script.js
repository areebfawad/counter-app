let count = 0;
const counter = document.getElementById('counter');
const historyList = document.getElementById('history');

function updateCounter() {
  counter.textContent = count;
  counter.className = count % 2 === 0 ? 'counter even' : 'counter odd';
}

function updateHistory() {
  const listItem = document.createElement('li');
  listItem.textContent = `${count} (${count % 2 === 0 ? 'Even' : 'Odd'})`;
  listItem.className = count % 2 === 0 ? 'even' : 'odd';
  historyList.appendChild(listItem);
}

function increment() {
  count++;
  updateCounter();
  updateHistory();
}

function reset() {
  count = 0;
  updateCounter();
  historyList.innerHTML = ''; // Clear history
}
