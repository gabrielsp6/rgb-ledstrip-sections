
#include <Adafruit_NeoPixel.h>

String myColor;

#ifdef __AVR__
#include <avr/power.h>
#endif

#define PIN        6
#define NUMPIXELS 24
Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 15

String readString;
String redCode, greenCode, blueCode;
int r, g, b;
int pos;

void setup() {
  Serial.begin(9600);
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif

  r = 0;
  b = 0;
  g = 0;
  strip.clear();
  strip.begin();
}


void loop() {


  while (Serial.available()) {
    delay(3);  //delay to allow buffer to fill
    if (Serial.available() > 0) {

      readString = Serial.readString();
    }
  }



  redCode = readString.substring(2 , 5);
  greenCode = readString.substring(6, 9);
  blueCode = readString.substring(10, 13);

  pos = readString.substring(0 , 1).toInt();
  r = redCode.toInt();
  g = greenCode.toInt();
  b = blueCode.toInt();
  
  Serial.println(pos);
  Serial.println(r);
  Serial.println(g);
  Serial.println(b);


  delay(50);
if(pos == 1) {
  strip.fill(strip.Color(r,g,b), 0, 8);
}else if(pos == 2) {
  strip.fill(strip.Color(r,g,b), 8, 8);
}else if(pos == 3) {
strip.fill(strip.Color(r,g,b), 16, 8);
 
}






 

}
