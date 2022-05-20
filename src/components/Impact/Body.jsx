import Fund from './Fund'

export default function Body() {
  return (
    <div className="mt-48 flex w-full flex-col items-center">
      <Fund
        image={'/refi.png'}
        title={'Refi Fund'}
        description={
          'The ReFi Fund supports projects and organizations building solutions for climate regeneration.'
        }
        prt1={'KlimaDAO'}
        prt2={'Toucan Protocol'}
        prt3={'Open Forest Protocol'}
        learn={'https://www.google.com'}
      />
      <Fund
        image={'/mira-prp.png'}
        title={'DeSci Fund'}
        description={'description'}
        prt1={'KlimaDAO'}
        prt2={'Toucan Protocol'}
        prt3={'Open Forest Protocol'}
        learn={'https://www.ghdsfkjhgdfkjghs.com'}
      />
      <Fund
        image={'/mira-prp.png'}
        title={'Refi Fund'}
        description={'description'}
        prt1={'KlimaDAO'}
        prt2={'Toucan Protocol'}
        prt3={'Open Forest Protocol'}
        learn={'https://www.ghdsfkjhgdfkjghs.com'}
      />
    </div>
  )
}
