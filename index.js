const connectionString = 'http://192.168.0.103:80'

  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  let colors = {
    one: [255,255,255],
    two: [255,255,255],
    three: [255,255,255],
    four: [255,255,255],
    five: [255,255,255],
    six: [255,255,255],
  }


document.querySelector('.triangle-one').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            }
          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.one = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });

  document.querySelector('.triangle-two').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
              ],
              brightness: 255
            },
            {
              start: 9,
              stop: 18,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            }

          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.two = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });

  document.querySelector('.triangle-three').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
              ],
              brightness: 255
            },
            {
              start: 9,
              stop: 18,
              col: [
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
              ],
              brightness: 255
            },

            {
              start: 18,
              stop: 27,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            }

          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.three = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });


  document.querySelector('.triangle-four').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
              ],
              brightness: 255
            },
            {
              start: 9,
              stop: 18,
              col: [
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
              ],
              brightness: 255
            },

            {
              start: 18,
              stop: 27,
              col: [
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
              ],
              brightness: 255
            },
            
            {
              start: 27,
              stop: 36,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            }



          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.four = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });

  document.querySelector('.triangle-five').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
              ],
              brightness: 255
            },
            {
              start: 9,
              stop: 18,
              col: [
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
              ],
              brightness: 255
            },

            {
              start: 18,
              stop: 27,
              col: [
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
              ],
              brightness: 255
            },
            
            {
              start: 27,
              stop: 36,
              col: [
                [colors.four[0], colors.four[1], colors.four[2], 255],
                [colors.four[0], colors.four[1], colors.four[2], 255],
                [colors.four[0], colors.four[1], colors.four[2], 255],
              ],
              brightness: 255
            },

            {
              start: 36,
              stop: 45,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            },




          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.five = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });

  document.querySelector('.triangle-six').addEventListener('click', function() {
    let currentColor = hexToRgb(document.getElementById('color-picker').value);

    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
              col: [
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
                [colors.one[0], colors.one[1], colors.one[2], 255],
              ],
              brightness: 255
            },
            {
              start: 9,
              stop: 18,
              col: [
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
                [colors.two[0], colors.two[1], colors.two[2], 255],
              ],
              brightness: 255
            },

            {
              start: 18,
              stop: 27,
              col: [
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
                [colors.three[0], colors.three[1], colors.three[2], 255],
              ],
              brightness: 255
            },
            
            {
              start: 27,
              stop: 36,
              col: [
                [colors.four[0], colors.four[1], colors.four[2], 255],
                [colors.four[0], colors.four[1], colors.four[2], 255],
                [colors.four[0], colors.four[1], colors.four[2], 255],
              ],
              brightness: 255
            },

            {
              start: 36,
              stop: 45,
              col: [
                [colors.five[0], colors.five[1], colors.five[2], 255],
                [colors.five[0], colors.five[1], colors.five[2], 255],
                [colors.five[0], colors.five[1], colors.five[2], 255],
              ],
              brightness: 255
            },

            {
              start: 45,
              stop: 54,
              col: [
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
                [currentColor.r, currentColor.g, currentColor.b, 255],
              ],
              brightness: 255
            },





          ]
        })
      };
    this.style.fill = document.getElementById('color-picker').value;
    console.log(hexToRgb(document.getElementById('color-picker').value))
    console.log(currentColor.r)
    colors.six = [currentColor.r, currentColor.g, currentColor.b]
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
    console.log(colors)
  });






  document.querySelector('#reset').addEventListener('click', function() {
    const trianglesArray = document.querySelectorAll('.triangle');
    let requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seg: [
            {
              start: 0,
              stop: 9,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            },
                {
              start: 9,
              stop: 18,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            },
                    {
              start: 18,
              stop: 27,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            },
                    {
              start: 27,
              stop: 36,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            },
                    {
              start: 36,
              stop: 45,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            }
         ,
                    {
              start: 45,
              stop: 53,
        
              col:[
                  [255, 255, 255, 255],
                [255, 255, 255, 255],
                [255, 255, 255, 255]
              ] ,
              brightness: 255
            }
                  
          ]
        })
      };

      trianglesArray.forEach(element => {
        element.style.fill = 'white';

      });
    fetch(`${connectionString}/json/state`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  });

