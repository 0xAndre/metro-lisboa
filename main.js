
const axios = require('axios')

let _uri, _token;

const Metro = function (token) {
    _uri = "https://api.metrolisboa.pt:8243/estadoServicoML/1.0.1";
    _token = token;
};

/**
 * returns the waiting time for all red line stations
 */
Metro.prototype.getRedLineWaitingTime = () =>
{
    return request("tempoEspera/Linha/Vermelha");
}

/**
 * returns the waiting time for all red yellow stations
 */
Metro.prototype.getYellowLineWaitingTime = () =>
{
    return request("tempoEspera/Linha/Amarela");
}

/**
 * returns the waiting time for all green line stations
 */
Metro.prototype.getGreenLineWaitingTime = () =>
{
    return request("tempoEspera/Linha/Verde");
}

/**
 * returns the waiting time for all blue line stations
 */
Metro.prototype.getBlueLineWaitingTime = () =>
{
    return request("tempoEspera/Linha/Azul");
}

/**
 * returns the status of red line 
 */
Metro.prototype.getRedLineStatus = () =>
{
    return request("estadoLinha/Vermelha");
}

/**
 * returns the status of yellow line 
 */
Metro.prototype.getYellowLineStatus = () =>
{
    return request("estadoLinha/Amarela");
}

/**
 * returns the status of green line 
 */
Metro.prototype.getGreenLineStatus = () =>
{
    return request("estadoLinha/Verde");
}

/**
 * returns the status of blue line 
 */
Metro.prototype.getblueLineStatus = () =>
{
    return request("estadoLinha/Azul");
}

/**
 * returns the station information: GPS, URL, etc..
 * @station => the id of station. (OD, CG, etc..)
 */
Metro.prototype.getStationInfo = (station) =>
{
    return request(`infoEstacao/${station}`);
}

/**
 * returns the station waiting time
 * @station => the id of station. (OD, CG, etc..)
 */
Metro.prototype.getStationWaitingTime = (station) =>
{
    return request(`tempoEspera/Estacao/${station}`);
}


function request(path) {
    return axios.get(`${_uri}/${path}`, { headers: { Authorization: `Bearer ${_token}` } })
        .then(response => { return response.data.resposta || [] })
        .catch(error => { return error });
}


module.exports = Metro;