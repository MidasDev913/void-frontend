import ChartBar from "../ChartBar";

const data = {
  low: "LOW",
  high: "HIGH",
  gasTrackrr: "Fantom Gas Fee Tracker",
  myStatistic: "150",
  Statistic: "Statistic",
  statisticYear: "2020",
  scale1: "100",
  scale2: "50",
  scale3: "0",
  scale4: "-50",
}

function Statistic() {
  return (
    <div className="flex flex-row items-end justify-center bg-center bg-cover mt-7 min-h-[413px] w-full py-5 px-6 bg-[url('/img/rectangle-4@1x.png')]">
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-end h-[44px]">
          <div className="ml-1 mb-0.5 min-h-[35px] font-poppins font-semibold text-x04051a text-xxxl">{data.Statistic}</div>
          <div className="flex items-center mr-1 self-start bg-cover bg-center rounded-[4px] h-[39px] min-w-[88px] py-0 px-px bg-[url('/img/log-out--background-mask-@1x.png')]">
            <div className="flex h-[37px] w-[86px]">
              <div className="ml-3 mt-3 w-[36px] h-[22px] font-poppins font-medium text-victoria text-fsm">{data.statisticYear}</div>
              <div className="bg-center bg-cover ml-1.5 mt-3 w-[16px] h-[16px] bg-[url('/img/45@1x.png')]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2 w-full">
          <div className="bg-white rounded-lg shadow-[10px_24px_54px_ #0000000f] flex h-[310px] w-[440px] 2xl:w-[640px] font-poppins font-normal text-x04051a text-xs 2xl:text-fsm">
            <div className="flex flex-col space-y-9 h-[220px] ml-5 mt-8 w-[27px]">
              <div className="mt-1">{data.myStatistic}</div>
              <div className="">{data.scale1}</div>
              <div className="">{data.scale2}</div>
              <div className="">{data.scale3}</div>
              <div className="">{data.scale4}</div>
            </div>
            <div className="flex flex-1 items-end mb-5 2xl:ml-8 xl:ml-2.5 mr-9">
              <ChartBar caption={'Jan'} upheight={102} downheight={41} />
              <ChartBar caption={'Feb'} upheight={142} downheight={19} />
              <ChartBar caption={'Mar'} upheight={102} downheight={37} />
              <ChartBar caption={'Apr'} upheight={102} downheight={12} />
              <ChartBar caption={'Mai'} upheight={132} downheight={37} />
              <ChartBar caption={'Jun'} upheight={102} downheight={37} />
              <ChartBar caption={'Jul'} upheight={102} downheight={37} />
              <ChartBar caption={'Aug'} upheight={102} downheight={37} />
              <ChartBar caption={'Sep'} upheight={102} downheight={37} />
              <ChartBar caption={'Oct'} upheight={102} downheight={37} />
              <ChartBar caption={'Nov'} upheight={102} downheight={37} />
              <ChartBar caption={'Dec'} upheight={102} downheight={24} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="py-4 mr-2.5 ">
          <div className="ml-12 font-poppins font-semibold text-x04051a text-xxl 2xl:text-xxxl">{data.gasTrackrr}</div>
        </div>
        <div className="flex h-[213px] ml-8 mt-16 mb-9 w-[324px]">
          <div className="flex flex-1 w-full">
            <div className="flex flex-1 items-end ">
              <div className="relative h-[317px] -mb-24 -ml-9 w-full font-poppins font-semibold text-regent-gray text-fsl">
                <div className="bg-center bg-cover items-start flex h-[181px] min-w-full absolute left-[35px] top-[12px] py-0 px-0 bg-[url('/img/vector-4@1x.png')]" >
                  <div className="relative mt-0 h-full w-[282px]">
                       <img className="absolute left-[143px] top-0 h-[80px] object-cover w-[139px]" src={"/img/vector-3@1x.png"} alt=""/>
                       <img className="absolute left-[42px] top-0 h-[80px] object-cover w-[139px]" src={"/img/vector-2@1x.png"} alt=""/>
                       <img className="absolute left-0 top-[42px] h-[139px] w-[80px] object-cover" src={"/img/vector-1@1x.png"} alt=""/>
                  </div>
                </div>
                <div className="absolute left-[39px] top-[197px] h-[26px] w-[55px]">{data.low}</div>
                <div className="h-[26px] absolute left-[316px] top-[197px] w-[42px]">{data.high}</div>
                <div className="bg-cover bg-center h-[317px] absolute left-0 top-0 w-[394px] bg-[url('/img/bg@1x.png')]">
                  <img className="absolute left-[177px] top-[87px] object-cover h-[87px] w-[124px]" src="/img/needle@1x.png" alt=""/>
                  <div className="absolute left-[183px] top-[136px] rounded-[14px] shadow-[0px_4px_24px_ #1f61c438] h-[28px] w-[28px] border-4 border-white" style={{ background: 'linear-gradient(180deg, #0d18a2 0%, rgba(63, 58, 185, 0.47) 34.48%, rgba(255, 255, 255, 0) 100%)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
