/* ENTITIES */

export interface ServicesI {
	id: number;
	title: string;
	description: string; 
	img: string;
}

export interface UnitI {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: [string,string];
}

export interface ZonesI {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: [string,string]; 
	units: number;
}

export interface ZoneI {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: [string,string]; 
	units: UnitI[];
}

export interface MonitorI {
	id: number;
	type: {id:string,title:string};
	title: string;
	description: string;
	img: {icon:string,bg:string};
	states:StateI;
}

export interface StateI {
	id: number;
	title: string;
	description: string;
	img: {icon:string,bg:string};
	data:any;
}

export interface FeedSiloI {
	filled    :FilledI;
	forecast  :ForecastI;
 chartXY   :ChartXYI;
	histogram :HistogramI;
 temp      :TempI;
}

export interface PivotI {
	flow    :FlowI;
	polar   :PolarI;
  serie   :SerieI;
}

export interface WeatherI {
	temp    : TempI;
	moisture: MoistureI;
 rain   	:	RainI;
	wind    : WindI;
}


/***** Monitors *******/

/* filled */
export interface FilledI {
	value: string;
	order_1: string;
	order_2: string;
}

export interface ChartXYI {
  d:{ title:string,
						x:string[],
						y:string[]
				};
		w:{ title:string,
						x:string[],
						y:string[]
				};
		m:{ title:string,
						x:string[],
						y:string[]
				};
		y:{ title:string,
						x:string[],
						y:string[]
				};
}

export interface ForecastI {
	 d:{ title:string,
						x:string[],
						y:string[],
						x1:string[],
						y1:string[],
						d:string[]
				},
		w:{ title:string,
						x:string[],
						y:string[],
						x1:string[],
						y1:string[],
						d:string[]
				},
		m:{ title:string,
						x:string[],
						y:string[],
						x1:string[],
						y1:string[],
						d:string[]
				},
		y:{ title:string,
						x:string[],
						y:string[],
						x1:string[],
						y1:string[],
						d:string[]
				},
}

export interface HistogramI {
	d:{ title:string,
						x:string[],
						y:string[]
				};
		w:{ title:string,
						x:string[],
						y:string[]
				};
		m:{ title:string,
						x:string[],
						y:string[]
				};
		y:{ title:string,
						x:string[],
						y:string[]
				};
}


/* pivot */

export interface FlowI {
	value: string;
	order_1: string;
	order_2: string;
}

export interface PolarI {
	title:string;
	x:string[];
	y:string[];
}

export interface SerieI {
	title:string;
	x:string[];
	y:string[];
}

/* Weather */

export interface WindI {
	value:string;
	order_1:string;
	deg:string;
}

export interface TempI {
	 s:{ title:string,
						value:string,
				};
		d:{ title:string,
						x:string[],
						y:string[]
				};
		w:{ title:string,
						x:string[],
						y:string[]
				};
		m:{ title:string,
						x:string[],
						y:string[]
				};
		y:{ title:string,
						x:string[],
						y:string[]
				};
}

export interface MoistureI {
		d:{ title:string,
						x:string[],
						y:string[]
				};
		w:{ title:string,
						x:string[],
						y:string[]
				};
		m:{ title:string,
						x:string[],
						y:string[]
				};
		y:{ title:string,
						x:string[],
						y:string[]
				};
}

export interface RainI {
		d:{ title:string,
						x:string[],
						y:string[]
				};
		w:{ title:string,
						x:string[],
						y:string[]
				};
		m:{ title:string,
						x:string[],
						y:string[]
				};
		y:{ title:string,
						x:string[],
						y:string[]
				};
}

/* Setup variables */



/* Entities */



export const services_0:ServicesI= {
	id: 0,
	title: "",
	description: "", 
	img: ""
}

export const unit_0:UnitI= {
	id: 0,
	title: "",
	description: "",
	img: "",
	gis: ["",""]
}

export const zone_0:ZoneI=
{id: 0,
	title: "",
	description: "",
	img: "",
	gis: ["",""],
	units:[unit_0]
	}

