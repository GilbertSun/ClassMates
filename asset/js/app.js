AV.initialize("xk1xmdzk3bey80p106m9rankxxz8x1v1f6w8jekrwmx96box", "mlbr09o4v7a17pvkzdu46scgvahnssvcdxmrpgtx31esw6bq");

var TestObject = AV.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
    success: function(object) {
        alert("LeanCloud works!");
    }
});
