/* ENTITIES */

export interface ServicesI {
	id: number;
	title: string;
	description: string; 
	img: string;
}
export interface UnitI 
{id: number;
									title: string;
									description: string;
									img: string;
									gis: string[2];}

export interface ZonesI {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: string[2]; 
	units: number;
}

export interface ZoneI {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: string[2]; 
	units: UnitI[];
}

export interface StatesI {
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

