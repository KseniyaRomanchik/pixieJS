const fs = require('fs')
const MidiConvert = require('midiconvert')

fs.readFile("midi.mid", "binary", function(err, midiBlob) {

  // var arrayBuffer;
  // var fileReader = new FileReader();

  // fileReader.onload = function(event) {
  //   arrayBuffer = event.target.result;
  // };
  // fileReader.readAsText(midiBlob);
  // console.log(fileReader)

  if (!err) {
    var midi = MidiConvert.parse(midiBlob)
    fs.writeFile('midi.json', JSON.stringify(midi), f => f)
  }
})