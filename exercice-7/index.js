function computeNotes(array) {
	let somme = 0;
 	for (i = 0; i < array.length; i++) {
		somme += array[i];
	}
	moyenne = somme/i;
    alert(moyenne);
    return moyenne;
}

computeNotes([2, 3, 10, 14, 18])