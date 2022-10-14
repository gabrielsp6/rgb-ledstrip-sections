
#include <Adafruit_NeoPixel.h>
#include <Ramp.h> 

ramp red;  
ramp blue;

String myColor;

#ifdef __AVR__
#include <avr/power.h> 
#endif

#define PIN        6 
#define NUMPIXELS 24 
Adafruit_NeoPixel strip(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);
#define DELAYVAL 15 

void setup() {
 Serial.begin(9600);  
#if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
#endif

      
  red.go(140, 1500);                          
  blue.go(255, 1500);        
  
  strip.begin(); 
}


void loop() {

  
 while (Serial.available()==0){

}
  myColor=Serial.readString();
 

 
  while(blue.isFinished() == false && red.isFinished() == false) {

    strip.show(); 
    strip.setPixelColor(1, red.update(), 0, blue.update());

    strip.fill(strip.Color(red.update(), 0, blue.update()), 0, 24);
  }
    blue.go(1,2500);
    red.go(1,2500);


  Serial.print("red   ");
  Serial.println(red.update());
  Serial.print("blue   ");
  Serial.println(blue.update());
  delay(50);

  if(blue.getValue() == 1) {
    red.go(140, 1500);                          
    blue.go(255, 1500);        
  }


  
  
  
 
}
 
  
