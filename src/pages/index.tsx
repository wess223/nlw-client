import Image from 'next/image';

import appPreViewImg from '../assets/app-nlw-copa-preview.png';
import usersAvatarExampleImg from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg';
import logoImg from '../assets/logo.svg';


export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen gap-28 mx-auto grid grid-cols-2 items-center'>
      <main>
        <Image
          src={logoImg}
          quality={100}
          alt='NLW Copa.'
        />

        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image
            src={usersAvatarExampleImg}
            quality={100}
            alt=''
          />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592 </span>pessoas já estão usando.
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type={'text'}
            required
            placeholder='Qual nome do seu bolão?'
          />

          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit">
            Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image
              src={iconCheckImg}
              quality={100}
              alt=''
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.034 </span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600"></div>

          <div className="flex items-center gap-6">
            <Image
              src={iconCheckImg}
              quality={100}
              alt=''
            />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <Image
        src={appPreViewImg}
        quality={100}
        alt='Dois celulares exibindo uma prévia da aplicação do NLW Copa.'
      />

    </div>
  )
}

// export const getServerSideProps = async () => {
//   const response = await fetch('https://api.github.com/users/wess223/repos')
//   const repoList = await response.json()

//   return {
//     props: {
//       list: repoList
//     }
//   }
// }
