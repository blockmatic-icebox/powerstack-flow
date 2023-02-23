import { GetServerSideProps } from 'next'

import { serverResponse } from '~/lib/ssr'

export default function PageLogout() {
  return <></>
}

export const getServerSideProps: GetServerSideProps<any, any> = async (context) => {
  return serverResponse(context, async ({ session }) => {
    session.destroy()
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  })
}
