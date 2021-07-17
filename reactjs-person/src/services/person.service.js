import http from "../http-common";

class PersonDataService {

    getAll() {
        return http.get("/persons");
    }

    create(data) {
        return http.post("/persons", data);
    }
}

export default new PersonDataService;