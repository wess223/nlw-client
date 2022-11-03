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
              <h1 className="text-violet-500 font-bold text-4xl">NAME</h1>
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
