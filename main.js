const { fabric } = require("./fabric");

var canvas= new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width= 30;
block_height = 30;

var player_object= "";
var block_object= "";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object= img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_object);
    });
}
function block_update(block_image){
    fabric.Image.fromURL(block_image,function(img){
        block_object= img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_object);
    });
}