
var cChoice = app.popUpMenu(
["Light", "Leather Armor", "Padded Armor", "Studded Leather Armor"],
["Medium", "Scale Armor", "Hide Armor", "Chain Shirt", "Breastplate", "Half Plate Armor", ],
["Heavy", "Chain Mail", "Plate Armor", "Splint Armor", "Ring Armor"],
"No/Natural");

if(cChoice == "" || cChoice == null) cChoice = this.getField("Armor").value;

this.getField("Armor").value = cChoice;
this.getField("Invisible").setFocus();

