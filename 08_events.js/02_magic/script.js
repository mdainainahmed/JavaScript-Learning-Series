const doc = document.addEventListener('keypress', createTable)
const insert = document.getElementById('insert')

function createTable(event) {
  insert.innerHTML =
  `<table>
    <thead>
      <tr>
        <td>Key</td>
        <td>Key Code</td>
        <td>Code</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${event.key === ' ' ? 'Space' : event.key}</td>
        <td>${event.keyCode}</td>
        <td>${event.code}</td>
      </tr>
    </tbody>
  </table>`
}