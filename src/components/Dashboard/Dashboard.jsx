import DashcardMid from './DashcardMid'
import DashcardButton from './DashcardButton'
import DashcardOne from './DashcardOne'
import DashcardTwo from './DashcardTwo'

export default function Dashboard() {
  return (
    <div className="z-50 grid w-full grid-cols-3 content-center justify-items-center lg:w-9/12">
      <DashcardOne
        title={'Rewards APY'}
        value={'16.82%'}
        rew1={'12% USDC'}
        rew2={'2% MIRA'}
        info={'How is this calculated?'}
      />
      <DashcardMid
        title={'Total mUSDC'}
        value={'11,542.86 mUSDC'}
        info={'ROI (Daily) 3.08 mUSDC'}
      />
      <DashcardButton title={'Current MIRA Rewards'} value={'510.96 MIRA'} />

      <DashcardTwo
        title={'Total Impact Funding'}
        value={'5,475,000 USDC'}
        info={'Donation Txplorer'}
      />
      <DashcardMid
        title={'Total Donor Rewards'}
        value={'5,475,000 USDC'}
        info={'15,000 USDC / Day'}
      />
      <DashcardMid
        title={'Total Value Locked'}
        value={'100,127,000 USDC'}
        info={'0.91703 MCap / TVL'}
      />
      <DashcardTwo
        title={'DAO Treasury Value'}
        value={'2,636,875 USDC'}
        info={'Mira DAO Treasury'}
      />
      <DashcardMid
        title={'Total MIRA Staked'}
        value={'671,465,000 MIRA'}
        info={'67.15 Staked / Supply'}
      />
      <DashcardMid
        title={'MIRA Price'}
        value={'0.09182 USDC'}
        info={'91.82M USDC Market Cap'}
      />
    </div>
  )
}
