import axios from 'axios'

export class Api {

    handleError(error) {

        if (error.response.status == 419 || error.response.status == 401) {
            // Not logued in, send to login,
            // Or there`s a problem with the CSRF token

            //window.location.replace("/");
            Event.$emit('logout');

        } else if (error.response.status == 403) {

            Event.$emit('alert', {
                success: false,
                message: 'Lo sentimos, no tienes permisos para realizar esta acción.',
                duration: 10000
            });

        } else if (error.response.status == 400) {

            Event.$emit('alert', {
                success: false,
                message: error.response.data.errors ? error.response.data.errors.message : 'Hubo un error al comunicarse con ITL Track. Por favor, intenta nuevamente.',
                duration: error.response.data.errors ? error.response.data.errors.duration : 20000
            });

        } else if (error.response.status == 422) {
            // validation errors
            Event.$emit('alert', {
                success: false,
                message: 'Errores de validación, por favor, intente nuevamente.'
            });
        } else {
            // server process error
            Event.$emit('alert', {
                success: false,
                message: error.response.data.errors ? error.response.data.errors.message : 'Hemos encontrado un error, por favor, intenta nuevamente.',
                duration: error.response.data.errors ? error.response.data.errors.duration : 20000,
            });
        }
    }


    submit(requestType = "get", url, data = [], multipart = false, auth = true, handleError = true, concat = true, baseUrl = 'general') {

        // if( concat && process.env.VUE_APP_USE_DUMMY !== 'true' ) {
        //     if( baseUrl == 'general' ) {
        //         url = process.env.VUE_APP_BASE_URL + url;
        //     } else {
        //         url = process.env.VUE_APP_AUTH_URL + url;
        //     }
        // }
        url = process.env.VUE_APP_BASE_URL + url;

        var config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-type,Accept,X-Access-Token,X-Key',
            }
        };
        if (multipart && requestType != 'get') {
            config['headers']['Content-Type'] = 'multipart/form-data';
        }

        if (auth) {
            let token = localStorage.getItem('vue-token-home');
            axios.interceptors.request.use(
                (config) => {



                    if (token) {

                        config.headers['Authorization'] = `Bearer ${token}`;

                    }

                    return config;
                },

                (error) => {
                    return Promise.reject(error);
                }
            );
        }

        return new Promise((resolve, reject) => {

            if (requestType == 'get') {
                axios.get(url, config)
                    .then(response => { resolve(response); })
                    .catch(error => {
                        if (handleError) {
                            this.handleError(error);
                        }
                        reject(error);
                    });
            }
            else if (requestType == 'delete') {
                axios.delete(url, config)
                    .then(response => { resolve(response); })
                    .catch(error => {
                        if (handleError) {
                            this.handleError(error);
                        }
                        reject(error);
                    });
            } else {
                axios[requestType](url, data, config)
                    .then(response => { resolve(response); })
                    .catch(error => {
                        if (handleError) {
                            this.handleError(error);
                        }
                        reject(error);
                    });
            }

        });
    }
}