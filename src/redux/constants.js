const C = {
    ADD_SPLIT: "ADD_SPLIT",
    ADD_EXERCISE: "ADD_EXERCISE",
    START_WORKOUT: "START_WORKOUT",
    FINISH_WORKOUT: "FINISH_WORKOUT",
    CANCEL_WORKOUT: "CANCEL_WORKOUT",
    NEXT_EXERCISE: "NEXT_EXERCISE",
    NEXT_SET: "NEXT_SET",
    ADD_WORKOUT: "ADD_WORKOUT",
    SELECT_EXERCISE: "SELECT_EXERCISE",
    UNSELECT_EXERCISE: "UNSELECT_EXERCISE",
    ADD_HISTORY_ENTRY: "ADD_HISTORY_ENTRY",
    CHANGE_WEIGHT: "CHANGE_WEIGHT",
    TOGGLE_ADD_EXERCISE_FORM: "TOGGLE_ADD_EXERCISE_FORM",
    CHANGE_TIMER_SETTINGS: "CHANGE_TIMER_SETTINGS",
    RESTORE_DEFAULT_SETTINGS: "RESTORE_DEFAULT_SETTINGS"
};

export default C;

export const defaults = {
    LOCALSTORAGE_NAME: 'localWeights',
    SET_AMOUNT: 3
}

export const defaultSettings = {
    timeBetweenSets: 1000 * 60,
    timeBetweenExercises: 1000 * 60 * 3
}

export const muscles = {
    CHEST: "CHEST",
    BACK: "BACK",
    LEGS: "LEGS",
    BIZEPS: "BIZEPS",
    TRIZEPS: "TRIZEPS",
    SHOULDER: "SHOULDER",
    ABS: "ABS"
}

export const muscleColors = {
    CHEST: "blue",
    BACK: "green",
    LEGS: "red",
    BIZEPS: "pink",
    TRIZEPS: "purple",
    SHOULDER: "yellow",
    ABS: "turquoise"
}