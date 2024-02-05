
export const board = (board) => {
    return `
    <div>
        <h2>${board.title}</h2>
        created by: ${board.createdById} - at ${board.createdAt}
    </div>
    `
}