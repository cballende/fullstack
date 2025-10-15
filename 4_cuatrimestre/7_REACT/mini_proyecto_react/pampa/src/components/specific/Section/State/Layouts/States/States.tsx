/* 
  Statues.tsx
 */

/* Dependencies  */

/*DOUGHNUT */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";


/* LINEAR */
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';


/* BAR */
import { BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

/* MULTICHART*/

import {
  LineController,
  BarController,
} from 'chart.js';

import { Chart } from 'react-chartjs-2';

import { useEffect, useState } from "react";
//import ErrorBoundary from "./ErrorBoundary";

/* Types */
import type { ChartXYI, FilledI, FlowI, ForecastI, HistogramI ,MoistureI,PolarI,RainI,SerieI,TempI, WindI } from "../../../../../../types/cardProps";

/* Var init */
import { filled_0, forecast_0,chartXY_0,histogram_0,temp_0,
         flow_0, polar_0,serie_0,
         wind_0,moisture_0,rain_0 
        } from "../../../../../../types/cardProps";
        
const chartColorYellow = 'rgb(255,196,0)';
const chartColorBlue = 'rgb(0,176,255)';
const chartColorWhite = '#ffffffff';
const chartColorGreen = 'rgb(112,190,116)';

/* Components */

//import Filled   from "./Statues/Statues";

/* styles */
import "./states.css"







/* Gral Functions */

const chartExists =(t)=> {
  var e = !1,chart:any;

  for (var i in ChartJS.instances) if (chart = ChartJS.instances[i], t===(chart.canvas)) {
    e = !0;
    break
  }
  return e ? chart : !1
}

 const handleClickTab= (event:any)=> {
        event.preventDefault();
        let e:any = event.target.parentNode.parentNode.parentNode.nextSibling.children["mini-forecast-chart"];
        let $this:any = event.target;
        /* console.log(ChartJS);
        console.log(e);
        console.log( chartExists(e));
        console.log($this);
        */
        if (e) {
          var i = chartExists(e);
          // console.log(i);
          if (i) {
            for (var n = $this.parentNode.classList[1], s = 0; s < i.data.datasets.length; s++) {
              var o = !0;
              s === n &&
              (o = !1),
              i.data.datasets[s].hidden = o
            }
            i.update()
          }
        }
      }

/*********************************
  FILL CHART DOUGHNUT
**********************************/
export const Filled = (props:{data:FilledI,label:{title:string}}) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const grafFill_0 = {
  labels: [''],
  datasets: [
    {
      data: [90, 10],
      backgroundColor: [
        chartColorBlue,
        chartColorYellow,
        chartColorWhite
      ],
      borderWidth: 0,    
    }
  ]
  };

  const [main, setMain]:[FilledI,any] = useState(filled_0);
  const [state,setState]:[any,any]=useState(grafFill_0);
    
  //const [ projects, setProjects ] = useContext([]);
  useEffect(()=>{
      //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
      if (props.data.hasOwnProperty("value")){//object
        /*only one*/
        //console.log("Object");
          console.log("Filled: "+props.data.value);
          setMain(props.data);
          setState({
                    labels: [],
                    datasets: [
                      {
                        data: [5,props.data.value,100-Number(props.data.value),5],
                        backgroundColor: [
                          chartColorWhite,
                          chartColorBlue,
                          chartColorYellow,
                          chartColorWhite
                        ],
                        borderWidth: 2,
                      }
                    ]
                  });
          // console.log(x);
      }
    }
    ,[props]);// on mount and change
  
  return (
    <> 
      <div className="card horizontal">
        <div className="card-stacked card-stacked-size">
          <div className="card-metrics">
            <div className="card-metric waves-effect active">
              <div className="card-metric-title">Estado {props.label.title}</div>
              <div className="card-metric-value">{main.value+"%"}</div>
              <div className="card-metric-change">
                <i className="material-icons left">keyboard_arrow_up</i>
                {main.order_1+"%"}
              </div>
            </div>
          </div>
        </div>
        <div className="card-content card-content-size">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand" >
              <div className="chartjs-size-monitor-expand-layer"></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className="chartjs-size-monitor-shrink-layer"></div>
            </div>
          </div>
            <Doughnut id="mini-doughnut-chart" data={state} />
            {/* <canvas id="mini-doughnut-chart" className="chartjs-render-monitor"></canvas> */}
        </div>
      </div>
    </>
  );
}
// export default Filled;


/*********************************
  X vs Y  LINEAR CHART 
**********************************/
export const ChartXY = (props:{data:ChartXYI,label:{title:string}}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display:false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['1', '2', '3', '4', '5', '6', '7'];

  const data_0 = {
      labels,
      datasets: [
        {
          label: '',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
           borderColor: 'rgb(255, 99, 132)',
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: '',
          data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
           borderColor: 'rgb(53, 162, 235)',
           backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
  };

  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ChartXYI,any] = useState(chartXY_0);
  const [state,setState]:[any,any]=useState(data_0);
  
  //const [ projects, setProjects ] = useContext([]);
         
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("ChartXY: "+props.data.d.title);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          setMain(props.data);
          setState(data_0);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <>
        <div className="card horizontal">
        <div className="card-stacked card-stacked-size">
          <div className="card-metrics">
            <div className="card-metric waves-effect active">
              <div className="card-metric-title">Registros {props.label.title}</div>
              <div className="card-metric-value">{main.d.title+"%"}</div>
              <div className="card-metric-change">
                <i className="material-icons left">keyboard_arrow_up</i>
                {main.d.title+"%"}
              </div>
            </div>
          </div>
        </div>
        <div className="card-content card-content-size">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand" >
              <div className="chartjs-size-monitor-expand-layer"></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className="chartjs-size-monitor-shrink-layer"></div>
            </div>
          </div>
            <Line id="mini-line-chart" options={options} data={state} />
        </div>
      </div>        
      </>
    );
}

