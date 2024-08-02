export const copyLink = async (id) => {
  try {
    const copyText = document.getElementById(id).textContent
    await navigator.clipboard.writeText(copyText)
    alert('Content copied to clipboard')
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

export const copyTextFile = async (fileContent) => {
  try {
    await navigator.clipboard.writeText(fileContent)
    alert('Content copied to clipboard')
  } catch {
    console.error('Failed to copy text: ')
  }
}
