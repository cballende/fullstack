/* ENTITIES */

export interface Servicios {
	id: number;
	title: string;
	description: string; 
	img: string;
}

export interface Zones {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: string[2]; 
	units: number;
}

export interface Zone {
	id: number;
	title: string;
	description: string;
	img: string;
	gis: string[2]; 
	units: {
									id: number;
									title: string;
									description: string;
									img: string;
									gis: string[2];
								}[];
}

export interface fill {
	id: number;
	title: string;
	description: string;
	path: string; 
	img: string;
}

export interface states {
	id: number;
	title: string;
	description: string;
	img: {icon:string,bg:string};
	data:any;
}


/***** Monitors *******/

/* filled */
export interface filled {
	value: string;
	order_1: string;
	order_2: string;
}


export interface chartXY {
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

export interface forecast {
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

export interface histogram {
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

export interface flow {
	value: string;
	order_1: string;
	order_2: string;
}

export interface polar {
	title:string;
	x:string;
	y:string;
}

export interface serie {
	title:string;
	x:string;
	y:string;
}

/* Weather */

export interface wind {
	value:string;
	order_1:string;
	deg:string;
}

export interface temp {
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

export interface moisture {
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

export interface rain {
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

