function toggleDetails(id) {
  const details = document.getElementById(id);
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

const sipForm = document.getElementById('sipForm');
sipForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const P = parseFloat(document.getElementById('amount').value);
  const r = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const n = parseFloat(document.getElementById('years').value) * 12;
  const maturity = P * (((Math.pow(1 + r, n)) - 1) / r) * (1 + r);
  document.getElementById('result').innerHTML = `Maturity Amount: ₹${maturity.toFixed(2)}`;
});
