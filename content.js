window.addEventListener('load', () => {

  let mergeButton = null;
  const interval = setInterval(() => {

  mergeButton = document.querySelector('[data-details-container=".js-merge-pr"]')
    if (mergeButton) {
      clearInterval(interval)
      console.log('merge button: ', mergeButton)
      mergeButton.addEventListener('click', event => {
        event.preventDefault()
        alert('Give it a little time to breathe')
        console.log('Give it a little time to breathe')
      })
    }
  }, 1000)

})
