
var value = parseInt(this.getField("DEXmod").value) + this.getField("Initiative bonus").value;

if(value > 0) {
    event.value = "+" + parseInt(value);
}
else {
    event.value = value;
}
