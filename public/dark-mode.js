document.addEventListener("DOMContentLoaded", () => {
	const lightSwitches = document.querySelectorAll('.light-switch');

	if (lightSwitches.length > 0) {
		lightSwitches.forEach((lightSwitch, i) => {
			if (localStorage.getItem('dark-mode') === 'true') {
				lightSwitch.checked = true;
			}
			lightSwitch.addEventListener('click', () => {
				const { checked } = lightSwitch;
				console.log(`lightSwitch ${i} is ${checked ? 'checked' : 'unchecked'}`);
				lightSwitches.forEach((el, n) => {
					if (n !== i) {
						el.checked = checked;
					}
				});
				if (lightSwitch.checked) {
					document.documentElement.classList.add('dark');
					localStorage.setItem('dark-mode', 'true');
				} else {
					document.documentElement.classList.remove('dark');
					localStorage.setItem('dark-mode', 'false');
				}
			});
		});
	}
});
