import { writable } from "svelte/store";
import { plantables, type IPlantable } from "../models/plantables";


const farm = writable([] as IPlantable[][]);

export function createFarm() {
    
    const { subscribe, update, set } = farm;

    
    return {
        
        updatePlot: (rowToUpdate: number, colToUpdate: number, plantToUpdateTo: IPlantable) => {
            update(state => {
               
                state = state.map((_row, rowNumber) => {
                    if (rowToUpdate === rowNumber) { 
                        return _row.map((_plant, colNumber) => {
                            if (colToUpdate === colNumber) {


                                return plantToUpdateTo; 
                            }
                            return _plant;
                        });
                    }
                    return _row;
                });
                return state;
            })
        },
        harvest: (rowToUpdate: number, colToUpdate: number, ) => {

            let harvested;
            update(state => {
                state = state.map((_row, rowNumber) => {
                    if (rowToUpdate === rowNumber) {
                        return _row.map((_plant, colNumber) => {
                            if (colToUpdate === colNumber) {
                                harvested = _plant;
                                return plantables.dirt;
                            }
                            return _plant;
                        });
                    }
                    return _row;
                });
                return state;
            })
        },
       
        resetFarm: () => {
            const rows = 10;
            
            let grid = new Array(rows).fill([]); 
    
           
            grid = grid.map((row) => {
                const columns = 30;
                console.log(row);
               
                return new Array(columns).fill(plantables.dirt);
            });

            grid = grid.map((row) => {
                
                console.log(row);
                return row;
            })
            set(grid);
        },
        subscribe
    }
}