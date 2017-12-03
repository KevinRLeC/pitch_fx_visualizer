import param from 'jquery-param';

const SERVICE_URL = process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3001/api"

export const getData = (url, data) => {

  const params = param(data)
  return fetch(`${SERVICE_URL}/${url}?${params}`)
  .then((res) => res.json())
  .then((res) => res.data)
}