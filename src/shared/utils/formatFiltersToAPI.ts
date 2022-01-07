export const formatFiltersToAPI = (array: string[]) => {
  let formattedFilter = ''

  array.forEach((filter, index) => {
    if (index === 0) {
      formattedFilter += `type[]=${filter}`
      return
    }
      
    formattedFilter += `&type[]=${filter}`
  })

  return formattedFilter
}