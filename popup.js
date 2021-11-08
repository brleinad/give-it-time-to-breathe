// Initialize button with user's preferred color
let statusCheckbox = document.getElementById('status');

chrome.storage.local.get(['enabled'], ({ enabled }) => {
  if (!enabled) {
    enabled = false;
  }
  console.log('status here: ', enabled)
  console.log('status value before', statusCheckbox.checked)
  statusCheckbox.checked = enabled;
  console.log('status value after', statusCheckbox.checked)
});

statusCheckbox.addEventListener('click', () => {
  console.log('value: ', statusCheckbox.checked)
  chrome.storage.local.set({
    enabled: statusCheckbox.checked,
    startDate: Date.now(),
    })
})