export const RULES = {
    "DEATH": "death",
    "LIVE": "live",
    "BIRTH": "birth"
}

/**
 * 
 * @returns {Object} rules object with form {1: rules.DEATH, 2: rules.BIRTH, ...}
 */
export function getRules(){
    // TODO: this is a temporary implementation and needs to be given at run time by the user
    // maps the number of neighbors to the next state
    return {
        1: RULES.DEATH,
        2: RULES.BIRTH,
        3: RULES.DEATH,
        4: RULES.DEATH,
        5: RULES.DEATH,
        6: RULES.DEATH,
        7: RULES.DEATH,
        8: RULES.DEATH,
        9: RULES.DEATH,
        10: RULES.DEATH,
        11: RULES.DEATH,
        12: RULES.DEATH,
        13: RULES.DEATH,
        14: RULES.DEATH,
        15: RULES.DEATH,
        16: RULES.DEATH,
        17: RULES.DEATH,
        18: RULES.DEATH,
        19: RULES.DEATH,
        20: RULES.DEATH,
        21: RULES.DEATH,
        22: RULES.DEATH,
        23: RULES.DEATH,
        24: RULES.DEATH,
        25: RULES.DEATH,
        26: RULES.DEATH,
    }
}