export const zones_0:ZonesI= {
	id: 0,
	title: "",
	description: "",
	img: "",
	gis: ["",""], 
	units: 0
}


export const state_0 : StateI= {
	id: 0,
	title: "",
	description: "",
	img: {icon:"",bg:""},
	data:{},
}

export const monitor_0:MonitorI= {
	id: 0,
	type: {id:"",title:""},
	title: "",
	description: "",
	img: {icon:"",bg:""},
	states:state_0,
}



export const filled_0    :FilledI= {value: "0",
																																				order_1: "0",
																																				order_2: "0"};
export const forecast_0  :ForecastI= {  d:{ title:"Diario",
																																																x:[],
																																																y:[],
																																																x1:[],
																																																y1:[],
																																																d:[]
																																												},
																																								w:{ title:"Semanal",
																																																x:[],
																																																y:[],
																																																x1:[],
																																																y1:[],
																																																d:[]
																																												},
																																								m:{ title:"Mensual",
																																																x:[],
																																																y:[],
																																																x1:[],
																																																y1:[],
																																																d:[]
																																												},
																																								y:{ title:"Anual",
																																																x:[],
																																																y:[],
																																																x1:[],
																																																y1:[],
																																																d:[]
																																												}};

export const chartXY_0:ChartXYI ={ 														
																													d:{ title:"Diario",
																														x:[],
																														y:[]
																													},
																													w:{ title:"Semanal",
																														x:[],
																														y:[]
																													},
																													m:{ title:"Mensual",
																														x:[],
																														y:[]
																													},
																													y:{ title:"Anual",
																														x:[],
																														y:[]
																													}};

export const histogram_0 :HistogramI={ d:{ title:"Diario",
																																															x:[],
																																															y:[]
																																											},
																																							w:{ title:"Semanal",
																																															x:[],
																																															y:[]
																																											},
																																							m:{ title:"Mensual",
																																															x:[],
																																															y:[]
																																											},
																																							y:{ title:"Anual",
																																															x:[],
																																															y:[]
																																											}} ;
export const temp_0      :TempI={    s:{ title:"Actual",
																																													x:[],
																																													y:[]
																																									},
																																					d:{ title:"Diario",
																																													x:[],
																																													y:[]
																																									},
																																					w:{ title:"Semanal",
																																													x:[],
																																													y:[]
																																									},
																																					m:{ title:"Mensual",
																																													x:[],
																																													y:[]
																																									},
																																					y:{ title:"Anual",
																																													x:[],
																																													y:[]
																																									}};

export const feedSilo_0 :FeedSiloI={
																								filled    :filled_0,
																								forecast  :forecast_0,
																								chartXY   :chartXY_0,
																								histogram :histogram_0,
																								temp      :temp_0
																							}

export const flow_0:FlowI= {
	value: "",
	order_1: "",
	order_2: ""
}

export const polar_0:PolarI= {
	title:"",
	x:[""],
	y:[""]
}

export const serie_0:SerieI= {
	title:"",
	x:[""],
	y:[""]
}

export const pivot_0    :PivotI= { flow:flow_0,polar:polar_0,serie:serie_0};




export const wind_0:WindI= {
	value:"",
	order_1:"",
	deg:""
}

export const moisture_0:MoistureI= {
		d:{ title:"",
						x:[""],
						y:[""]
				};
		w:{ title:"",
						x:[""],
						y:[""]
				};
		m:{ title:"",
						x:[""],
						y:[""]
				};
		y:{ title:"",
						x:[""],
						y:[""]
				};
}

export const rain_0:RainI= {
		d:{ title:"",
						x:[""],
						y:[""]
				};
		w:{ title:"",
						x:[""],
						y:[""]
				};
		m:{ title:"",
						x:[""],
						y:[""]
				};
		y:{ title:"",
						x:[""],
						y:[""]
				};
}



export const weather_0:WeatherI= {
		temp    : temp_0,
		moisture: moisture_0,
  rain   	:	rain_0,
		wind    : wind_0
}
