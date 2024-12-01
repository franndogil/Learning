function isEven(numerin){
    if(numerin>=0){
        if (numerin == 0)
            return true
        else{
            if (numerin == 1)
                return false
            else
                return isEven(numerin - 2)  //importante el return ya que estoy en una funcion recursiva
        }
    }
    else{
        return isEven(numerin+2)
    }
}

console.log(isEven(-8))