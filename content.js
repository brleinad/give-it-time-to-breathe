window.addEventListener('load', () => {

  let mergeButton = null;
  const interval = setInterval(() => {

  mergeButton = document.querySelector('[data-details-container=".js-merge-pr"]')
    if (mergeButton) {
      clearInterval(interval)
      console.log('merge button: ', mergeButton)
      mergeButton.addEventListener('click', event => {
        chrome.storage.local.get(['enabled', 'startDate'], ({ enabled, startDate }) => {
          if (enabled) {
            // startDate = new Date(startDate)
            const oneDayAgo = new Date().getTime() - (24 * 60 * 60 * 1000)
            console.log({startDate, oneDayAgo})
            if (startDate > oneDayAgo) {
              // The start date is less than 1 day ago
              event.preventDefault()
              alert('Give it a little time to breathe')
              console.log('Give it a little time to breathe')
            }
          }
        })
      })
    }
  }, 1000)

})