// export default ChartXY;


/*********************************
  FORECAST  MULTI CHART 
**********************************/
export const Forecast = (props:{data:ForecastI,label:{title:string}}) => {
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);


  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display:false
      },
      title: {
        display: false,
        text: 'Mix Chart',
      },
    },
  };


const labels = ['1', '2', '3', '4', '5', '6', '7'];


const data_0 = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};


  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[ForecastI,any] = useState(forecast_0);
  const [state,setState]:[any,any]=useState(data_0);
  //const [ projects, setProjects ] = useContext([]);

    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Forecast: "+props.data.d.title);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(data_0);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       <div className="card horizontal">
        <div className="card-stacked card-stacked-size">
          <div className="card-metrics">
            <div className="card-metric waves-effect active">
              <div className="card-metric-title">Proyección {props.label.title}</div>
              <div className="card-metric-value"></div>
              <div className="card-metric-change"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width ">
              <li className="tab 0" onClick={handleClickTab}><a href="#" className="active" >Day</a></li>
              <li className="tab 1" onClick={handleClickTab}><a href="#" className=""       >Month</a></li>
              <li className="tab 2" onClick={handleClickTab}><a href="#" className=""       >Year</a></li>
              {/* <li className="indicator" style="left: 0px; right: 425px;"></li> */}
            </ul>
          </div>
          <div className="card-content card-content-size">
            <div className="chartjs-size-monitor">
              <div className="chartjs-size-monitor-expand" >
                <div className="chartjs-size-monitor-expand-layer"></div>
              </div>
              <div className="chartjs-size-monitor-shrink">
                <div className="chartjs-size-monitor-shrink-layer"></div>
              </div>
            </div>
            <Chart id="mini-forecast-chart" options={options} type='bar' data={state} />
          </div>
        </div>
      </div>  
      </>
    );
}

// export default Forecast;

/*********************************
  HISTOGRAM CHART 
**********************************/

export const Histogram = (props:{data:HistogramI,label:{title:string}}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data_0 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[HistogramI,any] = useState(histogram_0);
  const [state,setState]=useState(data_0);
  
  //const [ projects, setProjects ] = useContext([]);
         
  useEffect(()=>{
      //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
      console.log("Histogram: "+props);
      if (props.data.hasOwnProperty("d")){//object
          /*only one*/
        //  console.log("Object");
          setMain(props.data);
          setState(data_0);
      }
    }
    ,[props]);// on mount and change
  
    return (
      <> 
       <div className="card horizontal">
        <div className="card-stacked">
          <div className="card-metrics">
            <div className="card-metric waves-effect active">
              <div className="card-metric-title">Distribución {props.label.title}</div>
              <div className="card-metric-value">{main.d.title+"%"}</div>
              <div className="card-metric-change">
                <i className="material-icons left">keyboard_arrow_up</i>
                {main.d.title+"%"}
              </div>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="chartjs-size-monitor">
            <div className="chartjs-size-monitor-expand" >
              <div className="chartjs-size-monitor-expand-layer"></div>
            </div>
            <div className="chartjs-size-monitor-shrink">
              <div className="chartjs-size-monitor-shrink-layer"></div>
            </div>
          </div>
            <Bar id="mini-bar-chart" options={options} data={state} />
        </div>
      </div>  
      </>
    );
}

// export default Histogram;


export const Temp = (props:{data:TempI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[TempI,any] = useState(temp_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("s")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.s.title }
      </>
    );
}

// export default Temp;

/* pivot */

export const Flow = (props:{data:FlowI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[FlowI,any] = useState(flow_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Flow: "+props);
        if (props.data.hasOwnProperty("value")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Flujo: '+main.value }
      </>
    );
}

// export default Temp;
export const Polar = (props:{data:PolarI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[PolarI,any] = useState(polar_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Polar: "+props);
        if (props.data.hasOwnProperty("title")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Polar: '+main.title }
      </>
    );
}

// export default Temp;
export const Serie = (props:{data:SerieI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[SerieI,any] = useState(serie_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Serie: "+props);
        if (props.data.hasOwnProperty("title")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.title }
      </>
    );
}


/* Weather */

// export default Temp;
export const Moisture = (props:{data:MoistureI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[MoistureI,any] = useState(moisture_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Humedad: '+main.d.title }
      </>
    );
}

export const Rain = (props:{data:RainI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[RainI,any] = useState(rain_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("d")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Lluvia: '+main.d.title }
      </>
    );
}

export const Wind = (props:{data:WindI,label:{title:string}}) => {
  const vSt:string[]=["init","result","results","notFound"];
  const [main, setMain]:[WindI,any] = useState(wind_0);
  const [state,setState]=useState(vSt[0]);
  
  //const [ projects, setProjects ] = useContext([]);

          
    useEffect(()=>{
        //console.log("Result",props.dataRecive,props.dataRecive.hasOwnProperty("id"));
        console.log("Temp: "+props);
        if (props.data.hasOwnProperty("value")){//object
            /*only one*/
          //  console.log("Object");
           setMain(props.data);
           setState(vSt[1]);
        }else{
           setState(vSt[3]);
        }
      }
      ,[props]);// on mount and change
  
    return (
      <> 
       {'Temp: '+main.value }
      </>
    );
}

// export default Temp;