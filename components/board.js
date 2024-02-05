
export const board = (board) => {
    const creationDate = new Date(board.createdAt)
        .toLocaleString('de-DE')
        .replace(', ','@')
    return `
    <div class="card p-3 mb-3">
        <h2>${board.title}</h2>
        created by: ${board.createdById} - ${creationDate}
    </div>
    `
}