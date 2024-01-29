function firstChar(text) {
  // your code here
	let trText = text.trim();
	return trText.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
