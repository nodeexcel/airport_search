import fs from "file-system";
import _ from 'lodash';
import radians from 'degrees-radians';

var dataFilePath = '../alaska_airports_II.json'




function getDistance(latlon){
    console.log( latlon.lat1)
    console.log( latlon.lat2)
    console.log( latlon.lon1)
    console.log( latlon.lon2)
}

module.exports = {
    airport_list: (req, res, next) => {
        fs.readFile(dataFilePath, (err, data) => {
            if (err) next(err);
            res.json({
                status: 0,
                message: "",
                data: JSON.parse(data)
            });
        });
    },

    nearest_airport: (req, res, next) => {
        console.log( req.query)

        let response;
        fs.readFile(dataFilePath, (err, data) => {
            if (err) next(err);
            else {
                var allAirports = JSON.parse(data);
                var selectedAirport = _.forEach( allAirports, function(airport){

                })


                //console.log( allAirports)

                // let distance = 0;
                // var current_airport;
                // _.forEach(JSON.parse(data), function(airport) {
                //     if (airport.LocationID == req.headers.location_id) {
                //         current_airport = airport;
                //         console.log(current_airport)
                //     }

                // })
                // _.forEach(JSON.parse(data), function(airport) {
                //     var d = 0;
                //     if (airport.LocationID != req.query.location_id) {
                //         console.log(radians("186780"));
                //         var R = 6371e3; // metres
                //         var φ1 = radians((current_airport.Lat));
                //         var φ2 = radians((airport.Lat));
                //         var Δφ = radians((airport.Lat - current_airport.Lat));
                //         var Δλ = radians((airport.Lot - current_airport.Lot));

                //         var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                //             Math.cos(φ1) * Math.cos(φ2) *
                //             Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
                //         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                //         var d = R * c;
                //         if (distance == 0 || d < distance) {
                //             response = airport;
                //             console.log(response)
                //         }
                //     }

                // })
            }
            res.json({ status: 0, message: "", data: response })
        })
    }

}