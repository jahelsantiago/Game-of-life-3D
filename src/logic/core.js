// A cube can have a maximum of 3x3x3 - 1 = 26 neighbors
// for each number of neighbors, it can have 3 possible states:
// - birth
// - death
// - live 
// Given an array of positions, calculate the next state of the universe

import { RULES } from "./rules";

/**
 * 
 * @param {List[List[number]]} positions array with form [[x, y, z], [x, y, z], ...]
 * @param {Object} rules object with form {1: rules.DEATH, 2: rules.BIRTH, ...}
 * @returns {List[List[number]]} array with form [[x, y, z], [x, y, z], ...]
 */
export function getNextState(positions = [], rules){
    // for each position in the universe calculate the number of neighbors
    const neighbors = getNeighbors(positions);
    console.log("neighbords",neighbors);
    // for each position in the universe, calculate the next state
    const nextPositions = getNextPositions(neighbors, rules);
    return nextPositions;
}

/**
 * 
 * @param {Object} neighbors neighbors dictionary with form "x,y,z": count
 * @param {Object} rules rules object with form {1: rules.DEATH, 2: rules.BIRTH, ...}
 * @returns 
 */

function getNextPositions(neighbors = {}, rules) {
    const nextPositions = [];
  
    Object.keys(neighbors).forEach((neighbor) => {
      // Convert from string to [x, y, z] object
      const neighborPosition = neighbor.split(",").map(Number);
      const neighborPositionObject = [
        neighborPosition[0],
        neighborPosition[1],
        neighborPosition[2],
      ];
  
      // Get the number of neighbors
      const neighborCount = neighbors[neighbor];
  
      // Get the next state
      switch (rules[neighborCount]) {
        case RULES.DEATH:
          // Do nothing
          break;
        case RULES.LIVE:
        case RULES.BIRTH: // Combining cases for the same action
          nextPositions.push(neighborPositionObject);
          break;
        default:
          throw new Error(
            `Invalid rule: ${RULES[neighborCount]} ${RULES[neighborCount]} with ${neighborCount} neighbors`
          );
      }
    });
  
    return nextPositions;
  }
  


/**
 * 
 * @param {Object} positions array with form [[x, y, z], [x, y, z], ...] 
 * @returns {Object} neighbors dictionary with form "x,y,z": count
 */
function getNeighbors(positions){
    const neighbors = {};
    positions.forEach(position => {
        addNeighbors(neighbors, position);
    });
    return neighbors;
}



/**
 * Adds neighboring positions to a neighbors dictionary and counts their occurrences.
 * @param {Object} neighbors - The dictionary of neighboring positions and their occurrence counts with form "x,y,z": count
 * @param {Object} position - The position object with x, y, and z coordinates. {x, y, z}
 * @returns {void}
 */
function addNeighbors(neighbors, position){
    const [x, y, z] = position;
    for(let i = -1; i <= 1; i++){
        for(let j = -1; j <= 1; j++){
            for(let k = -1; k <= 1; k++){
                if(i === 0 && j === 0 && k === 0){
                    continue;
                }
                const neighbor = [x + i, y + j, z + k];
                const neighborString = neighbor.join(',');
                if(neighbors[neighborString]){
                    neighbors[neighborString] += 1;
                } else {
                    neighbors[neighborString] = 1;
                }
            }
        }
    }
}


