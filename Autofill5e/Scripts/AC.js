
var dex = parseInt(this.getField("DEXmod").value);
var bonus = this.getField("ArmorClass bonus").value;
var end = 10 + dex;
var shield = (this.getField("ShieldPresent").isBoxChecked(0)) ? 2 : 0;

switch(this.getField("Armor").value) {
    case "Leather Armor" :{
        end = 11 + dex;
        break;
    }
    case "Padded Armor" :{
        end = 11 + dex;
        break;
    }
    case "Hide Armor" :{
        end = 12 + Math.min(dex, 2);
        break;
    }
    case "Studded Leather Armor" :{
        end = 12 + dex;
        break;
    }
    case "Breastplate" :{
        end = 14 + Math.min(dex, 2);
        break;
    }
    case "Chain Shirt" :{
        end = 13 + Math.min(dex, 2);
        break;
    }
    case "Half Plate Armor" :{
        end = 15 + Math.min(dex, 2);
        break;
    }
    case "Ring Armor" :{
        end = 14;
        break;
    }
    case "Scale Armor" :{
        end = 14 + Math.min(dex, 2);
        break;
    }
    case "Chain Mail" :{
        end = 16;
        break;
    }
    case "Splint Armor":{
        end = 17;
        break;
    }
    case "Plate Armor" :{
        end = 18;
        break;
    }
    case "No/Natural" :{
        var ac1 = 10 + dex;
        var ac2 = 0;
        var shieldPresent = this.getField("ShieldPresent").isBoxChecked(0);
        if(this.getField("Class").value == "Barbarian") {
            ac1 = 10 + dex + parseInt(this.getField("CONmod").value);
        }
        if(this.getField("Class").value == "Monk" && !shieldPresent) {
            ac2 = 10 + dex + parseInt(this.getField("WISmod").value);
        }
        end = Math.max(ac1, ac2);
        break;
    }
}
end += shield;
end += bonus;
event.value = end;

