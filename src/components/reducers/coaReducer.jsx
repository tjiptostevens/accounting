import useFetch from '../useFetch'

export const InitialCoa = () => {
  const { data: coa } = useFetch('getjournal.php')
  return coa
}

export const coaReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      let data = { ...action.payload }
      // console.log(data);
      return data

    case 'ONCHANGE':
      let nam = action.name
      let val = action.value
      // console.log(nam, val);
      return { ...state, [nam]: val }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
