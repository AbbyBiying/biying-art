int barWidth = 20;
int lastBar = -1;

void setup() 
{
  size(500, 200);
  colorMode(HSB, height, height, height);  
  noStroke();
  background(0);
  textSize(20);
  textAlign(CENTER, CENTER);
}

void draw() 
{
  int whichBar = mouseX / barWidth;    

  strokeWeight(10);
  if (whichBar != lastBar) {
    int barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }
  text("abbyzhangnyc@gmail.com", 150, 100, 100);
  fill(200);

}