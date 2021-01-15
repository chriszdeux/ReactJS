export const handleDelete = ({todoId, dispatch}) => {
  console.log(`id: ${todoId} deleted`);

  const actionDelete = {
    type: 'delete',
    payload: todoId
  }

  dispatch(actionDelete)

}