import axios from 'axios';

/** @return git user info
 * @example getUsuario('gaetano1979')
 * @param {string} ingressar el username del user git
 * @description ingresar el username of git user */
export function getUsuario(usuario: string){
    const url = `https://api.github.com/users/${usuario}`;
    return axios.get(url).then(data => data.data).catch(console.log);
}
