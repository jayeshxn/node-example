setTimeout(function() {
    console.log('3 seconds have passed!')
}, 3000)

setTimeout(() => {
    console.log('2.99 seconds have passed!')
}, 2999)
function x(y) {
    console.log('Inside x')
    y()
}

x(function () {
    console.log('Inside y')
})