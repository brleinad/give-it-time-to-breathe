// Initialize button with user's preferred color
let statusCheckbox = document.getElementById('status');

chrome.storage.local.get(['enabled', 'startDate'], ({ enabled, startDate }) => {
  const oneDayAgo = new Date().getTime() - (24 * 60 * 60 * 1000)
  if (startDate < oneDayAgo) {
    // The start date is more than 1 day ago
    chrome.storage.local.set({
      enabled: false,
      startDate: 0,
    })
  }
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