function EmployeeDetailsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            state = state.concat(action.Employee);
            return state;
        case "ADD_DEPARTMENT":
            state = state.concat(action.Department);
            return state;
        case "DELETE_EMPLOYEE":
            state = state.filter((Employee) => Employee.id !== action.id)
            return state;
        case "DELETE_DEPARTMENT":
            state = state.filter((Department) => Department.id !== action.id)
            return state;
        case "FETCH_EMPLOYEE":
            return action.Employee;
        case "FETCH_DEPARTMENT":
            return action.Department;
        default:
            return state;
    }
}

export default EmployeeDetailsReducer;