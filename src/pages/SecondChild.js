const SecondChild = (props) => {
  const { id } = props.match.params

  return(
    <div>
      <h2>SecondChild</h2>
      <p>{id}のページです</p>
    </div>
  )
}

export default SecondChild