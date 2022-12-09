function lv1(){
    if(gamestate=="LEVEL1"){
  
      if(healthBar.width>200){
        healthBar.width=200
        healthBar.x=125
      }
      //move
    
      if(controller=="WASD"){
      if(keyDown("up")||keyDown("w")){
        commander.y-=8
      }
      if(keyDown("down")||keyDown("s")){
        commander.y+=8
      }
      if(keyDown("left")||keyDown("a")){
        commander.x-=12
      }
      if(keyDown("right")||keyDown("d")){
        commander.x+=12
      }
      }
      if(controller=="MOUSE"){
      commander.x=World.mouseX
      commander.y=World.mouseY
      }
      if(commander.isTouching(topwall)){
        commander.y+=8
      }
      if(commander.isTouching(bottomwall)){
        commander.y-=8
      }
      if(commander.isTouching(leftwall)){
        commander.x+=12
      }
      if(commander.isTouching(rightwall)){
        commander.x-=12
      }
      //troops
    
      // bullet = createSprite(troop.x,troop.y,10,10)
      // bullet.shapeColor = "blue"
      // bullet.lifetime = 25
      // bullet.velocityY=-enemybulletspeed
      // bullets.push(bullet)
    
      //spawn
      if(frameCount%30==0){
  
      spawnTroops();
    
      
    }
    if(frameCount%480==0){
      troopIcon = createSprite(random(8,792),-100,25,50)
      troopIcon.shapeColor = "lightgreen"
      troopIcon.velocityY=4
      troopIcon.lifetime=300
      troopState=1
    }
      //kill
      for(i=0;i<enemies.length;i++){
        if(enemies[i].isTouching(commander)){
          if(frameCount%10==0){
            med = createSprite(enemies[i].x,enemies[i].y,10,10)
            med.shapeColor = "white"
            med.depth=-1
            meds.push(med)
          }
          else{
            coin = createSprite(enemies[i].x,enemies[i].y,10,10)
            coin.shapeColor = "yellow"
            coins.push(coin)
          }
          enemies[i].y=800
          enemies[i].destroy();
        }
      }
      for(i=0;i<enemies.length;i++){
          if(enemies[i].isTouching(bullets)){
            if(frameCount%5==0){
              med = createSprite(enemies[i].x,enemies[i].y,10,10)
              med.shapeColor = "white"
              med.depth=-1
              meds.push(med)
              console.log("med")
            }
            else{
              coin = createSprite(enemies[i].x,enemies[i].y,10,10)
              coin.shapeColor = "yellow"
              coins.push(coin)
            }
            enemies[i].y=800
    
            enemies[i].destroy();
          }
      }
      
    
      //shoot
    
      
        enemyShoot();
    
    
    
    
    
    
    
    
    
    
      
      //damage
      for(i=0;i<enemybullets.length;i++){
        if(enemybullets[i].isTouching(commander)){
        enemybullets[i].destroy
        healthBar.width=healthBar.width-5
        healthBar.x-=2.5
              if(healthBar.width==0){
            healthBar.visible=false
            gotostartpage();
          }
        }
      }
      //collect
      for(i=0;i<coins.length;i++){
      if(coins[i].isTouching(commander)){
        money++
        coins[i].destroy();
      }
    }
      for(i=0;i<meds.length;i++){
     if(meds[i].isTouching(commander)){
          healthBar.width=healthBar.width+50
          healthBar.x+=25
    
    
          meds[i].destroy();
    
      }
    
    
    
      }
      if(troopState==1){
      if(troopIcon.isTouching(commander)){
        newTroop()
        troopIcon.destroy();
        troopState=0
      }
      }
      //controller
      if(keyDown("m")){
        controller="MOUSE"
      }
      if(keyDown("n")){
        controller="WASD"
      }
    textSize(20)
    fill(20)
      time=(Math.round((50-((frameCount-levelstart)/24))*100))/100
      text("Time: " + time, windowWidth-200, 40)
      text("Total coins: " +money,windowWidth-200, 75)

    if((frameCount-levelstart)==1200){

      gotostartpage();
    }
    
        //pause
    pause()
    
    if(gamestate=="PAUSELEVEL1"){
      for(i=0;i<enemies.length;i++){
        enemies[i].velocityY=0;
        enemies[i].lifetime=-1
      }
      for(i=0;i<enemybullets.length;i++){
         enemybullets[i].velocityY=0
         enemybullets[i].velocityX=0
         enemybullets[i].lifetime=-1 
      }
      for(i=0;i<bullets.length;i++){
        bullets[i].velocityY=0 
        bullets[i].velocityX=0
        bullets[i].lifetime=-1 
     }
     if(troopState==1){
     troopIcon.velocityY=0
     }
     
    
    }
    
    }
   }
   function lv2(){
    if(gamestate=="LEVEL2"){
  
      if(healthBar.width>200){
        healthBar.width=200
        healthBar.x=125
      }
      //move
    
      if(controller=="WASD"){
      if(keyDown("up")||keyDown("w")){
        commander.y-=8
      }
      if(keyDown("down")||keyDown("s")){
        commander.y+=8
      }
      if(keyDown("left")||keyDown("a")){
        commander.x-=12
      }
      if(keyDown("right")||keyDown("d")){
        commander.x+=12
      }
      }
      if(controller=="MOUSE"){
      commander.x=World.mouseX
      commander.y=World.mouseY
      }
      if(commander.isTouching(topwall)){
        commander.y+=8
      }
      if(commander.isTouching(bottomwall)){
        commander.y-=8
      }
      if(commander.isTouching(leftwall)){
        commander.x+=12
      }
      if(commander.isTouching(rightwall)){
        commander.x-=12
      }
      //troops
    
      // bullet = createSprite(troop.x,troop.y,10,10)
      // bullet.shapeColor = "blue"
      // bullet.lifetime = 25
      // bullet.velocityY=-enemybulletspeed
      // bullets.push(bullet)
    
      //spawn
      if(frameCount%10==0){
  
      spawnTroops();
  
      
    }
    if(frameCount%480==0){
      troopIcon = createSprite(random(8,792),-100,25,50)
      troopIcon.shapeColor = "lightgreen"
      troopIcon.velocityY=4
      troopIcon.lifetime=300
      troopState=1
    }
      //kill
      for(i=0;i<enemies.length;i++){
        if(enemies[i].isTouching(commander)){
          if(frameCount%10==0){
            med = createSprite(enemies[i].x,enemies[i].y,10,10)
            med.shapeColor = "white"
            med.depth=-1
            meds.push(med)
          }
          else{
            coin = createSprite(enemies[i].x,enemies[i].y,10,10)
            coin.shapeColor = "yellow"
            coins.push(coin)
          }
          enemies[i].y=800
          enemies[i].destroy();
        }
      }
      for(i=0;i<enemies.length;i++){
          if(enemies[i].isTouching(bullets)){
            if(frameCount%5==0){
              med = createSprite(enemies[i].x,enemies[i].y,10,10)
              med.shapeColor = "white"
              med.depth=-1
              meds.push(med)
              console.log("med")
            }
            else{
              coin = createSprite(enemies[i].x,enemies[i].y,10,10)
              coin.shapeColor = "yellow"
              coins.push(coin)
            }
            enemies[i].y=800
    
            enemies[i].destroy();
          }
      }
      
    
      //shoot
    
      
        enemyShoot();
    
    
    
    
    
    
    
    
    
    
      
      //damage
      for(i=0;i<enemybullets.length;i++){
        if(enemybullets[i].isTouching(commander)){
        enemybullets[i].destroy
        healthBar.width=healthBar.width-5
        healthBar.x-=2.5
              if(healthBar.width==0){
            healthBar.visible=false
            gotostartpage();
          }
        }
      }
      //collect
      for(i=0;i<coins.length;i++){
      if(coins[i].isTouching(commander)){
        money++
        coins[i].destroy();
      }
    }
      for(i=0;i<meds.length;i++){
     if(meds[i].isTouching(commander)){
          healthBar.width=healthBar.width+50
          healthBar.x+=25
    
    
          meds[i].destroy();
    
      }
    
    
    
      }
      if(troopState==1){
      if(troopIcon.isTouching(commander)){
        newTroop()
        troopIcon.destroy();
        troopState=0
      }
      }
      //controller
      if(keyDown("m")){
        controller="MOUSE"
      }
      if(keyDown("n")){
        controller="WASD"
      }
      fill(20)
      textSize(20)
      time=(Math.round((50-((frameCount-levelstart)/24))*100))/100
      text("Time: " + time, windowWidth-200, 40)
      text("Total coins: " +money,windowWidth-200, 75)

    if((frameCount-levelstart)==1200){

      gotostartpage();
    }
    
        //pause
    pause()
    
    if(gamestate=="PAUSELEVEL2"){
      for(i=0;i<enemies.length;i++){
        enemies[i].velocityY=0;
        enemies[i].lifetime=-1
      }
      for(i=0;i<enemybullets.length;i++){
         enemybullets[i].velocityY=0
         enemybullets[i].velocityX=0
         enemybullets[i].lifetime=-1 
      }
      for(i=0;i<bullets.length;i++){
        bullets[i].velocityY=0 
        bullets[i].velocityX=0
        bullets[i].lifetime=-1 
     }
     if(troopState==1){
     troopIcon.velocityY=0
     }
     
    
    }
    
    }
   }
   
   function lv3(){
    if(gamestate=="LEVEL3"){
  
      if(healthBar.width>200){
        healthBar.width=200
        healthBar.x=125
      }
      //move
    
      if(controller=="WASD"){
      if(keyDown("up")||keyDown("w")){
        commander.y-=8
      }
      if(keyDown("down")||keyDown("s")){
        commander.y+=8
      }
      if(keyDown("left")||keyDown("a")){
        commander.x-=12
      }
      if(keyDown("right")||keyDown("d")){
        commander.x+=12
      }
      }
      if(controller=="MOUSE"){
      commander.x=World.mouseX
      commander.y=World.mouseY
      }
      if(commander.isTouching(topwall)){
        commander.y+=8
      }
      if(commander.isTouching(bottomwall)){
        commander.y-=8
      }
      if(commander.isTouching(leftwall)){
        commander.x+=12
      }
      if(commander.isTouching(rightwall)){
        commander.x-=12
      }
      //troops
    
      // bullet = createSprite(troop.x,troop.y,10,10)
      // bullet.shapeColor = "blue"
      // bullet.lifetime = 25
      // bullet.velocityY=-enemybulletspeed
      // bullets.push(bullet)
    
      //spawn
      if(frameCount%10==0){
  
      spawnTroops();
      
    }
    if(frameCount%480==0){
      troopIcon = createSprite(random(8,792),-100,25,50)
      troopIcon.shapeColor = "lightgreen"
      troopIcon.velocityY=4
      troopIcon.lifetime=300
      troopState=1
    }
      //kill
      for(i=0;i<enemies.length;i++){
        if(enemies[i].isTouching(commander)){
          if(frameCount%10==0){
            med = createSprite(enemies[i].x,enemies[i].y,10,10)
            med.shapeColor = "white"
            med.depth=-1
            meds.push(med)
          }
          else{
            coin = createSprite(enemies[i].x,enemies[i].y,10,10)
            coin.shapeColor = "yellow"
            coins.push(coin)
          }
          enemies[i].y=800
          enemies[i].destroy();
        }
      }
      for(i=0;i<enemies.length;i++){
          if(enemies[i].isTouching(bullets)){
            if(frameCount%5==0){
              med = createSprite(enemies[i].x,enemies[i].y,10,10)
              med.shapeColor = "white"
              med.depth=-1
              meds.push(med)
              console.log("med")
            }
            else{
              coin = createSprite(enemies[i].x,enemies[i].y,10,10)
              coin.shapeColor = "yellow"
              coins.push(coin)
            }
            enemies[i].y=800
    
            enemies[i].destroy();
          }
      }
      
    
      //shoot
    
      
        enemyShoot();
    
    
    
    
    
    
    
    
    
    
      
      //damage
      for(i=0;i<enemybullets.length;i++){
        if(enemybullets[i].isTouching(commander)){
        enemybullets[i].destroy
        healthBar.width=healthBar.width-5
        healthBar.x-=2.5
              if(healthBar.width==0){
            healthBar.visible=false
            gotostartpage();
          }
        }
      }
      //collect
      for(i=0;i<coins.length;i++){
      if(coins[i].isTouching(commander)){
        money++
        coins[i].destroy();
      }
    }
      for(i=0;i<meds.length;i++){
     if(meds[i].isTouching(commander)){
          healthBar.width=healthBar.width+50
          healthBar.x+=25
    
    
          meds[i].destroy();
    
      }
    
    
    
      }
      if(troopState==1){
      if(troopIcon.isTouching(commander)){
        newTroop()
        troopIcon.destroy();
        troopState=0
      }
      }
      //controller
      if(keyDown("m")){
        controller="MOUSE"
      }
      if(keyDown("n")){
        controller="WASD"
      }
    
      textSize(20)
      fill(20)
      time=(Math.round((50-((frameCount-levelstart)/24))*100))/100
      text("Time: " + time, windowWidth-200, 40)
      text("Total coins: " +money,windowWidth-200, 75)

    if((frameCount-levelstart)==1200){

      gotostartpage();
    }
    
        //pause
    pause()
    
    if(gamestate=="PAUSELEVEL3"){
      for(i=0;i<enemies.length;i++){
        enemies[i].velocityY=0;
        enemies[i].lifetime=-1
      }
      for(i=0;i<enemybullets.length;i++){
         enemybullets[i].velocityY=0
         enemybullets[i].velocityX=0
         enemybullets[i].lifetime=-1 
      }
      for(i=0;i<bullets.length;i++){
        bullets[i].velocityY=0 
        bullets[i].velocityX=0
        bullets[i].lifetime=-1 
     }
     if(troopState==1){
     troopIcon.velocityY=0
     }
     
    
    }
    
    }
   }
   