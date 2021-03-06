import TransactionListMenu from './TransactionListMenu'

const data = {
  history: "Transaction History",
  historydate: "April 22",
}

function TransactionHistory() {
  return (
    <div className="flex flex-col items-start bg-center bg-cover mt-6 min-h-[328px] py-7 px-8 w-full bg-[url('/img/rectangle-4-1@1x.png')]" >
      <div className="flex flex-row justify-between items-start mb-1 min-w-full">
        <div className="self-start font-poppins font-semibold text-x04051a text-xxxl">{data.history}</div>
        {/* <div className="form-control min-w-[137px] h-[39px] ml-auto mr-auto">
          <select className="select select-bordered tracking-normal whitespace-nowrap font-poppins font-medium text-victoria text-fsm">
            <option>Export Excel</option>
            <option>Export Excel</option>
          </select>
        </div> */}
        <div className="items-center bg-center bg-cover rounded flex h-[39px] py-0 px-px bg-[url('/img/log-out--background-mask--1@1x.png')]" >
          <div className="flex items-end h-[37px] w-[135px] py-1 px-3.5">
            <div className="h-[22px] w-[107px]">
              <div className="ml-0 mt-0 font-poppins font-medium text-victoria text-fsm">{data.historydate}</div>
              <div className="flex justify-end ml-10 -mt-3.5 w-[66px] h-[16px]">
                <img className="object-cover w-[16px]" src="/img/45-1@1x.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionListMenu />
    </div>
  );
}

export default TransactionHistory;
