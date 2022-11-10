namespace sprites {
    
/**
 * Sets a random position for the sprite
 */

//% blockId=setRndPos block="set $sprite=variables_get to a random position every $seconds seconds"
//% group="Random Place"
//% weight=10
//% blockGap=8
    export function setRndPos(sprite: Sprite, seconds: number) {

        let ms = seconds * 1000
        
        game.onUpdateInterval(ms, function() {
            
            let screenWidth = scene.screenWidth()
            let screenHeight = scene.screenHeight()

            let randX = randint(0, screenWidth)
            let randY = randint(0, screenHeight)

            sprite.x = randX
            sprite.y = randY

        })


    }

}