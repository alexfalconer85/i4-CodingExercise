export default (state, action) => {
  // CRUD CASES
  switch (action.type) {
    case "REMOVE_VESSEL":
      return {
        ...state,
        vessels: state.vessels.filter((vessel) => {
          return vessel.id !== action.payload;
        }),
      };
    case "ADD_VESSEL":
      return {
        ...state,
        vessels: [action.payload, ...state.vessels],
      };
    case "EDIT_VESSEL":
      const updateVessel = action.payload;

      const updateVessels = state.vessels.map((vessel) => {
        if (vessel.id === updateVessel.id) {
          return updateVessel;
        }
        return vessel;
      });
      return {
        ...state,
        vessels: updateVessels,
      };

    default:
      return state;
  }
};
