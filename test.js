
new Promise( function(resolve,reject){

    const xml = new XMLHttpRequest()
    xml.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xml.onreadystatechange = function(){

        if(this.readyState == 4) {
            const response = this.responseText
            const data = JSON.parse(response)
            resolve(data)
        }
    }
    xml.send()
})
.then((response)=>{
    console.log(response)
})