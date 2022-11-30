import Config from "././Config/Config"
import {prefix, mc} from "./Code/Utils"

const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText");
register("chat", (ripbozo, mob) => {
    let fullMessage = ChatLib.getChatMessage(ripbozo).toLowerCase();
    if (fullMessage.indexOf("became a ghost.") == -1) {
        DisplayScreen()
    }
).setCriteria(" ☠ You were killed by ${mob}")

function DisplayScreen(){
    CheatTempBan(getTime())
}

function getTime(){
    return "29d 23h 59m 59s"
}

function CheatTempBan(time){
    banned = new ChatComponentText("§cYou are temporarily banned for §f" + time + " §cfrom this server!\n\n§7Reason: §rCheating through the use of unfair game advantages.\n§7Find out more: §b§nhttps://www.hypixel.net/appeal\n\n§7Ban ID: §r#" + makeid()+"\n§7Sharing your Ban ID may affect the processing of your appeal!")
    mc.func_147114_u().func_147298_b().func_150718_a(banned)
  }

  function makeid() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *charactersLength));
   }
   return result;
  }  
