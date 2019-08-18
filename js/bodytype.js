function functionBodyType(Sex, bodyType1) {
	if (Sex == "Male" && bodyType1 >= 85) {
		var Sex = "Femboy";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 <= 15) {
		var Sex = "Tomboy";
		return Sex;
	}
	else if (Sex == "Male" && bodyType1 <= 84) {
		var Sex = "Male";
		return Sex;
	}
	else if (Sex == "Female" && bodyType1 >= 16) {
		var Sex = "Female";
		return Sex;
	}
}