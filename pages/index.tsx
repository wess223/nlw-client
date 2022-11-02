// interface HomeProps{
//   count : number
// }

export default function Home(props) {

  return (
    <>
      {
        props.list.map(x => {
          return (
            <div>
              {x.name}
            </div>
          )
        })
      }
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/wess223/repos')
  const repoList = await response.json()

  return {
    props: {
      list: repoList
    }
  }
}
