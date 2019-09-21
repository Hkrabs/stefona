
		const keys = [
			{
				'note': 'C4',
				'type': 'white'
			},
			{
				'note': 'C#4',
				'type': 'black'
			},
			{
				'note': 'D4',
				'type': 'white'
			},
			{
				'note': 'D#4',
				'type': 'black'
			},
			{
				'note': 'E4',
				'type': 'white'
			},
			{
				'note': 'F4',
				'type': 'white'
			},
			{
				'note': 'F#4',
				'type': 'black'
			},
			{
				'note': 'G4',
				'type': 'white'
			},
			{
				'note': 'G#4',
				'type': 'black'
			},
			{
				'note': 'A4',
				'type': 'white'
			},
			{
				'note': 'A#4',
				'type': 'black'
			},
			{
				'note': 'B4',
				'type': 'white'
			},
			{
				'note': 'C5',
				'type': 'white'
			},
			{
				'note': 'C#5',
				'type': 'black'
			},
			{
				'note': 'D5',
				'type': 'white'
			},
			{
				'note': 'D#5',
				'type': 'black'
			},
			{
				'note': 'E5',
				'type': 'white'
			},
			{
				'note': 'F5',
				'type': 'white'
			},
			{
				'note': 'F#5',
				'type': 'black'
			},
			{
				'note': 'G5',
				'type': 'white'
			},

		]

		var synth = new Tone.Synth().toMaster();

		function setup() {
			resizeCanvas(640, 480);
			background(255);
			let a = 0;
			for (let i = 0; i < keys.length; i++) {
				if (keys[i].type === 'white')  {
					keys[i].x = a * 50;
					keys[i].y = 0;
					keys[i].width = 50;
					keys[i].height = 120;
					keys[i].graphics = createGraphics(keys[i].width, keys[i].height);
					a++;
				}
			}
			a = 0;
			for (let i = 0; i < keys.length; i++) {
				if (keys[i].type === 'black')  {
					keys[i].x = a * 50 - 12.5;
					keys[i].y = 0;
					keys[i].width = 25;
					keys[i].height = 75;
					keys[i].graphics = createGraphics(keys[i].width, keys[i].height);
				}
				else {
					a++;
				}
			}
		}

		function draw() {

			cursor(ARROW);
			for (let i = 0; i < keys.length; i++) {
				if (keys[i].type === 'white')  {
					keys[i].graphics.fill(255);
					if (mouseX > keys[i].x && mouseX < keys[i].x + keys[i].width && mouseY > keys[i].y && mouseY < keys[i].y + keys[i].height) {
						keys[i].graphics.fill(200);
						cursor(HAND);
					}
					keys[i].graphics.rect(0, 0, keys[i].width, keys[i].height);
					image(keys[i].graphics, keys[i].x, keys[i].y, keys[i].width, keys[i].height);
				}
			}
			for (let i = 0; i < keys.length; i++) {
				if (keys[i].type === 'black')  {
					keys[i].graphics.fill(0);
					if (mouseX > keys[i].x && mouseX < keys[i].x + keys[i].width && mouseY > keys[i].y && mouseY < keys[i].y + keys[i].height) {
						keys[i].graphics.fill(150);
						cursor(HAND);
					}
					keys[i].graphics.rect(0, 0, keys[i].width, keys[i].height);
					image(keys[i].graphics, keys[i].x, keys[i].y, keys[i].width, keys[i].height);
				}
			}

		}

		function mousePressed(e) {
			let foundKey = keys.find((i) => {
				return (i.type === 'white' && e.offsetX > i.x + 5 && e.offsetX < i.x + i.width - 5 && e.offsetY > i.y && e.offsetY < i.y + i.height) ||	(i.type === 'black' && e.offsetX > i.x && e.offsetX < i.x + i.width && e.offsetY > i.y && e.offsetY < i.y + i.height);
			});

			console.log(e);
			console.log(foundKey);

			if (foundKey) {
				synth.triggerAttackRelease(foundKey.note, '8n');
			}
		}
