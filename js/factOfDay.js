function getFact(){
    const str = localStorage.getItem('arts')
    const item = str;
    if(item == null)
    {
        alert('UwU')
    }
    else
    {
        console.log(typeof(item))
        alert(item)
    }
}