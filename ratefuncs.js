function linear(time, inflection = 10) {
	return time;
}

function sigmoid(x) {
	return (1 / (1 + (Math.E ** (-x))));
}

function smooth(time, inflection) {
	return (sigmoid(inflection * (time - 0.5)) - sigmoid(inflection / -2)) / (1 - (2 * sigmoid(inflection / -2)));
}

function smooth_derivative(time, inflection) {
	return (inflection * sigmoid(inflection * (time - 0.5)) * (1 - sigmoid(inflection * (time - 0.5))) / (1 - 2 * sigmoid(inflection / -2)));
}

function rush_into(time, inflection) {
	return 2 * smooth(time / 2, inflection);
}

function rush_from(time, inflection) {
	return 2 * smooth(time / 2 + 0.5, inflection) - 1;
}

function linger(time, inflection) {
	if (time <= 1 / smooth_derivative(0.5, inflection)) {
		return smooth_derivative(0.5, inflection) * time;
	} else {
		return 1;
	}
}