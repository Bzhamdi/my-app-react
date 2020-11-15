import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://192.168.1.18:8888/api/v1/employees";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    updateEmployee(employeeid, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeid, employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    
    getimg(){
        return axios.get("http://192.168.1.18:8888/api/photoblob/c2e32a2d6b@firemailbox.club");
    }
}

export default new EmployeeService()