
var value = "";

var lvl = this.getField("Level1").value;
var suffix = "";
var thisField = this.getField(event.target.name);
 
if(thisField.page == 3) {
  suffix = "P3.SpellsPage.";
  lvl = this.getField("Level2").value;
}
if (this.getField(suffix + "CasterType").value == "Multi") 
    lvl = this.getField(suffix + "MultiLevel").value;

switch (this.getField(suffix + "CasterType").value) {
    case "Multi":
    case "Full" : {
        if(lvl < 5) value = 0;
        if(lvl == 5) value = 2;
        if(lvl > 5) value = 3;
        break;
    }
    case "Half" : {
        if(lvl < 9 ) value = 0;
        else if(lvl < 11) value = 2;
        else if(lvl > 10) value = 3;
        break;
    }
    case "Warlock" : {
        if(lvl < 4) value = 0;
        else if (lvl == 5 || lvl == 5) value = 2;
        else if (lvl > 6) value = 0;
        break;
    }

    default: { 
        value= "";
        break;
    }
}

event.value = value;

