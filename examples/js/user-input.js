let name = prompt("What is your name?");
let multiplier = parseInt(prompt("Enter a number:"), 10);

let doc = new jsPDF();
doc.setFontSize(22);
doc.text(20, 20, "Questions");
doc.setFontSize(16);
doc.text(20, 30, "This belongs to: " + name);

for (let i = 1; i <= 12; i++) {
  doc.text(20, 30 + i * 10, i + " x " + multiplier + " = ___");
}

doc.addPage();
doc.setFontSize(22);
doc.text(20, 20, "Answers");
doc.setFontSize(16);

for (let i = 1; i <= 12; i++) {
  doc.text(20, 30 + i * 10, i + " x " + multiplier + " = " + i * multiplier);
}

// You wouldn't normally call this - this is just to make the
// demo not look broken as we've disabled auto update.
if (jsPDFEditor !== undefined) {
  jsPDFEditor.update(true);
}
