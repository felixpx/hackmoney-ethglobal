import DashcardMid from './DashcardMid'
import DashcardButton from './DashcardButton'
import DashcardOne from './DashcardOne'
import DashcardTwo from './DashcardTwo'

export default function Dashboard() {
  return (
    <div className="flex w-11/12 flex-col items-center justify-center space-y-4 xl:w-9/12">
      <p className="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-2xl font-semibold tracking-wide text-transparent ">
        Statistics
      </p>

      <div className=" grid w-full grid-cols-3 content-center justify-items-center lg:w-9/12">
        <DashcardTwo
          title={'Treasury Value'}
          value={'2,636,875 USDC'}
          info={'Mira DAO Treasury'}
        />
        <DashcardMid
          title={'Total Value Locked'}
          value={'100,127,000 USDC'}
          info={'0.91703 MCap / TVL'}
        />

        <DashcardMid
          title={'MIRA Price'}
          value={'0.09182 USDC'}
          info={'91.82M USDC Market Cap'}
        />
      </div>
      <p className="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-2xl font-semibold tracking-wide text-transparent ">
        My Page
      </p>
      <div className="grid w-full grid-cols-3 content-center justify-items-center lg:w-9/12">
        <DashcardOne
          title={'Rewards APY'}
          value={'16.82%'}
          rew1={'12% USDC'}
          rew2={'2% MIRA'}
          info={'How is this calculated?'}
        />
        <DashcardMid
          title={'Your mUSDC Balance'}
          value={'11,542.86 mUSDC'}
          info={'ROI (Daily) 3.08 mUSDC'}
        />
        <DashcardButton title={'Current MIRA Rewards'} value={'510.96 MIRA'} />
      </div>
    </div>
  )
}
