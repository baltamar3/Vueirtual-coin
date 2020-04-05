import numeral from 'numeral'

const dollarFilter = (valor) =>{
    if (!valor) {
        return "$ 0"
    }
    return numeral(valor).format("($ 0.00a)")
}

const percentFilter = (valor) =>{
    if (!valor) {
        return "0%"
    }
    return `${Number(valor).toFixed(2)}%`
}

export{
    dollarFilter,
    percentFilter
}