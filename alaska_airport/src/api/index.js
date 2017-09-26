import { Router } from 'express';
import controller from "../controller";

export default () => {
    let api = Router({ mergeParams: true });

    api.route('/get_all_airports').get(controller.airport.airport_list);
    api.route('/nearest_airport').get(controller.airport.nearest_airport);

    return api;
}